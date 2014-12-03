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

    <div class='callout'>
    ## Callout time!
    Let's do something.
    </div>

This is also a valid blockquote:

    > ## Prerequisites
    > Breakfast!

and it will be converted into this markdown:

    <div class='prereq'>
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
SPECIAL_CLASSES = ['callout', 'challenge', 'prereq', 'objectives']

# These are titles of blockquotes that will cause the blockquote to
# be converted into a div. They are 'title': 'class' pairs, where the
# 'title' will create a blockquote with the corresponding 'class'.
SPECIAL_TITLES = {'prerequisites': 'prereq',
                  'learning objectives': 'objectives',
                  'objectives': 'objectives',
                  'challenge': 'challenge',
                  'callout': 'callout'}


def find_header(blockquote):
    """Find attributes in a blockquote if they are defined on a
    header that is the first thing in the block quote.

    Returns the attributes, a list [id, classes, kvs]
    where id = str, classes = list, kvs = list of key, value pairs
    """
    if blockquote[0]['t'] == 'Header':
        level, attr, inline = blockquote[0]['c']
        return level, attr, inline


def remove_attributes(blockquote):
    """Remove attributes from a blockquote if they are defined on a
    header that is the first thing in the blockquote.

    Modifies the blockquote inplace.
    """
    if blockquote[0]['t'] == 'Header':
        level, attr, inlines = blockquote[0]['c']
        attr = pf.attributes({})
        blockquote[0] = pf.Header(level, attr, inlines)


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

        ltitle = pf.stringify(inlines).lower()
        if ltitle in SPECIAL_TITLES:
            classes.append(SPECIAL_TITLES[ltitle])
            return pf.Div(attr, blockquote)

        elif len(classes) == 1 and classes[0] in SPECIAL_CLASSES:
            remove_attributes(blockquote)
            # a blockquote is just a list of blocks, so it can be
            # passed directly to Div, which expects Div(attr, blocks)
            return pf.Div(attr, blockquote)


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
