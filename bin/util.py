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

__all__ = ['check_unwanted_files', 'load_yaml', 'read_markdown', 'require']

# Files that shouldn't be present.
UNWANTED_FILES = [
    '.nojekyll'
]

def read_markdown(parser, path):
    """
    Get YAML and AST for Markdown file, returning
    {'metadata':yaml, 'metadata_len':N, 'text':text, 'lines':[(i, line, len)], 'doc':doc}.
    """

    # Split and extract YAML (if present).
    with open(path, 'r', encoding='utf-8') as reader:
        body = reader.read()
    metadata_raw, metadata_yaml, body = split_metadata(path, body)

    # Split into lines.
    metadata_len = 0 if metadata_raw is None else metadata_raw.count('\n')
    lines = [(metadata_len+i+1, line, len(line))
             for (i, line) in enumerate(body.split('\n'))]

    # Parse Markdown.
    cmd = 'bundle exec ruby {0}'.format(parser)
    p = Popen(cmd, shell=True, stdin=PIPE, stdout=PIPE,
              close_fds=True, universal_newlines=True, encoding='utf-8')
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

    pieces = text.split('---', 2)
    if len(pieces) == 3:
        metadata_raw = pieces[1]
        text = pieces[2]
        try:
            metadata_yaml = yaml.load(metadata_raw, Loader=yaml.SafeLoader)
        except yaml.YAMLError as e:
            message = 'Unable to parse YAML header in {0}:\n{1}'
            print(message.format(path, e), file=sys.stderr)

    return metadata_raw, metadata_yaml, text


def load_yaml(filename):
    """
    Wrapper around YAML loading so that 'import yaml' is only needed
    in one file.
    """

    try:
        with open(filename, 'r', encoding='utf-8') as reader:
            return yaml.load(reader, Loader=yaml.SafeLoader)
    except yaml.YAMLError as e:
        message = 'ERROR: Unable to load YAML file {0}:\n{1}'
        print(message.format(filename, e), file=sys.stderr)
    except (FileNotFoundError, IOError):
        message = 'ERROR: File {} not found'
        print(message.format(filename), file=sys.stderr)

    return {}

def check_unwanted_files(dir_path, reporter):
    """
    Check that unwanted files are not present.
    """

    for filename in UNWANTED_FILES:
        path = os.path.join(dir_path, filename)
        reporter.check(not os.path.exists(path),
                       path,
                       "Unwanted file found")


def require(condition, message, fatal=False):
    """Fail if condition not met."""

    if not condition:
        print(message, file=sys.stderr)

        if fatal:
            sys.exit(1)
