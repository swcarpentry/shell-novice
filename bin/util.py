import sys
import os
import json
from subprocess import Popen, PIPE

# Import this way to produce a more useful error message.
try:
    import yaml
except ImportError:
    print('Unable to import YAML module: please install PyYAML', file=sys.stderr)
    sys.exit(1)


UNWANTED_FILES = [
    '.nojekyll'
]


REPORTER_NOT_SET = []

class Reporter(object):
    """Collect and report errors."""

    def __init__(self):
        """Constructor."""

        super(Reporter, self).__init__()
        self.messages = []


    def check_field(self, filename, name, values, key, expected=REPORTER_NOT_SET):
        """Check that a dictionary has an expected value."""

        if key not in values:
            self.add(filename, '{0} does not contain {1}', name, key)
        elif expected is REPORTER_NOT_SET:
            pass
        elif type(expected) in (tuple, set, list):
            if values[key] not in expected:
                self.add(filename, '{0} {1} value {2} is not in {3}', name, key, values[key], expected)
        elif values[key] != expected:
            self.add(filename, '{0} {1} is {2} not {3}', name, key, values[key], expected)


    def check(self, condition, location, fmt, *args):
        """Append error if condition not met."""

        if not condition:
            self.add(location, fmt, *args)


    def add(self, location, fmt, *args):
        """Append error unilaterally."""

        if isinstance(location, type(None)):
            coords = ''
        elif isinstance(location, str):
            coords = '{0}: '.format(location)
        elif isinstance(location, tuple):
            filename, line_number = location
            coords = '{0}:{1}: '.format(*location)
        else:
            assert False, 'Unknown location "{0}"/{1}'.format(location, type(location))

        self.messages.append(coords + fmt.format(*args))


    def report(self, stream=sys.stdout):
        """Report all messages."""

        if not self.messages:
            return
        for m in sorted(self.messages):
            print(m, file=stream)


def read_markdown(parser, path):
    """
    Get YAML and AST for Markdown file, returning
    {'metadata':yaml, 'metadata_len':N, 'text':text, 'lines':[(i, line, len)], 'doc':doc}.
    """

    # Split and extract YAML (if present).
    with open(path, 'r') as reader:
        body = reader.read()
    metadata_raw, metadata_yaml, body = split_metadata(path, body)

    # Split into lines.
    metadata_len = 0 if metadata_raw is None else metadata_raw.count('\n')
    lines = [(metadata_len+i+1, line, len(line)) for (i, line) in enumerate(body.split('\n'))]

    # Parse Markdown.
    cmd = 'ruby {0}'.format(parser)
    p = Popen(cmd, shell=True, stdin=PIPE, stdout=PIPE, close_fds=True, universal_newlines=True)
    stdout_data, stderr_data = p.communicate(body)
    doc = json.loads(stdout_data)

    return {
        'metadata': metadata_yaml,
        'metadata_len': metadata_len,
        'text': body,
        'lines': lines,
        'doc': doc
    }


def split_metadata(path, text):
    """
    Get raw (text) metadata, metadata as YAML, and rest of body.
    If no metadata, return (None, None, body).
    """

    metadata_raw = None
    metadata_yaml = None
    metadata_len = None

    pieces = text.split('---', 2)
    if len(pieces) == 3:
        metadata_raw = pieces[1]
        text = pieces[2]
        try:
            metadata_yaml = yaml.load(metadata_raw)
        except yaml.YAMLError as e:
            print('Unable to parse YAML header in {0}:\n{1}'.format(path, e), file=sys.stderr)
            sys.exit(1)

    return metadata_raw, metadata_yaml, text


def load_yaml(filename):
    """
    Wrapper around YAML loading so that 'import yaml' is only needed
    in one file.
    """

    try:
        with open(filename, 'r') as reader:
            return yaml.load(reader)
    except (yaml.YAMLError, FileNotFoundError) as e:
        print('Unable to load YAML file {0}:\n{1}'.format(filename, e), file=sys.stderr)
        sys.exit(1)


def check_unwanted_files(dir_path, reporter):
    """
    Check that unwanted files are not present.
    """

    for filename in UNWANTED_FILES:
        path = os.path.join(dir_path, filename)
        reporter.check(not os.path.exists(path),
                       path,
                       "Unwanted file found")


def require(condition, message):
    """Fail if condition not met."""

    if not condition:
        print(message, file=sys.stderr)
        sys.exit(1)
