lesson-template
===============

This repository is the template for creating
[Software Carpentry](http://software-carpentry.org) lessons.  Do *not*
fork this repository directly on GitHub.  Instead, follow the
instructions below to create a lesson repository, and
[the layout instructions](LAYOUT.md) to create a lesson.

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
    $ make preview
    ~~~

    This step requires you to have installed Pandoc (described below).
    It is *not* optional: you *must* build the web pages for your
    lesson yourself and push them to GitHub, rather than relying on
    GitHub to build them for you.

7.  Commit your changes *and the HTML pages in the root directory of
    your lesson repository* and push to the `gh-pages` branch of your
    repository:

    ~~~
    $ cd data-cleanup
    $ git add changed-files.md *.html
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
    $ pip install pandocfilters
    ~~~

3. To convert Markdown files into HTML pages in the root directory, go
   into the root directory of your lesson and run:

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

## For More Information

Please see the following for more information on:

*   [layout out your lesson](LAYOUT.md)
*   [background and design](DESIGN.md)
*   [FAQ](FAQ.md)

## Getting Help

Mail us at [admin@software-carpentry.org](mailto:admin@software-carpentry.org),
or join our [discussion list](http://lists.software-carpentry.org/mailman/listinfo/discuss_lists.software-carpentry.org)
and ask for help there.

## Giving Help

We are committed to offering a pleasant setup experience for our
learners and organizers.  If you find bugs in our instructions, or
would like to suggest improvements, please
[file an issue](https://github.com/swcarpentry/lesson-template/issues?q=is%3Aopen+is%3Aissue)
or [mail us](mailto:admin@software-carpentry.org).
