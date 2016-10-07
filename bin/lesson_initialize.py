#!/usr/bin/env python

"""Initialize a newly-created repository."""


from __future__ import print_function
import sys
import os

ROOT_AUTHORS = '''\
FIXME: list authors' names and email addresses.
'''

ROOT_CITATION = '''\
FIXME: describe how to cite this lesson.
'''

ROOT_CONTRIBUTING_MD = '''\
# Contributing

[Software Carpentry][swc-site] and [Data Carpentry][dc-site] are open source projects,
and we welcome contributions of all kinds:
new lessons,
fixes to existing material,
bug reports,
and reviews of proposed changes are all welcome.

## Contributor Agreement

By contributing,
you agree that we may redistribute your work under [our license](LICENSE.md).
In exchange,
we will address your issues and/or assess your change proposal as promptly as we can,
and help you become a member of our community.
Everyone involved in [Software Carpentry][swc-site] and [Data Carpentry][dc-site]
agrees to abide by our [code of conduct](CONDUCT.md).

## How to Contribute

The easiest way to get started is to file an issue
to tell us about a spelling mistake,
some awkward wording,
or a factual error.
This is a good way to introduce yourself
and to meet some of our community members.

1.  If you do not have a [GitHub][github] account,
    you can [send us comments by email][contact].
    However,
    we will be able to respond more quickly if you use one of the other methods described below.

2.  If you have a [GitHub][github] account,
    or are willing to [create one][github-join],
    but do not know how to use Git,
    you can report problems or suggest improvements by [creating an issue][issues].
    This allows us to assign the item to someone
    and to respond to it in a threaded discussion.

3.  If you are comfortable with Git,
    and would like to add or change material,
    you can submit a pull request (PR).
    Instructions for doing this are [included below](#using-github).

## Where to Contribute

1.  If you wish to change this lesson,
    please work in <https://github.com/swcarpentry/FIXME>,
    which can be viewed at <https://swcarpentry.github.io/FIXME>.

2.  If you wish to change the example lesson,
    please work in <https://github.com/swcarpentry/lesson-example>,
    which documents the format of our lessons
    and can be viewed at <https://swcarpentry.github.io/lesson-example>.

3.  If you wish to change the template used for workshop websites,
    please work in <https://github.com/swcarpentry/workshop-template>.
    The home page of that repository explains how to set up workshop websites,
    while the extra pages in <https://swcarpentry.github.io/workshop-template>
    provide more background on our design choices.

4.  If you wish to change CSS style files, tools,
    or HTML boilerplate for lessons or workshops stored in `_includes` or `_layouts`,
    please work in <https://github.com/swcarpentry/styles>.

## What to Contribute

There are many ways to contribute,
from writing new exercises and improving existing ones
to updating or filling in the documentation
and and submitting [bug reports][issues]
about things that don't work, aren't clear, or are missing.
If you are looking for ideas,
please see [the list of issues for this repository][issues],
or the issues for [Data Carpentry][dc-issues]
and [Software Carpentry][swc-issues] projects.

Comments on issues and reviews of pull requests are just as welcome:
we are smarter together than we are on our own.
Reviews from novices and newcomers are particularly valuable:
it's easy for people who have been using these lessons for a while
to forget how impenetrable some of this material can be,
so fresh eyes are always welcome.

## What *Not* to Contribute

Our lessons already contain more material than we can cover in a typical workshop,
so we are usually *not* looking for more concepts or tools to add to them.
As a rule,
if you want to introduce a new idea,
you must (a) estimate how long it will take to teach
and (b) explain what you would take out to make room for it.
The first encourages contributors to be honest about requirements;
the second, to think hard about priorities.

We are also not looking for exercises or other material that only run on one platform.
Our workshops typically contain a mixture of Windows, Mac OS X, and Linux users;
in order to be usable,
our lessons must run equally well on all three.

## Using GitHub

If you choose to contribute via GitHub,
you may want to look at
[How to Contribute to an Open Source Project on GitHub][how-contribute].
In brief:

1.  The published copy of the lesson is in the `gh-pages` branch of the repository
    (so that GitHub will regenerate it automatically).
    Please create all branches from that,
    and merge the [master repository][repo]'s `gh-pages` branch into your `gh-pages` branch
    before starting work.
    Please do *not* work directly in your `gh-pages` branch,
    since that will make it difficult for you to work on other contributions.

2.  We use [GitHub flow][github-flow] to manage changes:
    1.  Create a new branch in your desktop copy of this repository for each significant change.
    2.  Commit the change in that branch.
    3.  Push that branch to your fork of this repository on GitHub.
    4.  Submit a pull request from that branch to the [master repository][repo].
    5.  If you receive feedback,
        make changes on your desktop and push to your branch on GitHub:
        the pull request will update automatically.

Each lesson has two maintainers who review issues and pull requests
or encourage others to do so.
The maintainers are community volunteers,
and have final say over what gets merged into the lesson.

## Other Resources

General discussion of [Software Carpentry][swc-site] and [Data Carpentry][dc-site]
happens on the [discussion mailing list][discuss-list],
which everyone is welcome to join.
You can also [reach us by email][contact].

[contact]: mailto:admin@software-carpentry.org
[dc-issues]: https://github.com/issues?q=user%3Adatacarpentry
[dc-lessons]: http://datacarpentry.org/lessons/
[dc-site]: http://datacarpentry.org/
[discuss-list]: http://lists.software-carpentry.org/listinfo/discuss
[example-site]: https://swcarpentry.github.io/lesson-example/
[github]: http://github.com
[github-flow]: https://guides.github.com/introduction/flow/
[github-join]: https://github.com/join
[how-contribute]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[issues]: https://github.com/swcarpentry/FIXME/issues/
[repo]: https://github.com/swcarpentry/FIXME/
[swc-issues]: https://github.com/issues?q=user%3Aswcarpentry
[swc-lessons]: http://software-carpentry.org/lessons/
[swc-site]: http://software-carpentry.org/
'''

