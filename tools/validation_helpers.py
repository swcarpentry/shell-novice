#! /usr/bin/env python

import json
import logging
import re
import sys

try:  # Hack to make codebase compatible with python 2 and 3
  basestring
except NameError:
  basestring = str


# Common validation functions
def is_list(text):
    """Validate whether the provided string can be converted to python list"""
    text = text.strip()
    try:
        text_as_list = json.loads(text)
    except ValueError:
        logging.debug("Could not convert string to python object: {0}".format(text))
        return False

    return isinstance(text_as_list, list)


def is_str(text):
    """Validate whether the input is a non-blank python string"""
    return isinstance(text, basestring) and len(text) > 0


def is_numeric(text):
    """Validate whether the string represents a number (including unicode)"""
    try:
        float(text)
        return True
    except ValueError:
        return False


#### Text cleanup functions, pre-validation
def strip_attrs(s):
    """Strip attributes of the form {.name} from a markdown title string"""
    return re.sub(r"\s\{\..*?\}", "", s)


def get_css_class(s):
    """Return any and all CSS classes (when a line is suffixed by {.classname})
    Returns empty list when """
    return re.findall("\{\.(.*?)\}", s)


### Helper objects
class CommonMarkHelper(object):
    """Basic helper functions for working with the internal abstract syntax
    tree produced by CommonMark parser"""
    def __init__(self, ast):
        self.data = ast
        self.children = self.data.children

    def get_doc_header_title(self):
        """Helper method for SWC templates: get the document title from
        the YAML headers"""
        doc_headers = self.data.children[1]  # Throw index error if none found

        for s in doc_headers.strings:
            label, contents = s.split(":", 1)
            if label.lower() == "title":
                return contents.strip()

        # If title not found, return an empty string for display purposes
        return ''

    def get_doc_header_subtitle(self):
        """Helper method for SWC templates: get the document title from
        the YAML headers"""
        doc_headers = self.data.children[1]  # Throw index error if none found

        for s in doc_headers.strings:
            label, contents = s.split(":", 1)
            if label.lower() == "subtitle":
                return contents.strip()

        # If title not found, return an empty string for display purposes
        return ''

    def get_block_titled(self, title, heading_level=2, ast_node=None):
        """Examine children. Return all children of the given node that:
        a) are blockquoted elements, and
        b) contain a heading with the specified text, at the specified level.
        For example, this can be used to find the "Prerequisites" section
            in index.md

        Returns empty list if no appropriate node is found"""

        # TODO: Deprecate in favor of callout validator
        if ast_node is None:
            ast_node = self.data
        return [n for n in ast_node.children
                if self.is_block(n) and
                self.has_section_heading(
                    title,
                    ast_node=n,
                    heading_level=heading_level,
                    show_msg=False)]

    # Helpers to fetch specific document sections
    def get_section_headings(self, ast_node=None):
        """Returns a list of ast nodes that are headings"""
        if ast_node is None:
            ast_node = self.data
        return [n for n in ast_node.children if self.is_heading(n)]

    def get_callouts(self, ast_node=None):
        if ast_node is None:
            ast_node = self.data
        return [n for n in ast_node.children if self.is_callout(n)]

    def find_external_links(self, ast_node=None, parent_crit=None):
        """Recursive function that locates all references to external content
         under specified node. (links or images)"""
        ast_node = ast_node or self.data
        if parent_crit is None:
            # User can optionally provide a function to filter link list
            # based on where link appears. (eg, only links in headings)
            # If no filter is provided, accept all links in that node.
            parent_crit = lambda n: True

        # Link can be node itself, or hiding in inline content
        links = [n for n in ast_node.inline_content
                 if self.is_external(n) and parent_crit(ast_node)]

        if self.is_external(ast_node):
            links.append(ast_node)

        # Also look for links in sub-nodes
        for n in ast_node.children:
            links.extend(self.find_external_links(n,
                                                  parent_crit=parent_crit))

        return links

    # Helpers to get information from a specific node type
    def get_link_info(self, link_node):
        """Given a link node, return the link title and destination"""
        if not self.is_external(link_node):
            raise TypeError("Cannot apply this method to something that is not a link")

        dest = link_node.destination
        try:
            link_text = link_node.label[0].c
        except:
            link_text = None

        return dest, link_text

    def get_heading_info(self, heading_node):
        """Get heading text and list of all css styles applied"""
        heading = heading_node.strings[0]
        text = strip_attrs(heading)
        css = get_css_class(heading)
        return text, css

    # Functions to query type or content of nodes
    def has_section_heading(self, section_title, ast_node=None,
                            heading_level=2, limit=sys.maxsize, show_msg=True):
        """Does the section contain (<= x copies of) specified heading text?
        Will strip off any CSS attributes when looking for the section title"""
        if ast_node is None:
            ast_node = self.data

        num_nodes = len([n for n in self.get_section_headings(ast_node)
                         if (strip_attrs(n.strings[0]) == section_title)
                         and (n.level == heading_level)])

        # Suppress error msg if used as a helper method
        if show_msg and num_nodes == 0:
            logging.error("Document does not contain the specified "
                          "heading: {0}".format(section_title))
        elif show_msg and num_nodes > limit:
            logging.error("Document must not contain more than {0} copies of"
                          " the heading {1}".format(limit, section_title or 0))
        elif show_msg:
            logging.info("Verified that document contains the specified"
                         " heading: {0}".format(section_title))
        return (0 < num_nodes <= limit)

    def has_number_children(self, ast_node,
                            exact=None, minc=0, maxc=sys.maxsize):
        """Does the specified node (such as a bulleted list) have the expected
         number of children?"""

        if exact:  # If specified, must have exactly this number of children
            minc = maxc = exact

        return (minc <= len(ast_node.children) <= maxc)

    # Helpers, in case the evolving CommonMark spec changes the names of nodes
    def is_hr(self, ast_node):
        """Is the node a horizontal rule (hr)?"""
        return ast_node.t == 'HorizontalRule'

    def is_heading(self, ast_node, heading_level=None):
        """Is the node a heading/ title?"""
        has_tag = ast_node.t == "ATXHeader"

        if heading_level is None:
            has_level = True
        else:
            has_level = (ast_node.level == heading_level)
        return has_tag and has_level

    def is_paragraph(self, ast_node):
        """Is the node a paragraph?"""
        return ast_node.t == "Paragraph"

    def is_list(self, ast_node):
        """Is the node a list? (ordered or unordered)"""
        return ast_node.t == "List"

    def is_link(self, ast_node):
        """Is the node a link?"""
        return ast_node.t == "Link"

    def is_external(self, ast_node):
        """Does the node reference content outside the file? (image or link)"""
        return ast_node.t in ("Link", "Image")

    def is_block(self, ast_node):
        """Is the node a BlockQuoted element?"""
        return ast_node.t == "BlockQuote"

    def is_callout(self, ast_node):
        """Composite element: "callout" elements in SWC templates are
        blockquotes whose first child element is a heading"""
        if len(ast_node.children) > 0 and \
                self.is_heading(ast_node.children[0]):
            has_heading = True
        else:
            has_heading = False

        return self.is_block(ast_node) and has_heading
