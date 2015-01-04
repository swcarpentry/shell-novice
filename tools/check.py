#! /usr/bin/env python

"""
Validate Software Carpentry lessons
according to the Markdown template specification described here:
http://software-carpentry.org/blog/2014/10/new-lesson-template-v2.html

Validates the presence of headings, as well as specific sub-nodes.
Contains validators for several kinds of template.

Call at command line with flag -h to see options and usage instructions.
"""
from __future__ import print_function

import argparse
import glob
import hashlib
import logging
import os
import re
import sys

import CommonMark
import yaml

import validation_helpers as vh


class MarkdownValidator(object):
    """Base class for Markdown validation

    Contains basic validation skeleton to be extended for specific page types
    """
    HEADINGS = []  # List of strings containing expected heading text
    WARN_ON_EXTRA_HEADINGS = True  # Warn when other headings are present?

    DOC_HEADERS = {}  # Rows in header section (first few lines of document).

    def __init__(self, filename=None, markdown=None):
        """Perform validation on a Markdown document.

        Validator accepts either the path to a file containing Markdown,
        OR a valid Markdown string. The latter is useful for unit testing."""
        self.filename = filename

        if filename:
            # Expect Markdown files to be in same directory as the input file
            self.markdown_dir = os.path.dirname(filename)
            self.lesson_dir = self.markdown_dir
            with open(filename, 'rU') as f:
                self.markdown = f.read()
        else:
            # Look for linked content in ../pages (relative to this file)
            self.lesson_dir = os.path.abspath(
                os.path.join(os.path.dirname(__file__), os.pardir))

            self.markdown_dir = self.lesson_dir
            self.markdown = markdown

        ast = self._parse_markdown(self.markdown)
        self.ast = vh.CommonMarkHelper(ast)

    def _parse_markdown(self, markdown):
        parser = CommonMark.DocParser()
        ast = parser.parse(markdown)
        return ast

    def _validate_hrs(self):
        """Validate header

        Verify that the header section at top of document
        is bracketed by two horizontal rules"""
        valid = True
        try:
            hr_nodes = [self.ast.children[0], self.ast.children[2]]
        except IndexError:
            logging.error(
                "In {0}: "
                "Document must include header sections".format(self.filename))
            return False

        for hr in hr_nodes:
            if not self.ast.is_hr(hr):
                logging.error(
                    "In {0}: "
                    "Expected --- at line: {1}".format(
                        self.filename, hr.start_line))
                valid = False
        return valid

    def _validate_one_doc_header_row(self, label, content):
        """Validate a single row of the document header section"""
        if label not in self.DOC_HEADERS:
            logging.warning(
                "In {0}: "
                "Unrecognized label in header section: {1}".format(
                    self.filename, label))
            return False

        validation_function = self.DOC_HEADERS[label]
        validate_header = validation_function(content)
        if not validate_header:
            logging.error(
                "In {0}: "
                "Contents of document header field for label {1} "
                "do not follow expected format".format(self.filename, label))
        return validate_header

    # Methods related to specific validation. Can override specific tests.
    def _validate_doc_headers(self):
        """Validate the document header section.

        Pass only if the header of the document contains the specified
            sections with the expected contents"""

        # Test: Header section should be wrapped in hrs
        has_hrs = self._validate_hrs()

        header_node = self.ast.children[1]
        header_text = '\n'.join(header_node.strings)

        # Parse headers as YAML. Don't check if parser returns None or str.
        header_yaml = yaml.load(header_text)
        if not isinstance(header_yaml, dict):
            logging.error("In {0}: "
                          "Expected YAML markup with labels "
                          "{1}".format(self.filename, self.DOC_HEADERS.keys()))
            return False

        # Test: Labeled YAML should match expected format
        test_headers = [self._validate_one_doc_header_row(k, v)
                        for k, v in header_yaml.items()]

        # Test: Must have all expected header lines, and no others.
        only_headers = (len(header_yaml) == len(self.DOC_HEADERS))

        # If expected headings are missing, print an informative message
        missing_headings = [h for h in self.DOC_HEADERS
                            if h not in header_yaml]

        for h in missing_headings:
            logging.error("In {0}: "
                          "Header section is missing expected "
                          "row {1}".format(self.filename, h))

        return has_hrs and all(test_headers) and only_headers

    def _validate_section_heading_order(self, ast_node=None, headings=None):
        """Verify that section headings appear, and in the order expected"""
        # TODO: Refactor into individual tests in the future
        if ast_node is None:
            ast_node = self.ast.data
            headings = self.HEADINGS

        heading_nodes = self.ast.get_section_headings(ast_node)
        # All headings should be exactly level 2
        correct_level = True
        for n in heading_nodes:
            if n.level != 2:
                logging.error(
                    "In {0}: "
                    "Heading at line {1} should be level 2".format(
                        self.filename, n.start_line))
                correct_level = False

        heading_labels = [vh.strip_attrs(n.strings[0]) for n in heading_nodes]

        # Check for missing and extra headings
        missing_headings = [expected_heading for expected_heading in headings
                            if expected_heading not in heading_labels]

        extra_headings = [found_heading for found_heading in heading_labels
                          if found_heading not in headings]

        for h in missing_headings:
            logging.error(
                "In {0}: "
                "Document is missing expected heading: {1}".format(
                    self.filename, h))

        if self.WARN_ON_EXTRA_HEADINGS is True:
            for h in extra_headings:
                logging.error(
                    "In {0}: "
                    "Document contains heading "
                    "not specified in the template: {1}".format(
                        self.filename, h))
            no_extra = (len(extra_headings) == 0)
        else:
            no_extra = True

        # Check that the subset of headings
        # in the template spec matches order in the document
        valid_order = True
        headings_overlap = [h for h in heading_labels if h in headings]
        if len(missing_headings) == 0 and headings_overlap != headings:
            valid_order = False
            logging.error(
                "In {0}: "
                "Document headings do not match "
                "the order specified by the template".format(self.filename))

        return (len(missing_headings) == 0) and \
               valid_order and no_extra and correct_level

    def _validate_one_link(self, link_node):
        """Logic to validate a single external asset (image or link)

        Any local html file being linked was generated as part of the lesson.
        Therefore, file links (.html) must have a Markdown file
            in the expected folder.

        The title of the linked Markdown document should match the link text.

        For other assets (links or images), just verify that a file exists
        """
        dest, link_text = self.ast.get_link_info(link_node)

        if re.match(r"^[\w,\s-]+\.(html?)", dest, re.IGNORECASE):
            # HTML files in same folder are made from Markdown; special tests
            fn = dest.split("#")[0]  # Split anchor name from filename
            expected_md_fn = os.path.splitext(fn)[0] + os.extsep + "md"
            expected_md_path = os.path.join(self.markdown_dir,
                                            expected_md_fn)
            if not os.path.isfile(expected_md_path):
                logging.error(
                    "In {0}: "
                    "The document links to {1}, but could not find "
                    "the expected markdown file {2}".format(
                        self.filename, dest, expected_md_path))
                return False

            # If file exists, parse and validate link text = node title
            with open(expected_md_path, 'rU') as link_dest_file:
                dest_contents = link_dest_file.read()

            dest_ast = self._parse_markdown(dest_contents)
            dest_ast = vh.CommonMarkHelper(dest_ast)
            dest_page_title = dest_ast.get_doc_header_subtitle()

            if dest_page_title != link_text:
                logging.error(
                    "In {0}: "
                    "The linked page {1} exists, but "
                    "the link text '{2}' does not match the "
                    "(sub)title of that page, '{3}'.".format(
                        self.filename, dest,
                        link_text, dest_page_title))
                return False
        elif not re.match(r"^((https?|ftp)://)", dest, re.IGNORECASE)\
                and not re.match(r"^#.*", dest):
            # If not web URL, and not anchor on same page, then
            #  verify that local file exists
            dest_path = os.path.join(self.lesson_dir, dest)
            if not os.path.isfile(dest_path):
                logging.error(
                    "In {0}: "
                    "Could not find the linked asset file "
                    "{1} in {2}. If this is a URL, it must be "
                    "prefixed with http(s):// or ftp://.".format(
                        self.filename, dest, dest_path))
                return False
        else:
            logging.warning(
                "In {0}: "
                "Skipped validation of link {1}".format(self.filename, dest))
        return True

    def _validate_links(self, links_to_skip=()):
        """Validate all references to external content

        This includes links AND images: these are the two types of node that
        CommonMark assigns a .destination property"""
        links = self.ast.find_external_links()

        valid = True
        for link_node in links:
            if link_node.destination not in links_to_skip:
                res = self._validate_one_link(link_node)
                valid = valid and res
        return valid

    def _run_tests(self):
        """
        Let user override the list of tests to be performed.

        Error trapping is handled by the validate() wrapper method.
        """
        tests = [self._validate_doc_headers(),
                 self._validate_section_heading_order(),
                 self._validate_links()]

        return all(tests)

    def validate(self):
        """Perform all required validations. Wrap in exception handler"""
        try:
            return self._run_tests()
        except IndexError:
            logging.error("Document is missing critical sections")
            return False


