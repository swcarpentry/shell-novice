---
layout: page
title: The Unix Shell
subtitle: Backticks
minutes: 15
---
> ## Learning Objectives {.objectives}
>
> * Understand the need for flexibility regarding arguments
> * Generate the values of the arguments on the fly using command substitution
> * Understand the difference between pipes/redirection, and the backtick operator

## Introduction

In Loops topic we saw how to improve productivity by letting the computer do the repetitive work.
Often, this involves doing the same thing to a whole set of files, e.g.:

~~~{.bash}
$ cd data/pdb
$ mkdir sorted
$ for file in cyclo*.pdb; do
>     sort $file > sorted/sorted-$file
> done
~~~

In this example, the shell generates for us the list of things to loop
over, using the wildcard mechanism we saw in the *Pipes and Filters* topic. This results in the
`cyclo*.pdf` being replaced with `cyclobutane.pdb cyclohexanol.pdb
cyclopropane.pdb ethylcyclohexane.pdb` before the loop starts.

Another example is a so-called *parameter sweep*, where you run the same program a number of times
with different arguments. Here is a fictitional example:

~~~{.bash}
$ for cutoff in 0.001 0.01 0.05; do
>   run_classifier.sh --input ALL-data.txt --pvalue $cutoff --output results-$cutoff.txt
> done
~~~

In the second example, the things to loop over: `"0.001 0.01 0.05"` are spelled out by you.

## Looping over the words in a string {.callout}
>
> In the previous example you can make your code neater and self-documenting by putting the cutoff values
> in a separate string:
> ~~~
> $ cutoffs="0.001 0.01 0.05"
> $ for cutoff in $cutoffs; do
>   run_classifier.sh --input ALL-data.txt --pvalue $cutoff --output results-$cutoff.txt
> done
> ~~~
> This works because, just as with the filename wildcards, `$cutoffs` is replaced with `0.001 0.01 0.05` 
> before the loop starts. 

However, you don't always know in advance *what* you have to loop
over. It could well be that it is not a simple file name pattern (in
which case you can use wildcards), or that it is not a small, known set
of values (in which case you can write them out explicitly as was done
in the second example).  It would therefore be nice if you could loop
over filenames or over words contained in a file. Suppose that file
`cohort2010.txt` contains the filenames over which to iterate, then it
would be nice to able to say something like:

~~~
# (imaginary syntax)
$ for file in [INSERT THE CONTENTS OF cohort2010.txt HERE]
> do
>    run_classifier.sh --input $file --pvalue -0.05 --output $file.results
> done
~~~

## Command substitution

This would be more general, more flexible and more tractable than
relying on the wildcard mechanism. What we need, therefore, is a
mechanism that actually replaces everytying beween `[` and `]` with the
desired names of input files, just before the loop starts.  Thankfully,
this mechanism exists, and it is called the **backtick operator**, also
known as **command substitution**. It looks much like the previous snippet:

~~~ {.bash}
# (actual syntax)
$ for file in `cat cohort2010.txt`
> do
>    run_classifier.sh --input $file --pvalue -0.05 --output $file.results
> done
~~~

It works simply as follows: everything between the backticks is executed
as a Unix command, and the command's standard output replaces the
backticks, and everything between it, before the loop starts (for
convenience, newlines are also replaced with simple spaces).  *Note*: do
not confuse the backtick, `` ` ``, with the single quote `'`.

Recall from the *Pipes and Filters* topic that `cat` prints the contents
of its argument (a filename) to standard output. So, if the contents of
file `cohort2010.txt` look like

~~~
patient1033130.txt 
patient1048338.txt 
patient7448262.txt 
.
.
.
patient1820757.txt
~~~

then the construct

~~~
$ for file in `cat cohort2010.txt`
> do
>     ...
> done
~~~

will be expanded to 

~~~
$ for file in patient1033130.txt patient1048338.txt patient7448262.txt ... patient1820757.txt
> do
>     ...
> done
~~~

(notice the convenience of newlines being replaced with simple spaces here).

