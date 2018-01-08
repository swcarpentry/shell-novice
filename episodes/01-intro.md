---
title: "Introducing the Shell"
teaching: 5
exercises: 0
questions:
- "What is a command shell and why would I use one?"
objectives:
- "Explain how the shell relates to the keyboard, the screen, the operating system, and users' programs."
- "Explain when and why command-line interfaces should be used instead of graphical interfaces."
keypoints:
- "Explain the similarities and differences between a file and a directory."
- "Translate an absolute path into a relative path and vice versa."
- "Construct absolute and relative paths that identify specific files and directories."
- "Explain the steps in the shell's read-run-print cycle."
- "Identify the actual command, flags, and filenames in a command-line call."
- "Demonstrate the use of tab completion and explain its advantages."
keypoints:
- "A shell is a program whose primary purpose is to read commands and run other programs."
- "The shell's main advantages are its high action-to-keystroke ratio, its support for automating repetitive tasks, and its capacity to access networked machines."
- "The shell's main disadvantages are its primarily textual nature and how cryptic its commands and operation can be."
---
### Background
At a high level, computers do four things:

-   run programs
-   store data
-   communicate with each other, and
-   interact with us

They can do the last of these in many different ways,
including through a keyboard and mouse, or touch screen interfaces, or speech recognition using systems.
While such hardware interfaces are becoming more commonplace, most interaction is still
done using screens, mice, touchpads and keyboards.
Although most modern desktop operating systems communicate with their human users by
means of windows, icons and pointers, these software technologies didn't become
widespread until the 1980s. The roots of such *graphical user interfaces* go back
to Doug Engelbart's work in the 1960s, which you can see in what has been
called "[The Mother of All Demos](http://www.youtube.com/watch?v=a11JDLBXtPQ)".

### The Command-Line Interface
Going back even further,
the only way to interact with early computers was to rewire them.
But in between,
from the 1950s to the 1980s,
most people used line printers.
These devices only allowed input and output of the letters, numbers, and punctuation found on a standard keyboard,
so programming languages and software interfaces had to be designed around that constraint.

This kind of interface is called a
**command-line interface**, or CLI,
to distinguish it from a
**graphical user interface**, or GUI,
which most people now use.
The heart of a CLI is a **read-evaluate-print loop**, or REPL:
when the user types a command and then presses the Enter (or Return) key,
the computer reads it,
executes it,
and prints its output.
The user then types another command,
and so on until the user logs off.

### The Shell
This description makes it sound as though the user sends commands directly to the computer,
and the computer sends output directly to the user.
In fact,
there is usually a program in between called a
**command shell**.
What the user types goes into the shell,
which then figures out what commands to run and orders the computer to execute them.
(Note that the shell is called "the shell" because it encloses the operating system
in order to hide some of its complexity and make it simpler to interact with.)

A shell is a program like any other.
What's special about it is that its job is to run other programs
rather than to do calculations itself.
The most popular Unix shell is Bash,
the Bourne Again SHell
(so-called because it's derived from a shell written by Stephen Bourne).
Bash is the default shell on most modern implementations of Unix
and in most packages that provide Unix-like tools for Windows.

### Why bother?
Using Bash or any other shell
sometimes feels more like programming than like using a mouse.
Commands are terse (often only a couple of characters long),
their names are frequently cryptic,
and their output is lines of text rather than something visual like a graph.
On the other hand,
with only a few keystrokes, the shell allows us to combine existing tools into 
powerful pipelines and handle large volumes of data automatically. This automation
not only makes us more productive but also improves the reproducibility of our workflows by 
allowing us to repeat them with a few simple commands.
In addition, the command line is often the easiest way to interact with remote machines and supercomputers.
Familiarity with the shell is near essential to run a variety of specialized tools and resources
including high-performance computing systems.
As clusters and cloud computing systems become more popular for scientific data crunching,
being able to interact with the shell is becoming a necessary skill.
We can build on the command-line skills covered here
to tackle a wide range of scientific questions and computational challenges.

## Nelle's Pipeline: Starting Point

Nelle Nemo, a marine biologist,
has just returned from a six-month survey of the
[North Pacific Gyre](http://en.wikipedia.org/wiki/North_Pacific_Gyre),
where she has been sampling gelatinous marine life in the
[Great Pacific Garbage Patch](http://en.wikipedia.org/wiki/Great_Pacific_Garbage_Patch).
She has 1520 samples in all and now needs to:

1.  Run each sample through an assay machine
    that will measure the relative abundance of 300 different proteins.
    The machine's output for a single sample is
    a file with one line for each protein.
2.  Calculate statistics for each of the proteins separately
    using a program her supervisor wrote called `goostats`.
3.  Write up results.
    Her supervisor would really like her to do this by the end of the month
    so that her paper can appear in an upcoming special issue of *Aquatic Goo Letters*.

It takes about half an hour for the assay machine to process each sample.
The good news is that
it only takes two minutes to set each one up.
Since her lab has eight assay machines that she can use in parallel,
this step will "only" take about two weeks.

The bad news is that if she has to run `goostats` by hand,
she'll have to enter filenames and click "OK" 1520 times.
At 30 seconds per sample,
the whole process will take more than 12 hours
(and that's assuming the best-case scenario where she is ready to enter the next file name
as soon as the previous sample analysis has finished).
This zero-breaks always-ready scenario is only achieveable by a machine so it would
likely take much longer than 12 hours, not to mention that
the chances of her typing all of those commands correctly are practically zero.
Missing that paper deadline is looking increasingly likely.

The next few lessons will explore what she should do instead.
More specifically,
they explain how she can use a command shell
to automate the repetitive steps in her processing pipeline
so that her computer can work 24 hours a day while she writes her paper.
As a bonus,
once she has put a processing pipeline together,
she will be able to use it again whenever she collects more data.