class IndexPageValidator(MarkdownValidator):
    """Validate the contents of the homepage (index.md)"""
    HEADINGS = ['Topics',
                'Other Resources']

    DOC_HEADERS = {'layout': vh.is_str,
                   'title': vh.is_str}

    def _validate_intro_section(self):
        """Validate the intro section

        It must be a paragraph, followed by blockquoted list of prereqs"""
        intro_block = self.ast.children[3]
        intro_section = self.ast.is_paragraph(intro_block)
        if not intro_section:
            logging.error(
                "In {0}: "
                "Expected paragraph of introductory text at {1}".format(
                    self.filename, intro_block.start_line))

        # Validate the prerequisites block
        prereqs_block = self.ast.get_block_titled("Prerequisites",
                                                  heading_level=2)
        if prereqs_block:
            # Found the expected block; now check contents
            prereqs_tests = self.ast.has_number_children(prereqs_block[0],
                                                         minc=2)
        else:
            prereqs_tests = False

        if prereqs_tests is False:
            logging.error(
                "In {0}: "
                "Intro should contain a blockquoted section with level 2 "
                "title 'Prerequisites'. Section should not be empty.".format(
                    self.filename))
        return intro_section and prereqs_tests

    def _validate_links(self, links_to_skip=('motivation.html',
                                             'reference.html',
                                             'discussion.html',
                                             'instructors.html')):
        return super(IndexPageValidator, self)._validate_links(links_to_skip)

    def _run_tests(self):
        parent_tests = super(IndexPageValidator, self)._run_tests()
        tests = [self._validate_intro_section()]
        return all(tests) and parent_tests


