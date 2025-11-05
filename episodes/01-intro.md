---
title: Introducing the Shell
teaching: 5
exercises: 0
---

::::::::::::::::::::::::::::::::::::::: objectives

- Explain how the shell relates to the keyboard, the screen, the operating system, and users' programs.
- Explain when and why command-line interfaces should be used instead of graphical interfaces.

::::::::::::::::::::::::::::::::::::::::::::::::::

:::::::::::::::::::::::::::::::::::::::: questions

- What is a command shell and why would I use one?

::::::::::::::::::::::::::::::::::::::::::::::::::

### What is the Shell?

Humans and computers commonly interact in many different ways, such as through a keyboard and mouse,
touch screen interfaces, or using speech recognition systems.
The most widely used way to interact with personal computers is called a
**graphical user interface** (GUI).
With a GUI, we give instructions by clicking a mouse and using menu-driven interactions.

While the visual aid of a GUI makes it intuitive to learn,
this way of interacting scales very poorly for some tasks.

A **command-line interface** (CLI) allows users to to interact with computer by reading and writing text. It excels at making repetitive tasks automatic and fast.

A **shell** is a particular program that lets you type commands.
In this workshop, we will be using "Bash" which is the most popular Unix shell.
Bash is often the default shell on Unix and in Unix-like tools for Windows.

### Why use the shell?

Imagine the following task:
for a literature search, you have to copy the third line of one thousand text files in one thousand
different directories and paste it into a single file.

Using a GUI, you would not only be clicking at your desk for several hours,
but you could potentially also commit an error in the process of completing this repetitive task.

Using a CLI, you can write a series of commands that does this consistently and nearly instantly.

The shell can be used for simple tasks like creating an empty folder
and for launching (even complex) programs with a single command.
In fact, some specialized tools and resources
such as high-performance computing systems
virtually require users to be familliar with the shell.
Shell commands can be combined together and saved into reddproducible *scripts*
that handle large volumes of data automatically.

Using the shell will take some effort and some time to learn.
While a GUI presents you with choices to select, CLI choices are not automatically presented to you. It can be daunting at first, but once you've come familliar with this different style
of iteracting, you will be able to find and use the information you need to accomplish
a huge variety of tasks.

### Let's get started.

When the shell is first opened, you are presented with a **prompt**,
indicating that the shell is waiting for input.

```bash
$
```

The shell typically uses `$ ` as the prompt, but may use a different symbol.
In the examples for this lesson, we'll show the prompt as `$ `.
Most importantly, *do not type the prompt* when typing commands.
Only type the command that follows the prompt.
This rule applies both in these lessons and in lessons from other sources.
Also note that after you type a command, you have to press the <kbd>Enter</kbd> key to execute it.

The prompt is followed by a **text cursor**, a character that indicates the position where your
typing will appear.
The cursor is usually a flashing or solid block, but it can also be an underscore or a pipe.
You may have seen it in a text editor program, for example.

Note that your prompt might look a little different. In particular, most popular shell
environments by default put your user name and the host name before the `$`. Such
a prompt might look like, e.g.:

```bash
nelle@localhost $
```

The prompt might even include more than this. Do not worry if your prompt is not
just a short `$ `. This lesson does not depend on this additional information and it
should also not get in your way. The only important item to focus on is the `$ `
character itself and we will see later why.

So let's try our first command, `ls`, which is short for listing.
This command will list the contents of the current directory:

```bash
$ ls
```

```output
Desktop     Downloads   Movies      Pictures
Documents   Library     Music       Public
```

:::::::::::::::::::::::::::::::::::::::::  callout

## Command not found

If the shell can't find a program whose name is the command you typed, it
will print an error message such as:

```bash
$ ks
```

```output
ks: command not found
```

This might happen if the command was mis-typed or if the program corresponding to that command
is not installed.


::::::::::::::::::::::::::::::::::::::::::::::::::

## Nelle's Pipeline: A Typical Problem

Nelle Nemo, a marine biologist,
has just returned from a six-month survey of the
[North Pacific Gyre](https://en.wikipedia.org/wiki/North_Pacific_Gyre),
where she has been sampling gelatinous marine life in the
[Great Pacific Garbage Patch](https://en.wikipedia.org/wiki/Great_Pacific_Garbage_Patch).
She has 1520 samples that she's run through an assay machine to measure the relative abundance
of 300 proteins.
She needs to run these 1520 files through an imaginary program called `goostats.sh`.
In addition to this huge task, she has to write up results by the end of the month, so her paper
can appear in a special issue of *Aquatic Goo Letters*.

If Nelle chooses to run `goostats.sh` by hand using a GUI,
she'll have to select and open a file 1520 times.
If `goostats.sh` takes 30 seconds to run each file, the whole process will take more than 12 hours
of Nelle's attention.
With the shell, Nelle can instead assign her computer this mundane task while she focuses
her attention on writing her paper.

The next few lessons will explore the ways Nelle can achieve this.
More specifically,
the lessons explain how she can use a command shell to run the `goostats.sh` program,
using loops to automate the repetitive steps of entering file names,
so that her computer can work while she writes her paper.

As a bonus,
once she has put a processing pipeline together,
she will be able to use it again whenever she collects more data.

In order to achieve her task, Nelle needs to know how to:

- navigate to a file/directory
- create a file/directory
- check the length of a file
- chain commands together
- retrieve a set of files
- iterate over files
- run a shell script containing her pipeline



:::::::::::::::::::::::::::::::::::::::: keypoints

- A shell is a program whose primary purpose is to read commands and run other programs.
- This lesson uses Bash, the default shell in many implementations of Unix.
- Programs can be run in Bash by entering commands at the command-line prompt.
- The shell's main advantages are its high action-to-keystroke ratio, its support for automating repetitive tasks, and its capacity to access networked machines.
- A significant challenge when using the shell can be knowing what commands need to be run and how to run them.

::::::::::::::::::::::::::::::::::::::::::::::::::


