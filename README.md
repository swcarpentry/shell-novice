lesson-template
===============

This repository is the template for
[Software Carpentry](http://software-carpentry.org) lessons.  To
create a new lesson:

1.  Create a new empty repository on GitHub.  (You must create a
    new repository, rather than forking this repository, because
    GitHub only allows a user to have one fork of a particular
    repository, and you may wish to create several lessons.)
2.  Clone that empty repository to your desktop.
3.  Create a branch in that repository called `gh-pages`.
4.  Add this repository as a remote called `template`.
5.  `git pull template gh-pages` to copy the content of this
    repository into your repository.
6.  Create and edit files as explained below.
7.  `git push origin gh-pages` to send your changes to GitHub for
    viewing.

## Terms

*   A *lesson* is a complete story about some subject, typically taught
    in 2-4 hours.
*   A *topic* is a single scene in that story, typically 5-15 minutes
    long.
*   A *slug* is a short identifier for something, such as `filesys` (for
    "file system").

## Why Use a Template?

We have chosen to organize our lessons in a standard way so that:

1.  They will have the same look and feel, and can be navigated in
    predictable ways, even when they are written by different (and
    multiple) people.

2.  Contributors know where to put things when they are extending or
    modifying lessons.

3.  Content can more easily be checked. For example, we want to make
    sure that every learning objective is matched by a challenge,
    and that every challenge corresponds to one or more learning
    objectives.

In the longer term, a standard format will also help us build tools to
remix lessons, but the formatting rules must always be justifiable in
terms of short-term gains for instructors and learners.

Instead of putting the whole lesson in one page, we expect authors to
use one short page per topic.  This division shows each learning
sprint explicitly, and the small chunks will make it easier for us to
keep track of how long each piece takes. The cycle we expect in each
topic within a lesson is:

1.  Explain the topic's objectives.
2.  Teach it.
3.  Do one or more challenges (depending on time).

We also require the following for each lesson:

*   *Introductory slides* to give learners a sense of where the next
    two or three hours are going to take them.

*   A *reference guide* learners can use during the lesson, and look
    back at afterward.  This should includes a glossary of terms to
    help lesson authors think through what they expect learners to be
    unfamiliar with, and to make searching through lessons easier.

*   An *instructor's guide* containing our collected wisdom about this
    lesson and solutions to the challenge exercises.  We ask everyone
    who teaches for us to review and update the instructor's guide for
    each lesson they taught after each workshop.

    Note that the this means the solutions to the lesson's challenge
    exercises will be up on the web.  We have chosen to do this
    because we believe in openness, and because there's no point
    trying to hide something that's in a publicly-readable repository.

## Background

There are a few things you need to know in order to understand why we
do things the way we do.

1.  Git uses the term *clone* to mean "a copy of a repository".
    GitHub uses the term *fork* to mean, "a copy of a GitHub-hosted
    repo that is also hosted on GitHub", and the term *clone* to mean
    "a copy of a GitHub-hosted repo that's located on someone else's
    machine".  In both cases, the duplicate has a remote called
    `origin` that points to the original repo; other remotes can be
    added manually.

2.  A user on GitHub can only have one fork of a particular repo.
    This is a problem for us because an author may be involved in
    writing several lessons, each of which has its own website repo.
    Those website repositories ought to be forks of this one, but
    since GitHub doesn't allow that, we've had to find a workaround.

3.  If a repository has a branch called `gh-pages` (which stands for
    "GitHub pages"), then GitHub uses the HTML and Markdown files in
    that branch to create a website for the repository.  If the
    repository's URL is `http://github.com/darwin/finches`, the URL
    for the website is `http://darwin.github.io/finches`.

4.  We have chosen to use Markdown for writing pages because it's
    simple to learn, and isn't tied to any specific language (the
    ReStructured Text format popular in the Python world, for example,
    is a complete unknown to R programmers).  If authors want to use
    something else for their lessons (e.g., IPython Notebooks), it's
    up to them to generate and commit Markdown formatted according to
    the rules below.

