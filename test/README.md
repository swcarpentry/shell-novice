# Unit tests and integration tests for shell-novice instructions

## Setup or update the test environment

```shell
# Python 3.12 onwards requires pipx to install user executables.
#
# Install the test environment for the first time:
pipx install pytest
```

```shell
# (Optional, if using emacs with elpy)
pipx inject pytest jedi autopep8 yapf black flake8
# When editing the python files in emacs activate the environemnt with:
# M-x pyvenv-activate ~/.local/pipx/venvs/pytest (or similar).
```

```shell
# Upgrade test environment if re-running tests after a while:
pipx upgrade --include-injected pytest
```

## Run the tests

```shell
pytest --pdb test/
```