class TopicPageValidator(MarkdownValidator):
    """Validate the Markdown contents of a topic page, eg 01-topicname.md"""
    DOC_HEADERS = {"layout": vh.is_str,
                   "title": vh.is_str,
                   "subtitle": vh.is_str,
                   "minutes": vh.is_numeric}

    # TODO: Write validator for, eg, challenge section
    def _validate_learning_objective(self):
        learn_node = self.ast.get_block_titled("Learning Objectives",
                                               heading_level=2)
        if learn_node:
            # In addition to title, the node must have some content
            node_tests = self.ast.has_number_children(learn_node[0], minc=2)
        else:
            node_tests = False

        if node_tests is False:
            logging.error(
                "In {0}: "
                "Learning Objectives should not be empty.".format(
                    self.filename))

        return node_tests

    def _validate_has_no_headings(self):
        """Check headings

        The top-level document has no headings indicating subtopics.
        The only valid subheadings are nested in blockquote elements"""
        heading_nodes = self.ast.get_section_headings()
        if len(heading_nodes) == 0:
            return True

        logging.error(
            "In {0}: "
            "The topic page should not have sub-headings "
            "outside of special blocks. "
            "If a topic needs sub-headings, "
            "it should be broken into multiple topics.".format(self.filename))
        for n in heading_nodes:
            logging.warning(
                "In {0}: "
                "The following sub-heading should be removed: {1}".format(
                    self.filename, n.strings[0]))
        return False

    def _run_tests(self):
        parent_tests = super(TopicPageValidator, self)._run_tests()
        tests = [self._validate_has_no_headings(),
                 self._validate_learning_objective()]
        return all(tests) and parent_tests


