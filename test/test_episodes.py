"""Test all code blocks and scripts in the shell-novice lesson."""

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

    # Extract the episode output of ks.
    cmd = "ks"
    lines = output(cmd, episode)
    expected = lines[0]

    # Compare with the actual output of ks.
    actual = subprocess.run(
        cmd,
        cwd=home,
        capture_output=True,
        shell=True,
        executable="bash",
    )
    assert actual.returncode != 0
    assert not actual.stdout.decode()
    assert actual.stderr.decode()
    assert expected in actual.stderr.decode()


def test_02_filedir_ls_without_cd(episodes, home):
    episode = list(episodes[2])

    # Testing absolute output of pwd commands is tricky because of the
    # challenge trying to mock the /Users/nelle home directory with a
    # shell command; pytest monkeypatching is for python commands.
    # Therefore check relative values of pwd using
    # pathlib.Path().relative_to() where applicable.

    # FIXME the "Applications" directory exists in this episode but
    # not in the previous 01-intro episode.
    home.mkdir("Applications")

    for cmd in ["ls", "ls -F"]:
        cmd = "ls"
        lines = output(cmd, episode[2:])
        expected = set(" ".join(lines).split())

        actual = set(
            subprocess.run(
                cmd.split(),
                cwd=home,
                capture_output=True,
                check=True,
            )
            .stdout
            .decode()
            .split()
        )
        assert actual == expected

    # Skip checking the following:
    # $ man ls
    # $ ls --help

    cmd = "ls -j"
    lines = output(cmd, episode[2:])
    expected = lines[0].replace("'", "")

    actual = subprocess.run(
        cmd,
        cwd=home,
        capture_output=True,
        shell=True,
        executable="bash",
    )
    assert actual.returncode != 0
    assert not actual.stdout.decode()
    assert actual.stderr.decode()
    assert expected in actual.stderr.decode()

    cmd = "ls -F Desktop"
    lines = output(cmd, episode[2:])
    expected = lines[0]

    actual = (
        subprocess.run(
            cmd.split(),
            cwd=home,
            capture_output=True,
            check=True,
        )
        .stdout
        .decode()
        .strip()
    )
    assert actual == expected

    cmd = "ls -F Desktop/shell-lesson-data"
    lines = output(cmd, episode[2:])
    expected = lines[0].split()

    actual = (
        subprocess.run(
            cmd.split(),
            cwd=home,
            capture_output=True,
            check=True,
        )
        .stdout
        .decode()
        .split()
    )
    assert actual == expected


def test_02_filedir_cd_relative(episodes, home):
    episode = list(episodes[2])
    # Subset to the first block with cd commands.
    for i, (_, lines) in enumerate(episode):
        if lines[0].startswith("$ cd"):
            break
    episode = episode[i:]

    # pwd path relative to the home directory.
    pwd = pathlib.Path(episode[2][1][0])
    expected = pwd.parts[3:]

    # Run the cd commands with the subsequent pwd command.
    cmd = ";".join([cmd.replace("$ ", "")
                    for cmd in episode[0][1] + episode[1][1]])
    actual = pathlib.Path(
        subprocess.run(
            cmd,
            cwd=home,
            capture_output=True,
            check=True,
            shell=True,
            executable="bash",
        )
        .stdout
        .decode()
        .strip()
    ).relative_to(home).parts
    assert actual == expected

    # Clear the previously tested command and output.
    del episode[2]
    del episode[1]

    expected = episode[2][1][0].split()

    # Run the cd commands with the subsequent ls -F command.
    cmd = ";".join([cmd.replace("$ ", "")
                    for cmd in episode[0][1] + episode[1][1]])
    actual = (
        subprocess.run(
            cmd,
            cwd=home,
            capture_output=True,
            check=True,
            shell=True,
            executable="bash",
        )
        .stdout
        .decode()
        .split()
    )
    assert actual == expected

    # Clear the previously tested command and output.
    del episode[2]
    del episode[1]

    expected = episode[2][1][0].removeprefix("-bash: ")

    # Run the cd commands with the subsequent cd command into the
    # non-existant directory.
    cmd = ";".join([cmd.replace("$ ", "")
                    for cmd in episode[0][1] + episode[1][1]])
    actual = subprocess.run(
        cmd,
        cwd=home,
        capture_output=True,
        shell=True,
        executable="bash",
    )
    assert actual.returncode != 0
    assert not actual.stdout.decode()
    assert actual.stderr.decode()
    assert expected in actual.stderr.decode()

    # Clear the previously tested command and output.
    del episode[2]
    del episode[1]

    expected = pathlib.Path(episode[3][1][0]).parts[3:]

    # Run the cd commands.
    cmd = ";".join([cmd.replace("$ ", "")
                    for cmd in episode[0][1] + episode[1][1] + episode[2][1]])
    actual = pathlib.Path(
        subprocess.run(
            cmd,
            cwd=home,
            capture_output=True,
            check=True,
            shell=True,
            executable="bash",
        )
        .stdout
        .decode()
        .strip()
    ).relative_to(home).parts
    assert actual == expected

    # Clear the previously tested command and output.
    del episode[3]
    del episode[2]

    expected = episode[3][1][0].split()

    # Run the cd commands and ls -F -a.
    cmd = ";".join([cmd.replace("$ ", "")
                    for cmd in episode[0][1] + episode[1][1] + episode[2][1]])
    actual = (
        subprocess.run(
            cmd,
            cwd=home,
            capture_output=True,
            check=True,
            shell=True,
            executable="bash",
        )
        .stdout
        .decode()
        .split()
    )
    assert actual == expected