5.  We have chosen to use Pandoc to process pages instead of Jekyll
    (GitHub's default conversion tool) because Pandoc supports a much
    richer dialect of Markdown than Jekyll.  Like Jekyll, Pandoc looks
    for a header at the top of each page formatted like this:

    ~~~
    ---
    key: value
    other_key: other_value
    ---
    ...stuff in the page...
    ~~~

    and uses that data when formatting the page.

6.  Using Pandoc instead of Jekyll means that we have to compile our
    Markdown into HTML on our own machines and commit it to the
    `gh-pages` branch of the lesson's GitHub repository.  In order to
    keep our source files and generated files separate, we put our
    source files in a sub-directory called `pages`, and compile them
    "upward" into the root directory of the lesson's repository.

7.  In order to display properly, our generated HTML pages need
    artwork, CSS style files, and a few bits of Javascript.  We could
    always load these from the web, but that would make offline
    authoring difficult.  Instead, each lesson's repository has a copy
    of these files, and a way of updating them (and only them) on
    demand.

One final note: we try not to put HTML inside Markdown because it's
ugly to read and write, and error-prone to process. Instead, we put
things that ought to be in `<div>` blocks, like the learning
objectives and challenge exercises, in blocks indented with `>`, and
do a bit of post-processing to attach the right CSS classes to these
blocks.

## Overall Layout

Each lesson is stored in a directory laid out as described below. That
directory is a self-contained Git repository (i.e., there are no
submodules or clever tricks with symbolic links).

1.  `README.md`: initially a copy of this file.  It should be
    overwritten with short description of the lesson.

2.  `pages/`: a sub-directory containing the source of the lesson's
    website.  See "Pages" below.

3.  `code/`: a sub-directory containing all sample code. See "Code,
    Data, and Figures" below.

4.  `data/`: a sub-directory containing all data files for this lesson.
    See "Code, Data, and Figures" below.

5.  `fig/`: figures, plots, and diagrams used in the lesson.  See
    "Code, Data, and Figures" below.

6.  `_layouts/`: page layout templates. See "Support Files" below.

7. `_includes/`: page inclusions. See "Support Files" below.

8.  `css/`: style sheets used in the lesson's web site.  See "Support
    Files" below.

9.  `img/`: artwork used in the lesson's web site.  See "Support
    Files" below.

10. `js/`: Javascript used in the lesson's website.  See "Support
    Files" below.

11. `tools/`: tools for managing lessons. See "Tools" below.

## Code, Data, and Figures

All of the software samples used in the lesson must go in a directory
called `code/`. Stand-alone data files must go in a directory called
`data/`. Groups of related data files must be put together in a
sub-directory of `data/` with a meaningful (short) name.

Figures, plots, and diagrams used in the lessons must go in a `fig/`
directory.  We strongly prefer SVG for line drawings, since they are
smaller, scale better, and are easier to edit. Screenshots and other
raster images must be PNG or JPEG format.

**Notes:**

1.  This mirrors the layout a scientist would use for actual work.

2.  However, it may cause novice learners problems. If `code/program.py`
    includes a hard-wired path to a data file, that path must be either
    `datafile.ext` or `data/datafile.ext`. The first will only work if
    the program is run with the lesson's root directory as the current
    working directory, while the second will only work if the program is
    run from within the `code/` directory. This is a learning
    opportunity for students working from the command line, but a
    confusing annoyance inside IDEs and the IPython Notebook (where the
    tool's current working directory is less obvious). And yes, the
    right answer is to pass filenames on the command line, but that
    requires learners to understand how to get command line arguments,
    which isn't something they'll be ready for in the first hour or two.

## Support Files

Files used to display the lesson, such as artwork, CSS, and
Javascript, are stored in directories of their own.  We keep website
artwork separate from graphics used in the lesson's to make it simple
to update the former automatically.  Most authors should not need to
modify any of the support files themselves.

The `_layouts/` directory holds the page templates used to translate
Markdown to HTML, while the `_includes/` directory holds snippets of
HTML that are used in several page layouts.  These directories have
underscores at the start of their names to be consistent with Jekyll's
naming conventions, but the files they contain are for Pandoc.

## Tools

The `tools/` directory contains tools to help create and maintain
lessons:

*   `tools/check`: make sure that everything is formatted properly, and
    print error messages identifying problems if it's not.

## Pages

The `pages/` directory holds the content of the lesson.

1.  `index.md`: the home page for the lesson. (See "Home Page" below.)

2.  `dd-slug.md`: the topics in the lesson. `dd` is a sequence number
    such as `01`, `02`, etc., and `slug` is an abbreviated single-word
    mnemonic for the topic. Thus, `03-filesys.md` is the third topic in
    this lesson, and is about the filesystem. (Note that we use hyphens
    rather than underscores in filenames.) See "Topics" below.

3.  `motivation.md`: slides for a short introductory presentation (three
    minutes or less) explaining what the lesson is about and why people
    would want to learn it. See "Introductory Slides" below.

4.  `reference.md`: a cheat sheet summarizing key terms and commands,
    syntax, etc., that can be printed and given to learners. See
    "Reference Guide" below.

5.  `instructors.md`: the instructor's guide for the lesson. See
    "Instructor's Guide" below.

### Home Page

`index.md` must be structured as follows:

    ---
    layout: lesson
    title: Lesson Title
    keywords: ["some", "key terms", "in a list"]
    ---
    Paragraph of introductory material.

    > ## Prerequisites
    >
    > A short paragraph describing what learners need to know
    > before tackling this lesson.

    ## Topics

    * [Topic Title 1](01-slug.html)
    * [Topic Title 2](02-slug.html)

    ## Other Resources

    * [Introduction](intro.html)
    * [Reference Guide](reference.html)
    * [Instructor's Guide](guide.html)

**Notes:**

1.  The description of prerequisites is prose for human consumption, not
    a machine-comprehensible list of dependencies. We may supplement
    the former with the latter once we have more experience with this
    lesson format and know what we actually want to do. The block must
    be titled "Prerequisites" so we can detect it and style it
    properly.

2.  Software installation and configuration instructions *aren't* in the
    lesson, since they may be shared with other lessons. They will be
    stored centrally on the Software Carpentry web site and linked
    from the lessons that need them.

### Topics

Each topic page must be structured as follows:

    ---
    layout: topic
    title: Topic Title
    minutes: MM
    ---
    > ## Learning Objectives {.objectives}
    >
    > * Learning objective 1
    > * Learning objective 2

    Paragraphs of text mixed with:

    ~~~ {.python}
    some code:
        to be displayed
    ~~~
    ~~~ {.output}
    output
    from
    program
    ~~~
    ~~~ {.error}
    error reports from program (if any)
    ~~~

    and possibly including:

    > ## Callout Box {.callout}
    >
    > An aside of some kind.

    > ## Challenge Title {.challenge}
    >
    > Description of a single challenge.
    > There may be several challenges.

**Notes:**

1.  The "expected time" heading is called minutes to encourage people to
    create topics that are short (10-15 minutes at most).

2.  There are no sub-headings inside a topic other than the ones shown:
    if a topic needs sub-headings, it should be broken into two or more
    topics.

3.  Every challenge should relate directly back to a learning objective.

### Motivational Slides

Every lesson must include a short slide deck suitable for a short
presentation (3 minutes or less) that the instructor can use to explain
to learners how knowing the subject will help them.

**Notes:**

1.  *Flesh this out and provide an example.*

### Reference Guide

The reference guide is a cheat sheet for learners to print, doodle on,
and take away.  Its format is deliberately unconstrained for now,
since we'll need to see a few before we can decide how they ought to
be laid out (or whether they need to be laid out the same way at all).

The last section of the reference guide must be a glossary laid out as
a definition list:

    ---
    layout: reference
    ---
    ...commands and examples...

    ## Glossary

    Key Word 1
    :   Definition of first term

    Key Word 2
    :   Definition of second term

### Instructor's Guide

Many learners will go through the lessons outside of class, so it
seems best to keep material for instructors in a separate document,
rather than interleaved in the lesson itself. Its structure is:

    ---
    title: Instructor's Guide
    ---
    ## Overall

    One or more paragraphs laying out the lesson's legend.

    ## General Points

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