ROOT_CONFIG_YML = '''\
#------------------------------------------------------------
# Values for this lesson.
#------------------------------------------------------------

# Which carpentry is this ("swc", "dc", or "lc")?
carpentry: "swc"

# Overall title for pages.
title: "Lesson Title"

# Contact.  This *must* include the protocol: if it's an email
# address, it must look like "mailto:lessons@software-carpentry.org",
# or if it's a URL, "https://gitter.im/username/ProjectName".
contact: "mailto:lessons@software-carpentry.org"

#------------------------------------------------------------
# Generic settings (should not need to change).
#------------------------------------------------------------

# What kind of thing is this ("workshop" or "lesson")?
kind: "lesson"

# Magic to make URLs resolve both locally and on GitHub.
# See https://help.github.com/articles/repository-metadata-on-github-pages/.
repository: <USERNAME>/<PROJECT>

# Sites.
amy_site: "https://amy.software-carpentry.org/workshops"
dc_site: "http://datacarpentry.org"
swc_github: "https://github.com/swcarpentry"
swc_site: "https://software-carpentry.org"
swc_pages: "https://swcarpentry.github.io"
lc_site: "http://datacarpentry.org"
template_repo: "https://github.com/swcarpentry/styles"
example_repo: "https://github.com/swcarpentry/lesson-example"
example_site: "https://swcarpentry.github.com/lesson-example"
workshop_repo: "https://github.com/swcarpentry/workshop-template"
workshop_site: "https://swcarpentry.github.io/workshop-template"
training_site: "https://swcarpentry.github.io/instructor-training"

# Surveys.
pre_survey: "https://www.surveymonkey.com/r/swc_pre_workshop_v1?workshop_id="
post_survey: "https://www.surveymonkey.com/r/swc_post_workshop_v1?workshop_id="

# Start time in minutes (0 to be clock-independent, 540 to show a start at 09:00 am).
start_time: 0

# Specify that things in the episodes collection should be output.
collections:
  episodes:
    output: true
    permalink: /:path/
  extras:
    output: true

# Set the default layout for things in the episodes collection.
defaults:
  - values:
      root: ..
  - scope:
      path: ""
      type: episodes
    values:
      layout: episode

# Files and directories that are not to be copied.
exclude:
  - Makefile
  - bin

# Turn off built-in syntax highlighting.
highlighter: false
'''

ROOT_INDEX_MD = '''\
---
layout: lesson
root: .
---
FIXME: home page introduction

> ## Prerequisites
>
> FIXME
{: .prereq}
'''

ROOT_REFERENCE_MD = '''\
---
layout: reference
permalink: /reference/
---

## Glossary

FIXME
'''

ROOT_SETUP_MD = '''\
---
layout: page
title: Setup
permalink: /setup/
---
FIXME
'''

EPISODES_INTRODUCTION_MD = '''\
---
title: "Introduction"
teaching: 0
exercises: 0
questions:
- "Key question"
objectives:
- "First objective."
keypoints:
- "First key point."
---
'''

EXTRAS_ABOUT_MD = '''\
---
layout: page
title: About
permalink: /about/
---
{% include carpentries.html %}
'''

EXTRAS_DISCUSS_MD = '''\
---
layout: page
title: Discussion
permalink: /discuss/
---
FIXME
'''

EXTRAS_FIGURES_MD = '''\
---
layout: page
title: Figures
permalink: /figures/
---
{% include all_figures.html %}
'''

EXTRAS_GUIDE_MD = '''\
---
layout: page
title: "Instructor Notes"
permalink: /guide/
---
FIXME
'''

INCLUDES_ALL_FIGURES_HTML = '''\
<!-- empty -->
'''

BOILERPLATE = (
    ('AUTHORS', ROOT_AUTHORS),
    ('CITATION', ROOT_CITATION),
    ('CONTRIBUTING.md', ROOT_CONTRIBUTING_MD),
    ('_config.yml', ROOT_CONFIG_YML),
    ('index.md', ROOT_INDEX_MD),
    ('reference.md', ROOT_REFERENCE_MD),
    ('setup.md', ROOT_SETUP_MD),
    ('_episodes/01-introduction.md', EPISODES_INTRODUCTION_MD),
    ('_extras/about.md', EXTRAS_ABOUT_MD),
    ('_extras/discuss.md', EXTRAS_DISCUSS_MD),
    ('_extras/figures.md', EXTRAS_FIGURES_MD),
    ('_extras/guide.md', EXTRAS_GUIDE_MD),
    ('_includes/all_figures.html', INCLUDES_ALL_FIGURES_HTML)
)


def main():
    """Check for collisions, then create."""

    # Check.
    errors = False
    for (path, _) in BOILERPLATE:
        if os.path.exists(path):
            print('Warning: {0} already exists.'.format(path), file=sys.stderr)
            errors = True
    if errors:
        print('**Exiting without creating files.**', file=sys.stderr)
        sys.exit(1)

    # Create.
    for (path, content) in BOILERPLATE:
        with open(path, 'w') as writer:
            writer.write(content)


if __name__ == '__main__':
    main()
