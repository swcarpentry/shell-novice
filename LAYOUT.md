# Lesson Layout

Each lesson is stored in a directory laid out as described below. That
directory is a self-contained Git repository (i.e., there are no
submodules or clever tricks with symbolic links).

1.  `README.md`: initially a copy of this file.  It should be
    overwritten with short description of the lesson.

2.  Other files in the root directory: the source of the lesson's
    web pages (and possibly also things like IPython Notebooks and
    R Markdown files that those pages are generated from).

3.  `code/`, `data/`, and `fig/`: sub-directories containing sample
    code, data files, and figures.  See "Code, Data, and Figures"
    below.

4.  `css/`, `img/`, `js/`, and `deck.js/`: style sheets, artwork, and
    Javascript used in the lesson's web site.  See "Support Files"
    below.

5.  `_layouts/` and `_includes/`: page templates and inclusions. See
    "Support Files" below.

6. `tools/`: tools for managing lessons. See "Tools" below.

# Code, Data, and Figures

All of the software samples used in the lesson must go in a directory
called `code/`. Stand-alone data files must go in a directory called
`data/`. Groups of related data files must be put together in a
sub-directory of `data/` with a meaningful (short) name.  Figures,
plots, and diagrams used in the lessons must go in a `fig/` directory.

**Notes:**

1.  This mirrors the layout a scientist would use for actual work.
    However, it may cause novice learners problems.  If a program is
    in `code/a.py`, and contains a reference to a data file
    `../data/b.csv`, then if the user runs the program from the root
    directory using `python code/a.py`, it will be unable to find the
    data file (since the program's working directory will be the root
    directory, not the `data` directory).

2.  IPython Notebooks and R Markdown files, which are both code and
    the source for web pages, should go in the root directory.

3.  We strongly prefer SVG for line drawings, since they are smaller,
    scale better, and are easier to edit. Screenshots and other raster
    images must be PNG or JPEG format.

# Support Files

Files used to display the lesson, such as artwork, CSS, and
Javascript, are stored in `img/`, `css/`, and `js/` directories of
their own, while the `deck.js/` directory contains files used to make
HTML slideshows.  We keep website artwork in the `img/` directory
separate from figures used in the lesson (which are stored in `fig/`)
to make it simple to update the former automatically.  Most authors
should not need to modify any of the support files themselves.

The `_layouts/` directory holds the page templates used to translate
Markdown to HTML, while the `_includes/` directory holds snippets of
HTML that are used in several page layouts.  These directories have
underscores at the start of their names to be consistent with Jekyll's
naming conventions, but the files they contain are for Pandoc.

# Tools

The `tools/` directory contains tools to help create and maintain
lessons:

*   `tools/check`: make sure that everything is formatted properly, and
    print error messages identifying problems if it's not.

# Pages

The root directory holds the content of the lesson, and must contain:

1.  `Makefile`: contains commands to check, preview, and update the
    repository.  Authors should not need to modify this file.

2.  `index.md`: the home page for the lesson. (See "Home Page" below.)

3.  `dd-slug.md`: the topics in the lesson. `dd` is a sequence number
    such as `01`, `02`, etc., and `slug` is an abbreviated single-word
    mnemonic for the topic. Thus, `03-filesys.md` is the third topic in
    this lesson, and is about the filesystem. (Note that we use hyphens
    rather than underscores in filenames.) See "Topics" below.

4.  `motivation.md`: slides for a short introductory presentation (three
    minutes or less) explaining what the lesson is about and why people
    would want to learn it. See "Introductory Slides" below.

5.  `reference.md`: a cheat sheet summarizing key terms and commands,
    syntax, etc., that can be printed and given to learners. See
    "Reference Guide" below.

6.  `discussion.md`: notes about more advanced ideas that would
    distract from the main lesson, and pointers to where to go next.
    See "Discussion Page" below.

7.  `instructors.md`: the instructor's guide for the lesson. See
    "Instructor's Guide" below.

Note that the lesson's title is repeated in several files.  We could
put this in the Makefile, and insert it into pages when compiling, but
then authors would have to edit the Makefile (which we want to avoid).
We could also put it in some sort of configuration file, but again,
we're trying to avoid those.

## Home Page

