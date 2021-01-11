"""
Check lesson files and their contents.
"""


import os
import glob
import re
from argparse import ArgumentParser

from util import (Reporter, read_markdown, load_yaml, check_unwanted_files,
                  require)

__version__ = '0.3'

# Where to look for source Markdown files.
SOURCE_DIRS = ['', '_episodes', '_extras']

# Where to look for source Rmd files.
SOURCE_RMD_DIRS = ['_episodes_rmd']

# Required files: each entry is ('path': YAML_required).
# FIXME: We do not yet validate whether any files have the required
#   YAML headers, but should in the future.
# The '%' is replaced with the source directory path for checking.
# Episodes are handled specially, and extra files in '_extras' are also handled
# specially. This list must include all the Markdown files listed in the
# 'bin/initialize' script.
REQUIRED_FILES = {
    'CODE_OF_CONDUCT.md': True,
    'CONTRIBUTING.md': False,
    'LICENSE.md': True,
    'README.md': False,
    os.path.join('_extras', 'discuss.md'): True,
    os.path.join('_extras', 'guide.md'): True,
    'index.md': True,
    'reference.md': True,
    'setup.md': True,
}

# Episode filename pattern.
P_EPISODE_FILENAME = re.compile(r'(\d\d)-[-\w]+.md$')

# Pattern to match lines ending with whitespace.
P_TRAILING_WHITESPACE = re.compile(r'\s+$')

# Pattern to match figure references in HTML.
P_FIGURE_REFS = re.compile(r'<img[^>]+src="([^"]+)"[^>]*>')

# Pattern to match internally-defined Markdown links.
P_INTERNAL_LINK_REF = re.compile(r'\[([^\]]+)\]\[([^\]]+)\]')

# Pattern to match reference links (to resolve internally-defined references).
P_INTERNAL_LINK_DEF = re.compile(r'^\[([^\]]+)\]:\s*(.+)')

# Pattern to match {% include ... %} statements
P_INTERNAL_INCLUDE_LINK = re.compile(r'^{% include ([^ ]*) %}$')

# What kinds of blockquotes are allowed?
KNOWN_BLOCKQUOTES = {
    'callout',
    'caution',
    'challenge',
    'checklist',
    'discussion',
    'keypoints',
    'objectives',
    'prereq',
    'quotation',
    'solution',
    'testimonial',
    'warning'
}

# What kinds of code fragments are allowed?
# Below we allow all 'language-*' code blocks
KNOWN_CODEBLOCKS = {
    'error',
    'output',
    'source',
    'warning'
}

# What fields are required in teaching episode metadata?
TEACHING_METADATA_FIELDS = {
    ('title', str),
    ('teaching', int),
    ('exercises', int),
    ('questions', list),
    ('objectives', list),
    ('keypoints', list)
}

# What fields are required in break episode metadata?
BREAK_METADATA_FIELDS = {
    ('layout', str),
    ('title', str),
    ('break', int)
}

# How long are lines allowed to be?
# Please keep this in sync with .editorconfig!
MAX_LINE_LEN = 100


def main():
    """Main driver."""

    args = parse_args()
    args.reporter = Reporter()
    life_cycle = check_config(args.reporter, args.source_dir)
    # pre-alpha lessons should report without error
    if life_cycle == "pre-alpha":
        args.permissive = True
    check_source_rmd(args.reporter, args.source_dir, args.parser)
    args.references = read_references(args.reporter, args.reference_path)

    docs = read_all_markdown(args.source_dir, args.parser)
    check_fileset(args.source_dir, args.reporter, list(docs.keys()))
    check_unwanted_files(args.source_dir, args.reporter)
    for filename in list(docs.keys()):
        checker = create_checker(args, filename, docs[filename])
        checker.check()

    args.reporter.report()
    if args.reporter.messages and not args.permissive:
        exit(1)


