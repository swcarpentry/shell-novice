"""
Check repository settings.
"""


import sys
import os
from subprocess import Popen, PIPE
import re
from argparse import ArgumentParser

from util import require
from reporter import Reporter

# Import this way to produce a more useful error message.
try:
    import requests
except ImportError:
    print('Unable to import requests module: please install requests', file=sys.stderr)
    sys.exit(1)


# Pattern to match Git command-line output for remotes => (user name, project name).
P_GIT_REMOTE = re.compile(r'upstream\s+(?:https://|git@)github.com[:/]([^/]+)/([^.]+)(\.git)?\s+\(fetch\)')

# Repository URL format string.
F_REPO_URL = 'https://github.com/{0}/{1}/'

# Pattern to match repository URLs => (user name, project name)
P_REPO_URL = re.compile(r'https?://github\.com/([^.]+)/([^/]+)/?')

# API URL format string.
F_API_URL = 'https://api.github.com/repos/{0}/{1}/labels'

# Expected labels and colors.
EXPECTED = {
    'help wanted': 'dcecc7',
    'status:in progress': '9bcc65',
    'status:changes requested': '679f38',
    'status:wait': 'fff2df',
    'status:refer to cac': 'ffdfb2',
    'status:need more info': 'ee6c00',
    'status:blocked': 'e55100',
    'status:out of scope': 'eeeeee',
    'status:duplicate': 'bdbdbd',
    'type:typo text': 'f8bad0',
    'type:bug': 'eb3f79',
    'type:formatting': 'ac1357',
    'type:template and tools': '7985cb',
    'type:instructor guide': '00887a',
    'type:discussion': 'b2e5fc',
    'type:enhancement': '7fdeea',
    'type:clarification': '00acc0',
    'type:teaching example': 'ced8dc',
    'good first issue': 'ffeb3a',
    'high priority': 'd22e2e'
}


def main():
    """
    Main driver.
    """

    args = parse_args()
    reporter = Reporter()
    repo_url = get_repo_url(args.repo_url)
    check_labels(reporter, repo_url)
    reporter.report()


def parse_args():
    """
    Parse command-line arguments.
    """

    parser = ArgumentParser(description="""Check repository settings.""")
    parser.add_argument('-r', '--repo',
                        default=None,
                        dest='repo_url',
                        help='repository URL')
    parser.add_argument('-s', '--source',
                        default=os.curdir,
                        dest='source_dir',
                        help='source directory')

    args, extras = parser.parse_known_args()
    require(not extras,
            'Unexpected trailing command-line arguments "{0}"'.format(extras))

    return args


def get_repo_url(repo_url):
    """
    Figure out which repository to query.
    """

    # Explicitly specified.
    if repo_url is not None:
        return repo_url

    # Guess.
    cmd = 'git remote -v'
    p = Popen(cmd, shell=True, stdin=PIPE, stdout=PIPE,
              close_fds=True, universal_newlines=True, encoding='utf-8')
    stdout_data, stderr_data = p.communicate()
    stdout_data = stdout_data.split('\n')
    matches = [P_GIT_REMOTE.match(line) for line in stdout_data]
    matches = [m for m in matches if m is not None]
    require(len(matches) == 1,
            'Unexpected output from git remote command: "{0}"'.format(matches))

    username = matches[0].group(1)
    require(
        username, 'empty username in git remote output {0}'.format(matches[0]))

    project_name = matches[0].group(2)
    require(
        username, 'empty project name in git remote output {0}'.format(matches[0]))

    url = F_REPO_URL.format(username, project_name)
    return url


def check_labels(reporter, repo_url):
    """
    Check labels in repository.
    """

    actual = get_labels(repo_url)
    extra = set(actual.keys()) - set(EXPECTED.keys())

    reporter.check(not extra,
                   None,
                   'Extra label(s) in repository {0}: {1}',
                   repo_url, ', '.join(sorted(extra)))

    missing = set(EXPECTED.keys()) - set(actual.keys())
    reporter.check(not missing,
                   None,
                   'Missing label(s) in repository {0}: {1}',
                   repo_url, ', '.join(sorted(missing)))

    overlap = set(EXPECTED.keys()).intersection(set(actual.keys()))
    for name in sorted(overlap):
        reporter.check(EXPECTED[name].lower() == actual[name].lower(),
                       None,
                       'Color mis-match for label {0} in {1}: expected {2}, found {3}',
                       name, repo_url, EXPECTED[name], actual[name])


def get_labels(repo_url):
    """
    Get actual labels from repository.
    """

    m = P_REPO_URL.match(repo_url)
    require(
        m, 'repository URL {0} does not match expected pattern'.format(repo_url))

    username = m.group(1)
    require(username, 'empty username in repository URL {0}'.format(repo_url))

    project_name = m.group(2)
    require(
        username, 'empty project name in repository URL {0}'.format(repo_url))

    url = F_API_URL.format(username, project_name)
    r = requests.get(url)
    require(r.status_code == 200,
            'Request for {0} failed with {1}'.format(url, r.status_code))

    result = {}
    for entry in r.json():
        result[entry['name']] = entry['color']
    return result


if __name__ == '__main__':
    main()
