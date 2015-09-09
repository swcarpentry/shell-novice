---
layout: page
title: The Unix Shell
subtitle: Pipes and Filters
minutes: 15
---
> ## Learning Objectives {.objectives}
>
> *   Redirect a command's output to a file.
> *   Process a file instead of keyboard input using redirection.
> *   Construct command pipelines with two or more stages.
> *   Explain what usually happens if a program or pipeline isn't given any input to process.
> *   Explain Unix's "small pieces, loosely joined" philosophy.

Now that we know a few basic commands,
we can finally look at the shell's most powerful feature:
the ease with which it lets us combine existing programs in new ways.
We'll start with a directory called `molecules`
so lets go into that directory and take a look at that directory:

~~~ {.bash}
$ cd molecules
~~~
~~~ {.bash}
$ ls *.pdb
~~~
~~~ {.output}
aldrin.pdb
ammonia.pdb
ascorbic-acid.pdb
benzaldehyde.pdb
camphene.pdb
cholesterol.pdb
cinnamaldehyde.pdb
citronellal.pdb
codeine.pdb
cubane.pdb
cyclobutane.pdb
cyclohexanol.pdb
cyclopropane.pdb
ethane.pdb
ethanol.pdb
ethylcyclohexane.pdb
glycol.pdb
heme.pdb
lactic-acid.pdb
lactose.pdb
lanoxin.pdb
lsd.pdb
maltose.pdb
menthol.pdb
methane.pdb
methanol.pdb
mint.pdb
morphine.pdb
mustard.pdb
nerol.pdb
norethindrone.pdb
octane.pdb
pentane.pdb
piperine.pdb
propane.pdb
pyridoxal.pdb
quinine.pdb
strychnine.pdb
styrene.pdb
sucrose.pdb
testosterone.pdb
thiamine.pdb
tnt.pdb
tuberin.pdb
tyrian-purple.pdb
vanillin.pdb
vinyl-chloride.pdb
vitamin-a.pdb
~~~

> ## `.pdb` Extension {.callout}
>
> The `.pdb` extension indicates that these files are in Protein Data Bank format,
> a simple text format that specifies **at each line** the type and position of **one** atom in the molecule.

The first question that we can ask is
"how many files are inside the `molecules` directory?".
If we could (1) write the output of `ls` into a file
and (2) count the number of lines of that file
we will have our answer.
We are very luck and we can do (1) and (2) with the shell.
For (1) we will use

~~~ {.bash}
$ ls *.pdb > content-of-molecules
~~~

The greater than symbol, `>`, tells the shell to **redirect** the command's output
to a file, in this case `content-of-molecules` instead of printing it to the screen.
The shell will create the file if it doesn't exist,
or overwrite the contents of that file if it does.
(This is why there is no screen output:
everything that `ls` would have printed has gone into the file
`content-of-molecules` instead.)

> ## Redirecting Input {.callout}
>
> As well as using `>` to redirect a program's output, we can use `<` to
> redirect its input, i.e., to read from a file instead of from standard
> input. For example, instead of writing `wc ammonia.pdb`, we could write
> `wc < ammonia.pdb`. In the first case, `wc` gets a command line
> parameter telling it what file to open. In the second, `wc` doesn't have
> any command line parameters, so it reads from standard input, but we
> have told the shell to send the contents of `ammonia.pdb` to `wc`'s
> standard input.

For (2) we will use `wc`
that is the "word count" command:
it counts the number of lines, words, and characters in files.
So,

~~~ {.bash}
$ wc content-of-molecules
~~~
~~~ {.output}
     48      48     645
~~~

And to get only the number of files inside `molecules`
we can run

~~~ {.bash}
$ wc -l content-of-molecules
~~~
~~~ {.output}
48
~~~

Writing something like

~~~ {.bash}
$ ls *.pdb > content-of-molecules
~~~
~~~ {.bash}
$ wc -l content-of-molecules
~~~
~~~ {.output}
48
~~~