def parse_args():
    """Parse command-line arguments."""

    parser = ArgumentParser(description="""Check episode files in a lesson.""")
    parser.add_argument('-l', '--linelen',
                        default=False,
                        action="store_true",
                        dest='line_lengths',
                        help='Check line lengths')
    parser.add_argument('-p', '--parser',
                        default=None,
                        dest='parser',
                        help='path to Markdown parser')
    parser.add_argument('-r', '--references',
                        default=None,
                        dest='reference_path',
                        help='path to Markdown file of external references')
    parser.add_argument('-s', '--source',
                        default=os.curdir,
                        dest='source_dir',
                        help='source directory')
    parser.add_argument('-w', '--whitespace',
                        default=False,
                        action="store_true",
                        dest='trailing_whitespace',
                        help='Check for trailing whitespace')
    parser.add_argument('--permissive',
                        default=False,
                        action="store_true",
                        dest='permissive',
                        help='Do not raise an error even if issues are detected')

    args, extras = parser.parse_known_args()
    require(args.parser is not None,
            'Path to Markdown parser not provided')
    require(not extras,
            'Unexpected trailing command-line arguments "{0}"'.format(extras))

    return args


def check_config(reporter, source_dir):
    """Check configuration file."""

    config_file = os.path.join(source_dir, '_config.yml')
    config = load_yaml(config_file)
    reporter.check_field(config_file, 'configuration',
                         config, 'kind', 'lesson')
    reporter.check_field(config_file, 'configuration',
                         config, 'carpentry', ('swc', 'dc', 'lc', 'cp', 'incubator'))
    reporter.check_field(config_file, 'configuration', config, 'title')
    reporter.check_field(config_file, 'configuration', config, 'email')

    for defaults in [
            {'values': {'root': '.', 'layout': 'page'}},
            {'values': {'root': '..', 'layout': 'episode'}, 'scope': {'type': 'episodes', 'path': ''}},
            {'values': {'root': '..', 'layout': 'page'}, 'scope': {'type': 'extras', 'path': ''}}
            ]:
        reporter.check(defaults in config.get('defaults', []),
                   'configuration',
                   '"root" not set to "." in configuration')
    return config['life_cycle']

def check_source_rmd(reporter, source_dir, parser):
    """Check that Rmd episode files include `source: Rmd`"""

    episode_rmd_dir = [os.path.join(source_dir, d) for d in SOURCE_RMD_DIRS]
    episode_rmd_files = [os.path.join(d, '*.Rmd') for d in episode_rmd_dir]
    results = {}
    for pat in episode_rmd_files:
        for f in glob.glob(pat):
            data = read_markdown(parser, f)
            dy = data['metadata']
            if dy:
                reporter.check_field(f, 'episode_rmd',
                                     dy, 'source', 'Rmd')

def read_references(reporter, ref_path):
    """Read shared file of reference links, returning dictionary of valid references
    {symbolic_name : URL}
    """

    if not ref_path:
        raise Warning("No filename has been provided.")

    result = {}
    urls_seen = set()

    with open(ref_path, 'r', encoding='utf-8') as reader:
        for (num, line) in enumerate(reader, 1):

            if P_INTERNAL_INCLUDE_LINK.search(line): continue

            m = P_INTERNAL_LINK_DEF.search(line)

            message = '{}: {} not a valid reference: {}'
            require(m, message.format(ref_path, num, line.rstrip()))

            name = m.group(1)
            url = m.group(2)

            message = 'Empty reference at {0}:{1}'
            require(name, message.format(ref_path, num))

            unique_name = name not in result
            unique_url = url not in urls_seen

            reporter.check(unique_name,
                           ref_path,
                           'Duplicate reference name {0} at line {1}',
                           name, num)

            reporter.check(unique_url,
                           ref_path,
                           'Duplicate definition of URL {0} at line {1}',
                           url, num)

            result[name] = url
            urls_seen.add(url)

    return result


def read_all_markdown(source_dir, parser):
    """Read source files, returning
    {path : {'metadata':yaml, 'metadata_len':N, 'text':text, 'lines':[(i, line, len)], 'doc':doc}}
    """

    all_dirs = [os.path.join(source_dir, d) for d in SOURCE_DIRS]
    all_patterns = [os.path.join(d, '*.md') for d in all_dirs]
    result = {}
    for pat in all_patterns:
        for filename in glob.glob(pat):
            data = read_markdown(parser, filename)
            if data:
                result[filename] = data
    return result


