import pathlib
import subprocess
import zipfile

import pytest


# Root directory of the shell-novice git repository.
DIR_GIT = pathlib.Path(
    subprocess.run(
        "git rev-parse --show-toplevel".split(),
        cwd=pathlib.Path.cwd(),
        capture_output=True,
        check=True,
    )
    .stdout
    .strip()
    .decode()
)


def fenced_blocks(markdown):
    """Return markdown fenced blocks with the block type."""
    type_ = []
    contents = []
    this_block = []
    in_block = False
    is_fence = False
    for line in markdown:
        line = line.strip()
        if line.startswith("```"):
            is_fence = True
            in_block = not in_block
            if in_block:
                type_ += [line.replace("```", "")]
            else:
                contents += [this_block]
                this_block = []
        if in_block and not is_fence:
            this_block += [line]
        is_fence = False
    return zip(type_, contents)


@pytest.fixture
def episodes():
    """Return fenced blocks from all episodes."""
    files_episodes = sorted(
        (DIR_GIT / "episodes")
        .glob("??-*.md")
    )
    episodes = {}
    for file_ in files_episodes:
        episode = int(file_.name.split('-', maxsplit=1)[0])
        with open(file_, "r") as fh:
            episodes[episode] = fenced_blocks(fh.readlines())
    return episodes


@pytest.fixture
def home(tmpdir):
    """Create the home directory structure assumed by the lesson."""
    for dir_ in (
            "Desktop Documents Downloads Library Movies Music Pictures Public"
    ).split():
        tmpdir.mkdir(dir_)
    path_zip = DIR_GIT / "episodes/data/shell-lesson-data.zip"
    assert zipfile.is_zipfile(path_zip)
    with zipfile.ZipFile(path_zip, "r") as fh:
        fh.extractall(tmpdir / "Desktop")
    return tmpdir


def output(cmd, episode):
    """Return output lines for cmd."""
    found_input = False
    for type_, lines in episode:
        if type_ == "bash" and lines == [f"$ {cmd}"]:
            found_input = True
            continue
        elif found_input:
            break
    return lines


def test_01_intro_static_fenced_blocks(episodes):
    episode = list(episodes[1])

    prompts_static = [
        (type_, lines)
        for type_, lines in episode
        if type_ == "bash" and lines[0].endswith("$")
    ]
    assert len(prompts_static) == 2


def test_01_intro_ls(episodes, home):
    episode = list(episodes[1])

    # Extract the episode output of ls.
    cmd = "ls"
    lines = output(cmd, episode)
    expected = set(" ".join(lines).split())

    # Compare with the test fixture
    actual = {fd.basename for fd in home.listdir()}
    assert actual == expected

    # Compare with the actual output of ls.
    actual = set(
        subprocess.run(
            cmd,
            cwd=home,
            capture_output=True,
            check=True,
        )
        .stdout
        .decode()
        .split()
    )
    assert actual == expected


def test_01_intro_ks(episodes, home):
    episode = list(episodes[1])

    # Extract the episode output of ls.
    cmd = "ks"
    lines = output(cmd, episode)
    expected = lines[0]

    # Compare with the actual output of ks.
    actual = subprocess.run(
        cmd,
        cwd=home,
        capture_output=True,
        shell=True,
    )
    assert actual.returncode != 0
    assert not actual.stdout.decode()
    assert actual.stderr.decode()
    assert expected in actual.stderr.decode()
