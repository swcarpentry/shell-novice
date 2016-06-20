import sys
import json
import yaml
from subprocess import Popen, PIPE


class Reporter(object):
    """Collect and report errors."""

    def __init__(self, args):
        """Constructor."""

        super(Reporter, self).__init__()
        self.messages = []


    def check_field(self, filename, name, values, key, expected):
        """Check that a dictionary has an expected value."""

        if key not in values:
            self.add(filename, '{0} does not contain {1}', name, key)
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
        for m in self.messages:
            print(m, file=stream)


def read_markdown(parser, path):
    """Get YAML and AST for Markdown file, returning {'metadata':yaml, 'text': text, 'doc':doc}."""

    # Split and extract YAML (if present).
    metadata = None
    metadata_len = None
    with open(path, 'r') as reader:
        body = reader.read()
    pieces = body.split('---', 2)
    if len(pieces) == 3:
        try:
            metadata = yaml.load(pieces[1])
        except yaml.YAMLError as e:
            print('Unable to parse YAML header in {0}:\n{1}'.format(path, e))
            sys.exit(1)
        metadata_len = pieces[1].count('\n')
        body = pieces[2]

    # Parse Markdown.
    cmd = 'ruby {0}'.format(parser)
    p = Popen(cmd, shell=True, stdin=PIPE, stdout=PIPE, close_fds=True, universal_newlines=True)
    stdout_data, stderr_data = p.communicate(body)
    doc = json.loads(stdout_data)

    return {
        'metadata': metadata,
        'metadata_len': metadata_len,
        'text': body,
        'doc': doc
    }