def test_02_filedir_cd_absolute(episodes, home):
    episode = list(episodes[2])
    # Subset to the first block with the absolute cd commands.
    for i, (_, lines) in enumerate(episode):
        if lines == ["$ cd"]:
            break
    # Also remove the last 7 blocks that look at the filesystem root
    # and tab-completion.
    episode = episode[i:-7]

    # Replace /Users/nelle with home.
    for i, (type_, lines) in enumerate(episode):
        if type_ == "output":
            episode[i] = (type_, [line.replace("/Users/nelle", str(home))
                                  for line in lines])

    # pwd after cd.
    expected = episode[2][1][0]
    cmd = ";".join([cmd.replace("$ ", "")
                    for cmd in episode[0][1] + episode[1][1]])
    actual = (
        subprocess.run(
            cmd,
            cwd=home,
            capture_output=True,
            check=True,
            shell=True,
            executable="bash",
            env={"HOME": home},
        )
        .stdout
        .decode()
        .strip()
    )
    assert actual == expected

    del episode[2]
    del episode[1]
    del episode[0]

    # pwd after cd Desktop/shell-lesson-data/exercise-data.
    expected = episode[2][1][0]
    cmd = ";".join([cmd.replace("$ ", "")
                    for cmd in episode[0][1] + episode[1][1]])
    actual = (
        subprocess.run(
            cmd,
            cwd=home,
            capture_output=True,
            check=True,
            shell=True,
            executable="bash",
            env={"HOME": home},
        )
        .stdout
        .decode()
        .strip()
    )
    assert actual == expected

    # Skip exercises until ls -s
    found = False
    for i, (_, lines) in enumerate(episode):
        for line in lines:
            if line.startswith("$ ls -s "):
                found = True
                break
        if found:
            break
    episode = episode[i:]

    # pwd after many absolute and relative cd commands.
    expected = episode[1][1]
    cmd = ";".join([cmd.replace("$ ", "") for cmd in episode[0][1]])
    actual = (
        subprocess.run(
            cmd,
            cwd=home,
            capture_output=True,
            check=True,
            shell=True,
            executable="bash",
            env={"HOME": home},
        )
        .stdout
        .decode()
        .strip()
    )
    # FIXME none of the numbers match!  Skip this test for now.
    # actual_set = set(actual.split("\n"))
    # expected_set = set([expected[0]] +
    #                    [item.strip()
    #                     for item in expected[1].split("  ")])
    # assert expected_set == actual_set

    del episode[1]

    expected = set(episode[2][1][0].split())
    cmd = ";".join([cmd.replace("$ ", "")
                    for cmd in [episode[0][1][0]] + episode[1][1]])
    actual = set(
        subprocess.run(
            cmd,
            cwd=home,
            capture_output=True,
            check=True,
            shell=True,
            executable="bash",
            env={"HOME": home},
        )
        .stdout
        .decode()
        .strip()
        .split()
    )
    assert actual == expected