def check_fileset(source_dir, reporter, filenames_present):
    """Are all required files present? Are extraneous files present?"""

    # Check files with predictable names.
    required = [os.path.join(source_dir, p) for p in REQUIRED_FILES]
    missing = set(required) - set(filenames_present)
    for m in missing:
        reporter.add(None, 'Missing required file {0}', m)

    # Check episode files' names.
    seen = []
    for filename in filenames_present:
        if '_episodes' not in filename:
            continue

        # split path to check episode name
        base_name = os.path.basename(filename)
        m = P_EPISODE_FILENAME.search(base_name)
        if m and m.group(1):
            seen.append(m.group(1))
        else:
            reporter.add(
                None, 'Episode {0} has badly-formatted filename', filename)

    # Check for duplicate episode numbers.
    reporter.check(len(seen) == len(set(seen)),
                   None,
                   'Duplicate episode numbers {0} vs {1}',
                   sorted(seen), sorted(set(seen)))

    # Check that numbers are consecutive.
    seen = sorted([int(s) for s in seen])
    clean = True
    for i in range(len(seen) - 1):
        clean = clean and ((seen[i+1] - seen[i]) == 1)
    reporter.check(clean,
                   None,
                   'Missing or non-consecutive episode numbers {0}',
                   seen)


def create_checker(args, filename, info):
    """Create appropriate checker for file."""

    for (pat, cls) in CHECKERS:
        if pat.search(filename):
            return cls(args, filename, **info)
    return NotImplemented

class CheckBase:
    """Base class for checking Markdown files."""

    def __init__(self, args, filename, metadata, metadata_len, text, lines, doc):
        """Cache arguments for checking."""

        self.args = args
        self.reporter = self.args.reporter  # for convenience
        self.filename = filename
        self.metadata = metadata
        self.metadata_len = metadata_len
        self.text = text
        self.lines = lines
        self.doc = doc

        self.layout = None

    def check(self):
        """Run tests."""

        self.check_metadata()
        self.check_line_lengths()
        self.check_trailing_whitespace()
        self.check_blockquote_classes()
        self.check_codeblock_classes()
        self.check_defined_link_references()

    def check_metadata(self):
        """Check the YAML metadata."""

        self.reporter.check(self.metadata is not None,
                            self.filename,
                            'Missing metadata entirely')

        if self.metadata and (self.layout is not None):
            self.reporter.check_field(
                self.filename, 'metadata', self.metadata, 'layout', self.layout)

    def check_line_lengths(self):
        """Check the raw text of the lesson body."""

        if self.args.line_lengths:
            over = [i for (i, l, n) in self.lines if (
                n > MAX_LINE_LEN) and (not l.startswith('!'))]
            self.reporter.check(not over,
                                self.filename,
                                'Line(s) too long: {0}',
                                ', '.join([str(i) for i in over]))

    def check_trailing_whitespace(self):
        """Check for whitespace at the ends of lines."""

        if self.args.trailing_whitespace:
            trailing = [
                i for (i, l, n) in self.lines if P_TRAILING_WHITESPACE.match(l)]
            self.reporter.check(not trailing,
                                self.filename,
                                'Line(s) end with whitespace: {0}',
                                ', '.join([str(i) for i in trailing]))

    def check_blockquote_classes(self):
        """Check that all blockquotes have known classes."""

        for node in self.find_all(self.doc, {'type': 'blockquote'}):
            cls = self.get_val(node, 'attr', 'class')
            self.reporter.check(cls in KNOWN_BLOCKQUOTES,
                                (self.filename, self.get_loc(node)),
                                'Unknown or missing blockquote type {0}',
                                cls)

    def check_codeblock_classes(self):
        """Check that all code blocks have known classes."""

        for node in self.find_all(self.doc, {'type': 'codeblock'}):
            cls = self.get_val(node, 'attr', 'class')
            self.reporter.check(cls in KNOWN_CODEBLOCKS or cls.startswith('language-'),
                                (self.filename, self.get_loc(node)),
                                'Unknown or missing code block type {0}',
                                cls)

    def check_defined_link_references(self):
        """Check that defined links resolve in the file.

        Internally-defined links match the pattern [text][label].
        """

        result = set()
        for node in self.find_all(self.doc, {'type': 'text'}):
            for match in P_INTERNAL_LINK_REF.findall(node['value']):
                text = match[0]
                link = match[1]
                if link not in self.args.references:
                    result.add('"{0}"=>"{1}"'.format(text, link))
        self.reporter.check(not result,
                            self.filename,
                            'Internally-defined links may be missing definitions: {0}',
                            ', '.join(sorted(result)))

    def find_all(self, node, pattern, accum=None):
        """Find all matches for a pattern."""

        assert isinstance(pattern, dict), 'Patterns must be dictionaries'
        if accum is None:
            accum = []
        if self.match(node, pattern):
            accum.append(node)
        for child in node.get('children', []):
            self.find_all(child, pattern, accum)
        return accum

    def match(self, node, pattern):
        """Does this node match the given pattern?"""

        for key in pattern:
            if key not in node:
                return False
            val = pattern[key]
            if isinstance(val, str):
                if node[key] != val:
                    return False
            elif isinstance(val, dict):
                if not self.match(node[key], val):
                    return False
        return True

    @staticmethod
    def get_val(node, *chain):
        """Get value one or more levels down."""

        curr = node
        for selector in chain:
            curr = curr.get(selector, None)
            if curr is None:
                break
        return curr

    def get_loc(self, node):
        """Convenience method to get node's line number."""

        result = self.get_val(node, 'options', 'location')
        if self.metadata_len is not None:
            result += self.metadata_len
        return result


