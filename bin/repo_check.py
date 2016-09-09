#!/usr/bin/env python

"""
Check repository settings.
"""

from __future__ import print_function
import sys
import os
from subprocess import Popen, PIPE
import re
from optparse import OptionParser

from util import Reporter, load_yaml, require

# Import this way to produce a more useful error message.
try:
    import requests
except ImportError:
    print('Unable to import requests module: please install requests', file=sys.stderr)
    sys.exit(1)


# Pattern to match Git command-line output for remotes => (user name, project name).
P_GIT_REMOTE = re.compile(r'upstream\s+[^:]+:([^/]+)/([^.]+)\.git\s+\(fetch\)')

# Repository URL format string.
F_REPO_URL = 'https://github.com/{0}/{1}/'

# Pattern to match repository URLs => (user name, project name)
P_REPO_URL = re.compile(r'https?://github\.com/([^.]+)/([^/]+)/?')

# API URL format string.
F_API_URL = 'https://api.github.com/repos/{0}/{1}/labels'

# Expected labels and colors.
EXPECTED = {
    'bug' : 'bd2c00',
    'discussion' : 'fc8dc1',
    'enhancement' : '9cd6dc',
    'help-wanted' : 'f4fd9c',
    'instructor-training' : '6e5494',
    'newcomer-friendly' : 'eec275',
    'question' : '808040',
    'template-and-tools' : '2b3990',
    'work-in-progress' : '7ae78e'
}


def main():
    """
    Main driver.
    """

    args = parse_args()
    reporter = Reporter()
    repo_url = get_repo_url(args.source_dir, args.repo_url)
    check_labels(reporter, repo_url)
    reporter.report()


def parse_args():
    """
    Parse command-line arguments.
    """

    parser = OptionParser()
    parser.add_option('-r', '--repo',
                      default=None,
                      dest='repo_url',
                      help='repository URL')
    parser.add_option('-s', '--source',
                      default=os.curdir,
                      dest='source_dir',
                      help='source directory')

    args, extras = parser.parse_args()
    require(not extras,
            'Unexpected trailing command-line arguments "{0}"'.format(extras))

    return args


def get_repo_url(source_dir, repo_url):
    """
    Figure out which repository to query.
    """

    # Explicitly specified.
    if repo_url is not None:
        return repo_url

    # Guess.
    cmd = 'git remote -v'
    p = Popen(cmd, shell=True, stdin=PIPE, stdout=PIPE, close_fds=True, universal_newlines=True)
    stdout_data, stderr_data = p.communicate()
    stdout_data = stdout_data.split('\n')
    matches = [P_GIT_REMOTE.match(line) for line in stdout_data]
    matches = [m for m in matches if m is not None]
    require(len(matches) == 1,
            'Unexpected output from git remote command: "{0}"'.format(matches))

    username = matches[0].group(1)
    require(username, 'empty username in git remote output {0}'.format(matches[0]))

    project_name = matches[0].group(2)
    require(username, 'empty project name in git remote output {0}'.format(matches[0]))

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
        reporter.check(EXPECTED[name] == actual[name],
                       None,
                       'Color mis-match for label {0} in {1}: expected {2}, found {3}',
                       name, repo_url, EXPECTED[name], actual[name])


def get_labels(repo_url):
    """
    Get actual labels from repository.
    """

    m = P_REPO_URL.match(repo_url)
    require(m, 'repository URL {0} does not match expected pattern'.format(repo_url))

    username = m.group(1)
    require(username, 'empty username in repository URL {0}'.format(repo_url))

    project_name = m.group(2)
    require(username, 'empty project name in repository URL {0}'.format(repo_url))

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
