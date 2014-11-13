lesson-template
===============

This repository is the template for creating
[Software Carpentry](http://software-carpentry.org) lessons.  Do *not*
fork this repository directly on GitHub.  Instead, follow the
instructions below.

## Manual Setup

We will assume that your user ID is `mcurie` and the name of your
lesson is `data-cleanup`.

1.  Create an empty repository on GitHub called `data-cleanup`.

2.  Clone the template repository to your computer in a directory with
    the same name as your lesson identifier:

    ~~~
    $ git clone -b gh-pages -o upstream https://github.com/swcarpentry/lesson-template.git data-cleanup
    ~~~

3.  Go into that directory using

    ~~~
    $ cd data-cleanup
    ~~~

4.  Add your GitHub repository as a remote called `origin` using

    ~~~
    $ git remote add origin https://github.com/mcurie/data-cleanup
    ~~~

5.  Create and edit files (explained below).

6.  Build the HTML pages for your lesson:

    ~~~
    $ cd data-cleanup/pages # or just 'cd pages' if you are already in data-cleanup
    $ make preview
    ~~~

    Note that this step requires you to have installed Pandoc
    (described below).  Note also that it is *not* optional: you
    *must* build the web pages for your lesson yourself and push
    them to GitHub, rather than relying on GitHub to build them
    for you.

7.  Commit your changes *and the HTML pages in the root directory of
    your lesson repository* and push to the `gh-pages` branch of your
    repository:

    ~~~
    $ cd data-cleanup # or 'cd ..' if you are in the 'pages' directory
    $ git add pages/changed-files.md
    $ git add *.html
    $ git commit -m "Explanatory message"
    $ git push origin gh-pages
    ~~~

8.  Tell us where your lesson is so that we can use it and help you improve it.

Note that SSH cloning (as opposed to the HTTPS cloning used above)
will also work for those who have set up SSH keys with GitHub.

## Dependencies

Because people may choose to use the IPython Notebook, R Markdown, or
some other format for parts of their lessons, and because Jekyll (the
tool GitHub uses to build HTML pages) only supports an impoverished
form of Markdown, we require lesson authors to build the HTML pages
for their lessons on their machines with Pandoc and commit those to
the `gh-pages` branch of their lesson website.  To do this:

1. [Install Pandoc](http://www.johnmacfarlane.net/pandoc/installing.html)

2. Install pandocfilters, a Python module that helps with writing
   filters for Pandoc:

    ~~~
    pip install pandocfilters
    ~~~

3. To convert Markdown pages in the `pages` directory into HTML pages
   in the root directory, go into the `pages` directory and run:

   ~~~
   $ make preview
   ~~~

   You can run `make` on its own to get a list of other things it will
   do for you.

## Why Use a Template?

We organize our lessons in a standard way so that:

1.  To give guidance to people who aren't experienced instructional
    designers.  Requiring learning objectives, challenges, and a short
    glossary tells people what they ought to create.

2.  It's easy to find things in lessons written by different people.

3.  People using lessons written by different people can easily given
    them the same look and feel.

4.  Contributors know where to put things when they are extending or
    modifying lessons.

5.  Content can be checked mechanically.

Instead of putting the whole lesson in one page, authors should create
one short page per topic.  Each topic should take 10-15 minutes to
cover, and that coverage to include:

1.  Explain the topic's objectives.

2.  Perform the material.  (We expect instructors to code live, *not*
    to put lesson notes or slides on the screen.)

3.  Do one or more challenges depending on time.

Along with the lesson materials themselves, each lesson must contain:

*   *Introductory slides* to give learners a sense of where the next
    two or three hours are going to take them.

*   A *reference guide* that learners can use during the lesson and take
    away afterward.  This must include a glossary of terms, not only to
    help learners, but also to help lesson authors summarize what the
    lesson actually covers.

*   A *discussion page* that mentions more advanced ideas and tells
    learners where to go next.

*   An *instructor's guide* that presents the lesson's legend (or back
    story), summarizes our experiences with the lesson, and discusses
    solutions to the challenge exercises.  We ask everyone who teaches
    for us to review and update the instructor's guide for each lesson
    they taught after each workshop.

    Note that the this means the solutions to the lesson's challenge
    exercises will be up on the web.  We have chosen to do this
    because we believe in openness, and because there's no point
    trying to hide something that's in a publicly-readable repository.

Authors may retain copyright on their lessons, but we ask that all
lessons be published under the Creative Commons - Attribution (CC-BY)
license, or put in the public domain (CC-0), to permit remixing.

## Background

There are a few things you need to know in order to understand why
this template is organized the way it is:

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

4.  We use Markdown for writing pages because it's simple to learn,
    and isn't tied to any specific language (the ReStructured Text
    format popular in the Python world, for example, is a complete
    unknown to R programmers).  If authors want to use something else
    to author their lessons (e.g., IPython Notebooks), it's up to them
    to generate and commit Markdown formatted according to the rules
    below.

    **Note:** we do *not* prescribe what tools instructors should use
    when actually teaching.  The IPython Notebook, Python IDEs like
    Spyder, and the GOCLI (Good Ol' Command Line Interpreter) are all
    equally welcome up on stage --- all we specify is the format of
    the lesson notes.

5.  We use Pandoc to process pages instead of Jekyll (GitHub's default
    conversion tool) because Pandoc supports a much richer dialect of
    Markdown than Jekyll.  Like Jekyll, Pandoc looks for a header at
    the top of each page formatted like this:

    ~~~
    ---
    variable: value
    other_variable: other_value
    ---
    ...stuff in the page...
    ~~~

    and inserts the values of those variables into the page when
    formatting this.  Lesson authors will usually not have to worry
    about this.

6.  Using Pandoc instead of Jekyll means that we have to compile our
    Markdown into HTML on our own machines and commit it to the
    `gh-pages` branch of the lesson's GitHub repository.  In order to
    keep our source files and generated files separate, we put our
    source files in a sub-directory called `pages`, and compile them
    "upward" into the root directory of the lesson's repository.

    **Note:** while it's usually considered bad practice to put
    computer-generated files under version control, the HTML pages put
    into the lesson's root directory by Pandoc *must* be committed to
    version control in order for the lesson to be displayed properly
    on GitHub.

7.  In order to display properly, our generated HTML pages need
    artwork, CSS style files, and a few bits of Javascript.  We could
    load these from the web, but that would make offline authoring
    difficult.  Instead, each lesson's repository has a copy of these
    files, and a way of updating them (and only them) on demand.

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

3.  `code/`, `data/`, and `fig/`: sub-directories containing sample
    code, data files, and figures.  See "Code, Data, and Figures"
    below.

4.  `css/`, `img/`, and `js/`: style sheets, artwork, and Javascript
    used in the lesson's web site.  See "Support Files" below.

5.  `_layouts/` and `_includes/`: page templates and inclusions. See
    "Support Files" below.

6. `tools/`: tools for managing lessons. See "Tools" below.

## Code, Data, and Figures

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

2.  We strongly prefer SVG for line drawings, since they are smaller,
    scale better, and are easier to edit. Screenshots and other raster
    images must be PNG or JPEG format.

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

The `pages/` directory holds the content of the lesson, and must
contain:

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
then authors would have to edit the Makefile (which we're trying to
avoid requiring).  We could also put it in some sort of configuration
file, but again, we're trying to avoid those.

### Home Page

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

### Topics

Each topic page must be structured as follows:

    ---
    layout: page
    title: Lesson Title
    subtitle: Topic Title
    minutes: 10
    ---
    > ## Learning Objectives {.objectives}
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

### Motivational Slides

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

### Reference Guide

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

### Discussion Page

The discussion page

    ---
    layout: page
    title: Lesson Title
    subtitle: Discussion
    ---
    *   First point of general discussion.

        This may span several paragraphs.

    *   Second point of general discussion.

### Instructor's Guide

Learners may go through lessons outside of class, so it seems best to
keep material for instructors in a separate document, rather than
interleaved in the lesson itself.  Its structure is:

    ---
    layout: page
    title: Automating Tasks with Make
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
