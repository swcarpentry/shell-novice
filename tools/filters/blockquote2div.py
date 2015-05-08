#!/usr/bin/env python
"""Pandoc filter to convert Blockquotes with attributes into Div
with attributes.

Usage:

    pandoc source.md --filter=blockquote2div.py --output=output.html

A blockquote will be converted if

1.  it begins with a header
2.  that either
    1.  matches "Prerequisites", "Objectives", "Callout" or "Challenge" OR
    2.  has attributes containing a single class matching
        one of ['prereq', 'objectives', 'callout', 'challenge']

For example, this is a valid blockquote:

    > ## Callout time! {.callout}
    > Let's do something

and it will be converted into this markdown:

    <div class='callout panel panel-info'>
    ## Callout time!
    Let's do something.
    </div>

This is also a valid blockquote:

    > ## Prerequisites
    > Breakfast!

and it will be converted into this markdown:

    <div class='prereq panel panel-warning'>
    ## Prerequisites
    Breakfast!
    </div>


For debugging purposes you may find it useful to test the filter
like this:

    pandoc source.md --to json | python blockquote2div.py | pandoc --from json
"""
import pandocfilters as pf

# These are classes that, if set on the title of a blockquote, will
# trigger the blockquote to be converted to a div.
SPECIAL_CLASSES = {
    "callout": ("panel-info", "glyphicon-pushpin"),
    "challenge": ("panel-success", "glyphicon-pencil"),
    "prereq": ("panel-warning", "glyphicon-education"),
    "getready": ("panel-warning", "glyphicon-check"),
    "objectives": ("panel-warning", "glyphicon-certificate"),
}


def find_header(blockquote):
    """Find attributes in a blockquote if they are defined on a
    header that is the first thing in the block quote.

    Returns the attributes, a list [id, classes, kvs]
    where id = str, classes = list, kvs = list of key, value pairs
    """
    if blockquote[0]['t'] == 'Header':
        level, attr, inline = blockquote[0]['c']
        return level, attr, inline


def blockquote2div(key, value, format, meta):
    """Convert a blockquote into a div if it begins with a header
    that has attributes containing a single class that is in the
    allowed classes.

    This function can be passed directly to toJSONFilter
    from pandocfilters.
    """
    if key == 'BlockQuote':
        blockquote = value

        header = find_header(blockquote)
        if not header:
            return
        else:
            level, attr, inlines = header

        id, classes, kvs = attr

        if len(classes) == 1 and classes[0] in SPECIAL_CLASSES:
            panel_kind, glyphicon_kind = SPECIAL_CLASSES[classes[0]]

            h_level, h_attr, h_inlines = blockquote[0]['c']

            # insert an icon as the first sub-item of the header
            span = pf.Span(["", ["glyphicon", glyphicon_kind], []], [])
            h_inlines.insert(0, span)

            # only the header goes into panel-heading
            header = pf.Header(h_level, [h_attr[0], [], []], h_inlines)
            panel_header = pf.Div(("", ["panel-heading"], []), [header])

            # the rest of the blockquote goes into panel-body
            panel_body = pf.Div(("", ["panel-body"], []), blockquote[1:])

            # apply Bootstrap panel classes to the div
            classes.append("panel")
            classes.append(panel_kind)

            # a blockquote is just a list of blocks, so it can be
            # passed directly to Div, which expects Div(attr, blocks)
            if classes[0] == "callout":
                return [{"t": "RawBlock", "c": [ "html", "<aside class=\"{0}\">".format(' '.join(classes)) ]},
                        panel_header,
                        panel_body,
                        {"t": "RawBlock", "c": [ "html", "</aside>" ]}]
            else:
                return [{"t": "RawBlock", "c": [ "html", "<section class=\"{0}\">".format(' '.join(classes)) ]},
                        panel_header,
                        panel_body,
                        {"t": "RawBlock", "c": [ "html", "</section>" ]}]


if __name__ == '__main__':
    # pandocfilters.toJSONFilter is a convenience method that
    # makes a command line json filter from a given function.
    # JSON emitted from pandoc is read from stdin. The JSON tree is
    # walked, with the function being applied to each element in the
    # tree.
    #
    # The function passed to to JSONFilter must accept (key, value,
    # format, metadata) as arguments:
    #
    # key - element type (e.g. 'Str', 'Header')
    # value - element contents
    # format - destination format
    # metadata - document metadata
    #
    # The function return values determine what happens to the
    # element:
    #     returns None: the element is unmodified;
    #     returns []: delete the element
    #     otherwise: replace the element with the return value
    #
    # The JSON is then output to stdout, where it can be consumed by
    # pandoc.
    pf.toJSONFilter(blockquote2div)