class MotivationPageValidator(MarkdownValidator):
    """Validate motivation.md"""
    DOC_HEADERS = {"layout": vh.is_str,
                   "title": vh.is_str,
                   "subtitle": vh.is_str}
    # TODO: How to validate? May be a mix of reveal.js (HTML) + markdown.


class ReferencePageValidator(MarkdownValidator):
    """Validate reference.md"""
    HEADINGS = ["Glossary"]
    WARN_ON_EXTRA_HEADINGS = False

    DOC_HEADERS = {"layout": vh.is_str,
                   "title": vh.is_str,
                   "subtitle": vh.is_str}

    def _validate_glossary_entry(self, glossary_entry):
        """Validate glossary entry

        Glossary entry must be formatted in conformance with Pandoc's
        ```definition_lists``` extension.

        That syntax isn't supported by the CommonMark parser, so we identify
        terms manually."""
        glossary_keyword = glossary_entry[0]
        if len(glossary_entry) < 2:
            logging.error(
                    "In {0}:"
                    "Glossary entry '{1}' must have at least two lines- "
                    "a term and a definition.".format(
                        glossary_keyword, self.filename))
            return False

        entry_is_valid = True
        for line_index, line in enumerate(glossary_entry):
            if line_index == 1:
                if not re.match("^:   ", line):
                    logging.error(
                            "In {0}:"
                            "At glossary entry '{1}' "
                            "First line of definition must "
                            "start with ':    '.".format(
                                glossary_keyword, self.filename))
                    entry_is_valid = False
            elif line_index > 1:
                if not re.match("^    ", line):
                    logging.error(
                            "In {0}:"
                            "At glossary entry '{1}' "
                            "Subsequent lines of definition must "
                            "start with '     '.".format(
                                glossary_keyword, self.filename))
                    entry_is_valid = False
        return entry_is_valid

    def _validate_glossary(self):
        """Validate the glossary section.

        Assumes that the glossary is at the end of the file:
            everything after the header. (and there must be a glossary section)

        Verifies that the only things in the glossary are definition items.
        """
        is_glossary_valid = True
        in_glossary = False
        for node in self.ast.children:
            if in_glossary:
                is_glossary_valid = is_glossary_valid and \
                    self._validate_glossary_entry(node.strings)
            elif self.ast.is_heading(node) and "Glossary" in node.strings:
                in_glossary = True

        return is_glossary_valid

    def _run_tests(self):
        tests = [self._validate_glossary()]
        parent_tests = super(ReferencePageValidator, self)._run_tests()
        return all(tests) and parent_tests


class InstructorPageValidator(MarkdownValidator):
    """Simple validator for Instructor's Guide- instructors.md"""
    HEADINGS = ["Legend", "Overall"]
    WARN_ON_EXTRA_HEADINGS = False

    DOC_HEADERS = {"layout": vh.is_str,
                   "title": vh.is_str,
                   "subtitle": vh.is_str}


class LicensePageValidator(MarkdownValidator):
    """Validate LICENSE.md: user should not edit this file"""
    def _run_tests(self):
        """Skip the base tests; just check md5 hash"""
        # TODO: This hash is specific to the license for english-language repo
        expected_hash = 'cd5742b6596a1f2f35c602ad43fa24b2'
        m = hashlib.md5()
        try:
            m.update(self.markdown)
        except TypeError:
            # Workaround for hashing in python3
            m.update(self.markdown.encode('utf-8'))

        if m.hexdigest() == expected_hash:
            return True
        else:
            logging.error("The provided license file should not be modified.")
            return False