`index.md` must be structured as follows:

    ---
    layout: lesson
    title: Lesson Title
    ---
    Paragraph(s) of introductory material.

    > ## Prerequisites {.prereq}
    >
    > What learners need to know before tackling this lesson.

    ## Topics

    1.  [Topic Title 1](01-slug.html)
    2.  [Topic Title 2](02-slug.html)

    ## Other Resources

    *   [Motivation](motivation.html)
    *   [Reference Guide](reference.html)
    *   [Next Steps](discussion.html)
    *   [Instructor's Guide](instructors.html)

**Notes:**

1.  The description of prerequisites is prose for human consumption,
    not a machine-comprehensible list of dependencies. We may
    supplement the former with the latter once we have more experience
    with this lesson format and know what we actually want to do.

2.  Software installation and configuration instructions *aren't* in
    the lesson, since they may be shared with other lessons. They will
    be stored centrally on the Software Carpentry web site and linked
    from the lessons that need them.

## Topics

Each topic page must be structured as follows:

    ---
    layout: page
    title: Lesson Title
    subtitle: Topic Title
    minutes: 10
    ---
    > ## Learning Objectives
    >
    > * Learning objective 1
    > * Learning objective 2

    Paragraphs of text --- possibly including **definitions** ---
    mixed with:

    ~~~ {.python}
    some code:
        to be displayed
    ~~~

    and:

    ~~~ {.output}
    output
    from
    program
    ~~~

    and:

    ~~~ {.error}
    error reports from programs (if any)
    ~~~

    and possibly including some of these:

    > ## Callout Box {.callout}
    >
    > An aside of some kind.

    and one or more of these:

    > ## Challenge Title {.challenge}
    >
    > Description of a single challenge.
    > There may be several challenges.

**Notes:**

1.  The "expected time" heading is called minutes to encourage people
    to create topics that are short (10-15 minutes at most).

2.  There are no sub-headings inside a topic other than the ones
    shown.  (If a topic needs sub-headings, it should be broken into
    two or more topics.)

3.  Every challenge should relate explicitly back to a learning
    objective.

4.  Definitions of terms are marked in **bold** (like `**this**`).
    Nothing else should be marked as bold text --- use *italics* for
    for all other emphasis.

## Motivational Slides

Every lesson must include a short slide deck suitable for a short
presentation (3 minutes or less) that the instructor can use to explain
to learners how knowing the subject will help them.  The slides must
be laid out like this:

    ---
    layout: slides
    title: Why Make?
    ---
    <section class="slide">
    ## Why This Topic?
    </section>

    <section class="slide">
    ## Some Other Point
    </section>


**Notes:**

1.  This is the one place where we *must* use HTML tags in our Markdown
    (to delimit slides).  Everything inside the section markers should
    be Markdown if possible.

2.  We use [deck.js](http://imakewebthings.com/deck.js/) for our slides
    as it is simpler and prettier than alternatives like
    [reveal.js](http://lab.hakim.se/reveal-js/).

## Reference Guide

The reference guide is a cheat sheet for learners to print, doodle on,
and take away.  Its format is deliberately unconstrained for now,
since we'll need to see a few before we can decide how they ought to
be laid out (or whether they need to be laid out the same way at all).

The last section of the reference guide must be a glossary laid out as
a definition list:

    ---
    layout: page
    title: Lesson Title
    subtitle: Reference
    ---
    ...commands and examples...

    ## Glossary

    Key Word 1
    :   Definition of first term

    Key Word 2
    :   Definition of second term

## Discussion Page

The discussion page

    ---
    layout: page
    title: Lesson Title
    subtitle: Discussion
    ---
    *   First point of general discussion.

        This may span several paragraphs.

    *   Second point of general discussion.

## Instructor's Guide

Learners may go through lessons outside of class, so it seems best to
keep material for instructors in a separate document, rather than
interleaved in the lesson itself.  Its structure is:

    ---
    layout: page
    title: Lesson Title
    subtitle: Instructor's Guide
    ---
    ## Legend

    One or more paragraphs laying out the lesson's legend (i.e., the story
    behind its running example).

    ## Overall

    * Point

    * Point

    ## [Topic Title 1](01-slug.html)

    * Point

    * Point

    1.  Discussion of first challenge.

    2.  Discussion of second challenge.

    ## [Topic Title 2](02-slug.html)

    * Point

    * Point

    1.  Discussion of first challenge.

    2.  Discussion of second challenge.

**Notes:**

1.  The topic headings must match the topic titles. (Yes, we could
    define these as variables in a configuration file and refer to those
    variables everywhere, but in this case, repetition will be a lot
    easier to read, and our validator can check that the titles line
    up.)

2.  The points can be anything: specific ways to introduce ideas, common
    mistakes learners make and how to get out of them, or anything else.

3.  Full solutions to the challenges do not have to be presented, but
    every challenge should be discussed, and that discussion should
    mention how long it typically takes to do.  (Those estimates do
    not go in the challenge itself, since they can increase learners'
    stress levels.)