each time that you want to know the number of files inside a directory
will be tedious.
If we could drop the file our life will be more easy.
Again,
we are luck and the shell allow us to pass the output of one command
directly as the input of another command
using what is know as pipe, `|`.
We can reword, now using pipe, the previous action as

~~~ {.bash}
$ ls *.pdb | wc -l
~~~
~~~ {.output}
48
~~~

> ## Process {.callout}
>
> Here's what actually happens behind the scenes when we create a pipe.
> When a computer runs a program --- any program --- it creates a **process**
> in memory to hold the program's software and its current state.
> Every process has an input channel called **standard input**.
> (By this point, you may be surprised that the name is so memorable, but don't worry:
> most Unix programmers call it "stdin".
> Every process also has a default output channel called **standard output**
> (or "stdout").
> 
> The shell is actually just another program.
> Under normal circumstances,
> whatever we type on the keyboard is sent to the shell on its standard input,
> and whatever it produces on standard output is displayed on our screen.
> When we tell the shell to run a program,
> it creates a new process
> and temporarily sends whatever we type on our keyboard to that process's standard input,
> and whatever the process sends to standard output to the screen.
>
> Here's what happens when we run `ls *.pdb > content-of-molecules`.
> The shell starts by telling the computer to create a new process to run the `ls` program.
> `ls` reads from standard input, there is nothing to read.
> And since we've used `>` to redirect output to a file,
> the shell connects the process's standard output to that file.
>
> If we run `ls *.pdb | wc -l` instead,
> the shell creates two processes
> (one for each process in the pipe)
> so that `ls` and `wc` run simultaneously.
> The standard output of `ls` is fed directly to the standard input of `wc`;
> since there's no redirection with `>`,
> `wc`'s output goes to the screen.
>
> ![Redirects and Pipes](fig/redirects-and-pipes.png)
>
> This simple idea is why Unix has been so successful.
> Instead of creating enormous programs that try to do many different things,
> Unix programmers focus on creating lots of simple tools that each do one job well,
> and that work well with each other.
> This programming model is called "pipes and filters".
> We've already seen pipes;
> a **filter** is a program like `wc`
> that transforms a stream of input into a stream of output.
> Almost all of the standard Unix tools can work this way:
> unless told to do otherwise,
> they read from standard input,
> do something with what they've read,
> and write to standard output.
>
> The key is that any program that reads lines of text from standard input
> and writes lines of text to standard output
> can be combined with every other program that behaves this way as well.
> You can *and should* write your programs this way
> so that you and other people can put those programs into pipes to multiply their power.

A second question that we can ask is
"how many files inside the `molecules` directory are alcohols?".
If you remember a little of chemistry,
the name of alcohols ended with "nol".
Let's run the command `ls *nol.pdb`:

~~~ {.bash}
$ ls *nol.pdb
~~~
~~~ {.output}
cyclohexanol.pdb
ethanol.pdb
methanol.pdb
~~~

The `*` in `*nol.pdb` matches zero or more characters,
so the shell turns `*nol.pdb` into a complete list
of files that end with `nol.pdf`

> ## Wildcards {.callout}
> 
> `*` is a **wildcard**. It matches zero or more
> characters, so `*.pdb` matches `ethane.pdb`, `propane.pdb`, and every
> file that ends with '.pdb'. On the other hand, `p*.pdb` only matches 
> `pentane.pdb` and `propane.pdb`, because the 'p' at the front only 
> matches filenames that begin with the letter 'p'.
> 
> `?` is also a wildcard, but it only matches a single character. This
> means that `p?.pdb` matches `pi.pdb` or `p5.pdb`, but not `propane.pdb`.
> We can use any number of wildcards at a time: for example, `p*.p?*`
> matches anything that starts with a 'p' and ends with '.', 'p', and at
> least one more character (since the '?' has to match one character, and
> the final '\*' can match any number of characters). Thus, `p*.p?*` would
> match `preferred.practice`, and even `p.pi` (since the first '\*' can
> match no characters at all), but not `quality.practice` (doesn't start
> with 'p') or `preferred.p` (there isn't at least one character after the
> '.p').
> 
> When the shell sees a wildcard, it expands the wildcard to create a
> list of matching filenames *before* running the command that was
> asked for. As an exception, if a wildcard expression does not match
> any file, Bash will pass the expression as a parameter to the command
> as it is. For example typing `ls *.pdf` in the molecules directory
> (which contains only files with names ending with `.pdb`) results in
> an error message that there is no file called `*.pdf`.
> However, generally commands like `wc` and `ls` see the lists of
> file names matching these expressions, but not the wildcards
> themselves. It is the shell, not the other programs, that deals with
> expanding wildcards, and this is another example of orthogonal design.

Another question that we can ask is
"What is the smalest molecule inside `molecules`?".
Since at `.pdf` files we have one line for each atom
we can answer the question by
(1) getting the number of lines of each file and
(2) sorting the result.
We already learned how to archive (1),
we can use `wc -l *.pdb`.

~~~ {.bash}
$ wc -l *.pdb
~~~
~~~ {.output}
   30 aldrin.pdb
    7 ammonia.pdb
   24 ascorbic-acid.pdb
   18 benzaldehyde.pdb
   30 camphene.pdb
   78 cholesterol.pdb
   22 cinnamaldehyde.pdb
   33 citronellal.pdb
   47 codeine.pdb
   20 cubane.pdb
   16 cyclobutane.pdb
   23 cyclohexanol.pdb
   13 cyclopropane.pdb
   12 ethane.pdb
   13 ethanol.pdb
   54 ethylcyclohexane.pdb
   14 glycol.pdb
   79 heme.pdb
   15 lactic-acid.pdb
   49 lactose.pdb
  248 lanoxin.pdb
   53 lsd.pdb
   49 maltose.pdb
   35 menthol.pdb
    9 methane.pdb
   10 methanol.pdb
   36 mint.pdb
   44 morphine.pdb
   41 mustard.pdb
   33 nerol.pdb
   51 norethindrone.pdb
   30 octane.pdb
   21 pentane.pdb
   43 piperine.pdb
   15 propane.pdb
   25 pyridoxal.pdb
   52 quinine.pdb
   51 strychnine.pdb
   20 styrene.pdb
   49 sucrose.pdb
   53 testosterone.pdb
   42 thiamine.pdb
   25 tnt.pdb
   54 tuberin.pdb
   34 tyrian-purple.pdb
   23 vanillin.pdb
   10 vinyl-chloride.pdb
   55 vitamin-a.pdb
 1808 total
~~~

Today is our luck day
and the shell has a command called `sort` that sort the lines of one file.
Using the pipe we have

~~~ {.bash}
$ wc -l *.pdb | sort
~~~
~~~ {.output}
   10 methanol.pdb
   10 vinyl-chloride.pdb
   12 ethane.pdb
   13 cyclopropane.pdb
   13 ethanol.pdb
   14 glycol.pdb
   15 lactic-acid.pdb
   15 propane.pdb
   16 cyclobutane.pdb
 1808 total
   18 benzaldehyde.pdb
   20 cubane.pdb
   20 styrene.pdb
   21 pentane.pdb
   22 cinnamaldehyde.pdb
   23 cyclohexanol.pdb
   23 vanillin.pdb
  248 lanoxin.pdb
   24 ascorbic-acid.pdb
   25 pyridoxal.pdb
   25 tnt.pdb
   30 aldrin.pdb
   30 camphene.pdb
   30 octane.pdb
   33 citronellal.pdb
   33 nerol.pdb
   34 tyrian-purple.pdb
   35 menthol.pdb
   36 mint.pdb
   41 mustard.pdb
   42 thiamine.pdb
   43 piperine.pdb
   44 morphine.pdb
   47 codeine.pdb
   49 lactose.pdb
   49 maltose.pdb
   49 sucrose.pdb
   51 norethindrone.pdb
   51 strychnine.pdb
   52 quinine.pdb
   53 lsd.pdb
   53 testosterone.pdb
   54 ethylcyclohexane.pdb
   54 tuberin.pdb
   55 vitamin-a.pdb
   78 cholesterol.pdb
   79 heme.pdb
    7 ammonia.pdb
    9 methane.pdb
~~~

Ops. Something went catastrophic wrong.
By default, `sort` doesn't now that `1` is the first number,
`2` is number after `1`, ..., `10` is the number after `9`
and so on.
We can request that `sort` interpret `1` as the first number,
`2` as the number after `1`, ...
by using the `-n` flag.

~~~ {.bash}
$ wc -l *.pdb | sort
~~~
~~~ {.output}
    7 ammonia.pdb
    9 methane.pdb
   10 methanol.pdb
   10 vinyl-chloride.pdb
   12 ethane.pdb
   13 cyclopropane.pdb
   13 ethanol.pdb
   14 glycol.pdb
   15 lactic-acid.pdb
   15 propane.pdb
   16 cyclobutane.pdb
   18 benzaldehyde.pdb
   20 cubane.pdb
   20 styrene.pdb
   21 pentane.pdb
   22 cinnamaldehyde.pdb
   23 cyclohexanol.pdb
   23 vanillin.pdb
   24 ascorbic-acid.pdb
   25 pyridoxal.pdb
   25 tnt.pdb
   30 aldrin.pdb
   30 camphene.pdb
   30 octane.pdb
   33 citronellal.pdb
   33 nerol.pdb
   34 tyrian-purple.pdb
   35 menthol.pdb
   36 mint.pdb
   41 mustard.pdb
   42 thiamine.pdb
   43 piperine.pdb
   44 morphine.pdb
   47 codeine.pdb
   49 lactose.pdb
   49 maltose.pdb
   49 sucrose.pdb
   51 norethindrone.pdb
   51 strychnine.pdb
   52 quinine.pdb
   53 lsd.pdb
   53 testosterone.pdb
   54 ethylcyclohexane.pdb
   54 tuberin.pdb
   55 vitamin-a.pdb
   78 cholesterol.pdb
   79 heme.pdb
  248 lanoxin.pdb
 1808 total
~~~

And the answer for our last question is amonia.

> ## Only the First Line {.callout}
>
> If you only want the begin of one file
> you can use the command `head`.
> To get only the first line you must use `head -1`.
>
> ~~~ {.bash}
> $ wc -l *.pdb | sort | head -1
> ~~~
> ~~~ {.output}
>     7 ammonia.pdb
> ~~~
>
> There is a command called `tail`
> if you want the last lines.



## Nelle's Pipeline: Checking Files

Nelle has run her samples through the assay machines
and created 1520 files in the `north-pacific-gyre/2012-07-03` directory described earlier.
As a quick sanity check, starting from her home directory, Nelle types:

~~~ {.bash}
$ cd north-pacific-gyre/2012-07-03
$ wc -l *.txt
~~~

The output is 1520 lines that look like this:

~~~ {.output}
300 NENE01729A.txt
300 NENE01729B.txt
300 NENE01736A.txt
300 NENE01751A.txt
300 NENE01751B.txt
300 NENE01812A.txt
... ...
~~~

Now she types this:

~~~ {.bash}
$ wc -l *.txt | sort -n | head -5
~~~
~~~ {.output}
 240 NENE02018B.txt
 300 NENE01729A.txt
 300 NENE01729B.txt
 300 NENE01736A.txt
 300 NENE01751A.txt
~~~

Whoops: one of the files is 60 lines shorter than the others.
When she goes back and checks it,
she sees that she did that assay at 8:00 on a Monday morning --- someone
was probably in using the machine on the weekend,
and she forgot to reset it.
Before re-running that sample,
she checks to see if any files have too much data:

~~~ {.bash}
$ wc -l *.txt | sort -n | tail -5
~~~
~~~ {.output}
 300 NENE02040A.txt
 300 NENE02040B.txt
 300 NENE02040Z.txt
 300 NENE02043A.txt
 300 NENE02043B.txt
~~~

Those numbers look good --- but what's that 'Z' doing there in the third-to-last line?
All of her samples should be marked 'A' or 'B';
by convention,
her lab uses 'Z' to indicate samples with missing information.
To find others like it, she does this:

~~~ {.bash}
$ ls *Z.txt
~~~
~~~ {.output}
NENE01971Z.txt    NENE02040Z.txt
~~~

Sure enough,
when she checks the log on her laptop,
there's no depth recorded for either of those samples.
Since it's too late to get the information any other way,
she must exclude those two files from her analysis.
She could just delete them using `rm`,
but there are actually some analyses she might do later where depth doesn't matter,
so instead, she'll just be careful later on to select files using the wildcard expression `*[AB].txt`.
As always,
the '\*' matches any number of characters;
the expression `[AB]` matches either an 'A' or a 'B',
so this matches all the valid data files she has.

> ## What does `sort -n` do? {.challenge}
>
> If we run `sort` on this file:
> 
> ~~~
> 10
> 2
> 19
> 22
> 6
> ~~~
> 
> the output is:
> 
> ~~~
> 10
> 19
> 2
> 22
> 6
> ~~~
> 
> If we run `sort -n` on the same input, we get this instead:
> 
> ~~~
> 2
> 6
> 10
> 19
> 22
> ~~~
> 
> Explain why `-n` has this effect.

> ## What does `<` mean? {.challenge}
>
> What is the difference between:
> 
> ~~~
> wc -l < mydata.dat
> ~~~
> 
> and:
> 
> ~~~
> wc -l mydata.dat
> ~~~

> ## What does `>>` mean? {.challenge}
>
> What is the difference between:
>
> ~~~
> echo hello > testfile01.txt
> ~~~
>
> and:
>
> ~~~
> echo hello >> testfile02.txt
> ~~~
>
> Hint: Try executing each command twice in a row and then examining the output files.

> ## Piping commands together {.challenge}
>
> In our current directory, we want to find the 3 files which have the least number of 
> lines. Which command listed below would work?
>
> 1. `wc -l * > sort -n > head -3`
> 2. `wc -l * | sort -n | head 1-3`
> 3. `wc -l * | head -3 | sort -n`
> 4. `wc -l * | sort -n | head -3`

> ## Why does `uniq` only remove adjacent duplicates? {.challenge}
>
> The command `uniq` removes adjacent duplicated lines from its input.
> For example, if a file `salmon.txt` contains:
> 
> ~~~
> coho
> coho
> steelhead
> coho
> steelhead
> steelhead
> ~~~
> 
> then `uniq salmon.txt` produces:
> 
> ~~~
> coho
> steelhead
> coho
> steelhead
> ~~~
> 
> Why do you think `uniq` only removes *adjacent* duplicated lines?
> (Hint: think about very large data sets.) What other command could
> you combine with it in a pipe to remove all duplicated lines?

> ## Pipe reading comprehension {.challenge}
>
> A file called `animals.txt` contains the following data:
> 
> ~~~
> 2012-11-05,deer
> 2012-11-05,rabbit
> 2012-11-05,raccoon
> 2012-11-06,rabbit
> 2012-11-06,deer
> 2012-11-06,fox
> 2012-11-07,rabbit
> 2012-11-07,bear
> ~~~
> 
> What text passes through each of the pipes and the final redirect in the pipeline below?
> 
> ~~~
> cat animals.txt | head -5 | tail -3 | sort -r > final.txt
> ~~~

> ## Pipe construction {.challenge}
>
> The command:
> 
> ~~~
> $ cut -d , -f 2 animals.txt
> ~~~
> 
> produces the following output:
> 
> ~~~
> deer
> rabbit
> raccoon
> rabbit
> deer
> fox
> rabbit
> bear
> ~~~
> 
> What other command(s) could be added to this in a pipeline to find
> out what animals the file contains (without any duplicates in their
> names)?
