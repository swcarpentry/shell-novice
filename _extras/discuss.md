---
layout: page
title: "Discussion"
permalink: /discuss/
---
## Alphabet Soup

If the command to find out who we are is `whoami`, the command to find
out where we are ought to be called `whereami`, so why is it `pwd`
instead? The usual answer is that in the early 1970s, when Unix was
first being developed, every keystroke counted: the devices of the day
were slow, and backspacing on a teletype was so painful that cutting the
number of keystrokes in order to cut the number of typing mistakes was
actually a win for usability. The reality is that commands were added to
Unix one by one, without any master plan, by people who were immersed in
its jargon. The result is as inconsistent as the roolz uv Inglish
speling, but we're stuck with it now.

## Job Control Codes

The shell accepts a few special commands that allow users to interact
with running processes or programs. You can enter each of these
"control codes" by holding down the `Ctrl` key and then pressing one
of the control characters. In other tutorials, you may see the term
`Control` or the `^` used to represent the `Ctrl` key (e.g. the
following are all equivalent `Ctrl-C`, `Ctrl+C`, `Control-C`, `Control+C`, `^C`).

*   `Ctrl-C`:
    interrupts and cancels a running program.
    This is useful if you want to cancel a command that is taking too long to execute.

*   `Ctrl-D`:
    indicates the end of a file or stream of characters that you are entering on the command line.
    For example, we saw earlier that the `wc` command counts lines, words, and characters in a file.
    If we just type `wc` and hit the Enter key without providing a file name,
    then `wc` will assume we want it to analyze all the stuff we type next.
    After typing our magnum opus directly into the shell prompt,
    we can then type Ctrl-D to tell `wc` that we're done and we'd like to see the results of the word count.

*   `Ctrl-Z`:
    Suspends a process but does not terminate it.
    You can then use the command `fg` to restart the job in the foreground.

For new shell users, these control codes can all appear to have
the same effect: they make things "go away." But it is helpful to
understand the differences. In general, if something went wrong and
you just want to get your shell prompt back, it is better to use
`Ctrl-C`.

## Other Shells

Before Bash became popular in the end of nineties, scientists widely
used (and some still use) another shell, C-shell, or Csh. Bash and Csh
have similar feature sets, but their syntax rules are different and
this makes them incompatible with each other. A few other shells have
appeared since, including ksh, zsh, and a number of others; they are
mostly compatible with Bash, and Bash is the default shell on most
modern implementations of Unix (including most packages that provide
Unix-like tools for Windows) but if you get strange errors in shell
scripts written by colleagues, check to see which shell they were
written for.

## Bash Configurations

Want to customize paths, environment variables, aliases,
and other behaviors of your shell?
This excellent blog post "[Bash Configurations Demystified][bash-demystified]"
from Dalton Hubble
covers tips, tricks, and how to avoid dangers.

[bash-demystified]: https://blog.dghubble.io/post/.bashprofile-.profile-and-.bashrc-conventions/
