"""Initialize a newly-created repository."""


import sys
import os
import shutil

BOILERPLATE = (
    'AUTHORS',
    'CITATION',
    'CONTRIBUTING.md',
    'README.md',
    '_config.yml',
    os.path.join('_episodes', '01-introduction.md'),
    os.path.join('_extras', 'about.md'),
    os.path.join('_extras', 'discuss.md'),
    os.path.join('_extras', 'figures.md'),
    os.path.join('_extras', 'guide.md'),
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
            os.path.join('bin', 'boilerplate', path),
            path
        )


if __name__ == '__main__':
    main()
