---
layout: page
title: The Unix Shell
subtitle: Discussion
---
### Other Shells

Before Bash became popular in the end of nineties,
scientists widely used (and some still use) another shell, C-shell, or Csh.
Bash and Csh have similar feature sets,
but their syntax rules are different and this makes them incompatible with each other.
A few other shells have appeared since,
including ksh, zsh, and a number of others;
they are mostly compatible with Bash,
and Bash is the default shell on most modern implementations of Unix
(including most packages that provide Unix-like tools for Windows)
but if you get strange errors in shell scripts written by colleagues,
check to see which shell they were written for.

### Man Pages
At first, the syntax used in a man page can be confusing. Here are some quick tips to help you use a man page 
 effectively:
* [ and ] in the SYNOPSIS indicate optional parameters to the program. For example in in grep [FILE...] means > that passing files to the program is optional, in this case because grep can read from standard input (stdin)
* The | character means logical OR. For example, in the SYNOPSIS, [-e PATTERN | -f FILE] means that you may
optionally call grep with -e PATTERN or -f FILE
