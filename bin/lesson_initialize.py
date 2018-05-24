#!/usr/bin/env python3

"""Initialize a newly-created repository."""


import sys
import os
import shutil

BOILERPLATE = (
    '.travis.yml',
    'AUTHORS',
    'CITATION',
    'CONTRIBUTING.md',
    'README.md',
    '_config.yml',
    '_episodes/01-introduction.md',
    '_extras/about.md',
    '_extras/discuss.md',
    '_extras/figures.md',
    '_extras/guide.md',
    'aio.md',
    'index.md',
    'reference.md',
    'setup.md',
)


def main():
    """Check for collisions, then create."""

    # Check.
    errors = False
    for path in BOILERPLATE:
        if os.path.exists(path):
            print('Warning: {0} already exists.'.format(path), file=sys.stderr)
            errors = True
    if errors:
        print('**Exiting without creating files.**', file=sys.stderr)
        sys.exit(1)

    # Create.
    for path in BOILERPLATE:
        shutil.copyfile(
            "bin/boilerplate/{}".format(path),
            path
        )


if __name__ == '__main__':
    main()