class DiscussionPageValidator(MarkdownValidator):
    """
    Validate the discussion page (discussion.md).
    Most of the content is free-form.
    """
    WARN_ON_EXTRA_HEADINGS = False
    DOC_HEADERS = {"layout": vh.is_str,
                   "title": vh.is_str,
                   "subtitle": vh.is_str}


# Associate lesson template names with validators. This list used by CLI.
#   Dict of {name: (Validator, filename_pattern)}
LESSON_TEMPLATES = {"index": (IndexPageValidator, "^index"),
                    "topic": (TopicPageValidator, "^[0-9]{2}-.*"),
                    "motivation": (MotivationPageValidator, "^motivation"),
                    "reference": (ReferencePageValidator, "^reference"),
                    "instructor": (InstructorPageValidator, "^instructors"),
                    "license": (LicensePageValidator, "^LICENSE"),
                    "discussion": (DiscussionPageValidator, "^discussion")}

# List of files in the lesson directory that should not be validated at all
SKIP_FILES = ("DESIGN.md", "FAQ.md", "LAYOUT.md", "README.md")


def identify_template(filepath):
    """Identify template

    Given the path to a single file,
    identify the appropriate template to use"""
    for template_name, (validator, pattern) in LESSON_TEMPLATES.items():
        if re.search(pattern, os.path.basename(filepath)):
            return template_name

    return None


def validate_single(filepath, template=None):
    """Validate a single Markdown file based on a specified template"""
    if os.path.basename(filepath) in SKIP_FILES:
        # Silently pass certain non-lesson files without validating them
        return True

    template = template or identify_template(filepath)
    if template is None:
        logging.error(
            "Validation failed for {0}: "
            "Could not automatically identify correct template.".format(
                filepath))
        return False

    logging.debug(
        "Beginning validation of {0} using template {1}".format(
            filepath, template))
    validator = LESSON_TEMPLATES[template][0]
    validate_file = validator(filepath)

    res = validate_file.validate()
    if res is True:
        logging.debug("File {0} successfully passed validation".format(
            filepath))
    else:
        logging.debug("File {0} failed validation: "
                      "see error log for details".format(filepath))

    return res


def validate_folder(path, template=None):
    """Validate an entire folder of files"""
    search_str = os.path.join(path, "*.md")  # Find files based on extension
    filename_list = glob.glob(search_str)

    if not filename_list:
        logging.error(
            "No Markdown files were found "
            "in specified directory {0}".format(path))
        return False

    all_valid = True
    for fn in filename_list:
        res = validate_single(fn, template=template)
        all_valid = all_valid and res
    return all_valid


def start_logging(level=logging.INFO):
    """Initialize logging and print messages to console."""
    logging.basicConfig(stream=sys.stdout, level=level)


def command_line():
    """Handle arguments passed in via the command line"""
    parser = argparse.ArgumentParser()
    parser.add_argument("file_or_path",
                        nargs="*",
                        default=[os.getcwd()],
                        help="The individual pathname")

    parser.add_argument('-t', '--template',
                        choices=LESSON_TEMPLATES.keys(),
                        help="The type of template to apply to all file(s). "
                             "If not specified, will auto-identify template.")

    parser.add_argument('-d', '--debug',
                        action='store_true',
                        help="Enable debug information.")

    return parser.parse_args()


def main(parsed_args_obj):
    if parsed_args_obj.debug:
        log_level = "DEBUG"
    else:
        log_level = "WARNING"
    start_logging(log_level)

    template = parsed_args_obj.template

    all_valid = True
    for fn in parsed_args_obj.file_or_path:
        if os.path.isdir(fn):
            res = validate_folder(fn, template=template)
        elif os.path.isfile(fn):
            res = validate_single(fn, template=template)
        else:
            res = False
            logging.error(
                "The specified file or folder {0} does not exist; "
                "could not perform validation".format(fn))

        all_valid = all_valid and res

    if all_valid is True:
        logging.debug("All Markdown files successfully passed validation.")
        sys.exit(0)
    else:
        logging.warning(
            "Some errors were encountered during validation. "
            "See log for details.")
        sys.exit(1)


if __name__ == "__main__":
    parsed_args = command_line()
    main(parsed_args)