class CheckNonJekyll(CheckBase):
    """Check a file that isn't translated by Jekyll."""

    def check_metadata(self):
        self.reporter.check(self.metadata is None,
                            self.filename,
                            'Unexpected metadata')


class CheckIndex(CheckBase):
    """Check the main index page."""

    def __init__(self, args, filename, metadata, metadata_len, text, lines, doc):
        super().__init__(args, filename, metadata, metadata_len, text, lines, doc)
        self.layout = 'lesson'

    def check_metadata(self):
        super().check_metadata()
        self.reporter.check(self.metadata.get('root', '') == '.',
                            self.filename,
                            'Root not set to "."')


class CheckEpisode(CheckBase):
    """Check an episode page."""

    def check(self):
        """Run extra tests."""

        super().check()
        self.check_reference_inclusion()

    def check_metadata(self):
        super().check_metadata()
        if self.metadata:
            if 'layout' in self.metadata:
                if self.metadata['layout'] == 'break':
                    self.check_metadata_fields(BREAK_METADATA_FIELDS)
                else:
                    self.reporter.add(self.filename,
                                      'Unknown episode layout "{0}"',
                                      self.metadata['layout'])
            else:
                self.check_metadata_fields(TEACHING_METADATA_FIELDS)

    def check_metadata_fields(self, expected):
        """Check metadata fields."""
        for (name, type_) in expected:
            if name not in self.metadata:
                self.reporter.add(self.filename,
                                  'Missing metadata field {0}',
                                  name)
            elif not isinstance(self.metadata[name], type_):
                self.reporter.add(self.filename,
                                  '"{0}" has wrong type in metadata ({1} instead of {2})',
                                  name, type(self.metadata[name]), type_)

    def check_reference_inclusion(self):
        """Check that links file has been included."""

        if not self.args.reference_path:
            return

        for (i, last_line, line_len) in reversed(self.lines):
            if last_line:
                break

        require(last_line,
                'No non-empty lines in {0}'.format(self.filename))

        include_filename = os.path.split(self.args.reference_path)[-1]
        if include_filename not in last_line:
            self.reporter.add(self.filename,
                              'episode does not include "{0}"',
                              include_filename)


class CheckReference(CheckBase):
    """Check the reference page."""

    def __init__(self, args, filename, metadata, metadata_len, text, lines, doc):
        super().__init__(args, filename, metadata, metadata_len, text, lines, doc)
        self.layout = 'reference'


class CheckGeneric(CheckBase):
    """Check a generic page."""

    def __init__(self, args, filename, metadata, metadata_len, text, lines, doc):
        super().__init__(args, filename, metadata, metadata_len, text, lines, doc)


CHECKERS = [
    (re.compile(r'CONTRIBUTING\.md'), CheckNonJekyll),
    (re.compile(r'README\.md'), CheckNonJekyll),
    (re.compile(r'index\.md'), CheckIndex),
    (re.compile(r'reference\.md'), CheckReference),
    (re.compile(os.path.join('_episodes', '*\.md')), CheckEpisode),
    (re.compile(r'.*\.md'), CheckGeneric)
]


if __name__ == '__main__':
    main()