This example uses `` `cat somefilename` `` to supply arguments to the
`for variable in ... do ... done`-construct, but any output from any
command, or even pipeline, can also be used. For example, if
`cohort2010.txt` contains a few thousand patients but you just want to
try the first two for a test run, you can use the `head` command to just
get the first few lines of its argument, like so:

~~~ {.bash}
$ for file in `cat cohort2010.txt | head -n 2 `
> do
>     ...
> done
~~~

which will expand to

~~~ {.bash}
$ for file in patient1033130.txt patient1048338.txt
> do
>     ...
> done
~~~

simply because `cat cohort2010.txt | head -n 2` produces
`patient1033130.txt patient1048338.txt` after the command substitution.

Everything between the backticks is executed verbatim by the shell, so
also the `-n 2` argument to the `head` command works as expected.

### **Important**

Recall from the *Loops* and the *Shell Scripts* topics that Unix uses
whitespace to separate command, options (flags) and parameters /
arguments.  For the same reason it is essential that the command (or
pipeline) inside the backticks produces *clean* output: single word
output works best within single commands and whitespace- or
newline-separated words works best for lists over which to iterate in
loops.

> ## Generating filenames based on a timestamp {.challenge}
> 
> It can be useful to create the filename 'on the fly'. For instance, if
> some program called `qualitycontrol` is run periodically (or
> unpredictably) it may be necessary to supply the time stamp as an
> argument to keep all the output files apart, along the following lines:
> 
> ~~~
> qualitycontrol --inputdir /data/incoming/  --output qcresults-[INSERT TIMESTAMP HERE].txt
> ~~~
> 
> Getting `[INSERT TIMESTAMP HERE]` to work is a job for the backtick
> operator. The Unix command you need here is the `date` command, which provides you
> with the current date and time; try it. 
> 
> In the current form, its output is less useful for generating filenames
> because it contains whitespace (which, as we know from now, should
> preferably be avoided in filenames).  You can tweak `date`'s format in
> great detail, for instance to get rid of whitespace:
> 
> ~~~
> $ date +"%Y-%m-%d_%T"
> ~~~
> 
> (Try it!).
> 
> Write the command that will copy a file of your choice to a new file
> whose name contains the time stamp. Test it by executing the command a
> few times, waiting a few seconds between invocations (use the arrow-up
> key to avoid having to retype the command)
<!-- solution: cp file file.`date +"%Y-%m-%d_%T"` -->


## Command subsitution {.callout}
> Most users know and love the backtick operator in the form shown
> here, but recommended practice is to preferably use the newer, more
> general `$(command)` form, rather than the older `` `command` ``
> The advantage of the new syntax is that it can be nested.

## Juggling filename extensions {.challenge}

> When doing running an analysis program with a certain input file, it
> is often required that the output has the same name as the input, but with
> a different filename extension, e.g.
>
> ~~~
> $ run_classifier.sh --input patient1048338.txt --pvalue -0.05 --output patient1048338.results
> ~~~
>
> A good trick here is to use the Unix `basename` command. It takes a string (typically a filename),
> and strips off the given extension (if it is part of the input string). Example:
> ~~~ {.bash}
> $ basename patient1048338.txt    .txt
> ~~~
> gives
> ~~~ {.output}
> patient1048338
> ~~~
>
> Write a loop that uses the backtick operator and the `basename` command to sort each of the `*.pdb` files
> into a corresponding `*.sorted` file. That is, make the loop do the following:
> ~~~
> $ sort ammonia.pdb > ammonia.sorted
> ~~~
> but for *each* of the `.pdb`-files.
<!-- solution: for file in *.pdb; do sort $file > `basename $file .pdb`.sorted; done -->

## Closing remarks

The backtick (or command subsitution) operator provides us with a
powerful new piece of 'plumbing' that allows us to connect "small
pieces, loosely together" to keep with the Unix philosophy.  It is a
little bit similar to the `|` operator in the sense that it connects two
programs. But there is also a clear difference: `|` connects the
standard output of one command to the standard input of another command,
where as `` `command` `` is substituted 'in-place' into the the shell
script, and always provides parameters, options, arguments to other commands.
