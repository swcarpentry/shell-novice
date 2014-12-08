## Background and Design

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
    `gh-pages` branch of the lesson's GitHub repository.

    It's considered bad practice to put computer-generated files under
    version control, but the HTML pages put into the lesson's root
    directory by Pandoc *must* be committed to version control in
    order for the lesson to be displayed properly on GitHub.

    It's also considered bad practice to put generated files in the
    same directory as source files.  We do it because some source
    files, such as R Markdown and IPython Notebook files, are
    executable, and contain paths to things like images and data
    files.  If we put our source files in a sub-directory, those paths
    won't work (or conversely, if we put our generated files in a
    different directory, the paths won't work there).

7.  In order to display properly, our generated HTML pages need
    artwork, CSS style files, and a few bits of Javascript.  We could
    load these from the web, but that would make offline authoring
    difficult.  Instead, each lesson's repository has a copy of these
    files, and a way of updating them (and only them) on demand.

One final note: we try not to put HTML inside Markdown because it's
ugly to read and write, and error-prone to process. Instead, we put
things that ought to be in `<div>` blocks, like the learning
objectives and challenge exercises, in blockquotes indented with `>`,
and do a bit of post-processing to attach the right CSS classes to
these blocks.
