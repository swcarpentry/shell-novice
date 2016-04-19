---
layout: page
title: The Unix Shell
subtitle: Loops
minutes: 15
---
> ## Learning Objectives {.objectives}
>
> *   Write a loop that applies one or more commands separately to each file in a set of files.
> *   Trace the values taken on by a loop variable during execution of the loop.
> *   Explain the difference between a variable's name and its value.
> *   Explain why spaces and some punctuation characters shouldn't be used in file names.
> *   Demonstrate how to see what commands have recently been executed.
> *   Re-run recently executed commands without retyping them.

**Loops** are key to productivity improvements through automation as they allow us to execute 
commands repetitively. Similar to wildcards and tab completion, using loops also reduces the 
amount of typing (and typing mistakes).
Suppose we have several hundred genome data files named `basilisk.dat`, `unicorn.dat`, and so on.
In this example,
we'll use the `creatures` directory which only has two example files,
but the principles can be applied to many many more files at once.
We would like to modify these files, but also save a version of the original files, naming the copies
`original-basilisk.dat` and `original-unicorn.dat`.
We can't use:

~~~ {.bash}
$ cp *.dat original-*.dat
~~~

because that would expand to:

~~~ {.bash}
$ cp basilisk.dat unicorn.dat original-*.dat
~~~

This wouldn't back up our files, instead we get an error:

~~~ {.error}
cp: target `original-*.dat' is not a directory
~~~

This problem arises when `cp` receives more than two inputs. When this happens, it
expects the last input to be a directory where it can copy all the files it was passed.
Since there is no directory named `original-*.dat` in the `creatures` directory we get an
error.

Instead, we can use a **loop**
to do some operation once for each thing in a list.
Here's a simple example that displays the first three lines of each file in turn:

~~~ {.bash}
$ for filename in basilisk.dat unicorn.dat
> do
>    head -n 3 $filename
> done
~~~
~~~ {.output}
COMMON NAME: basilisk
CLASSIFICATION: basiliscus vulgaris
UPDATED: 1745-05-02
COMMON NAME: unicorn
CLASSIFICATION: equus monoceros
UPDATED: 1738-11-24
~~~

When the shell sees the keyword `for`,
it knows it is supposed to repeat a command (or group of commands) once for each thing in a list.
In this case, the list is the two filenames.
Each time through the loop,
the name of the thing currently being operated on is assigned to
the **variable** called `filename`.
Inside the loop,
we get the variable's value by putting `$` in front of it:
`$filename` is `basilisk.dat` the first time through the loop,
`unicorn.dat` the second,
and so on.

By using the dollar sign we are telling the shell interpreter to treat
`filename` as a variable name and substitute its value on its place,
but not as some text or external command. When using variables it is also 
possible to put the names into curly braces to clearly delimit the variable
name: `$filename` is equivalent to `${filename}`, but is different from
`${file}name`. You may find this notation in other people's programs.

Finally,
the command that's actually being run is our old friend `head`,
so this loop prints out the first three lines of each data file in turn.

> ## Follow the Prompt {.callout}
>
> The shell prompt changes from `$` to `>` and back again as we were
> typing in our loop. The second prompt, `>`, is different to remind
> us that we haven't finished typing a complete command yet. A semicolon, `;`, 
> can be used to separate two commands written on a single line.

> ## Same symbols, different meanings {.callout}
>
> Here we see `>` being used a shell prompt, whereas `>` is also
> used to redirect output.
> Similarly, `$` is used as a shell prompt, but, as we saw earler,
> it is also used to ask the shell to get the value of a variable.
>
> If the *shell* prints `>` or `$` then it expects you to type something,
> and the symbol is a prompt.
>
> If *you* type `>` or `$` yourself, it is an instruction from you that
> the shell to redirect output or get the value of a variable.

We have called the variable in this loop `filename`
in order to make its purpose clearer to human readers.
The shell itself doesn't care what the variable is called;
if we wrote this loop as:

~~~ {.bash}
for x in basilisk.dat unicorn.dat
do
    head -n 3 $x
done
~~~

or:

~~~ {.bash}
for temperature in basilisk.dat unicorn.dat
do
    head -n 3 $temperature
done
~~~

it would work exactly the same way.
*Don't do this.*
Programs are only useful if people can understand them,
so meaningless names (like `x`) or misleading names (like `temperature`)
increase the odds that the program won't do what its readers think it does.

Here's a slightly more complicated loop:

~~~ {.bash}
for filename in *.dat
do
    echo $filename
    head -n 100 $filename | tail -n 20
done
~~~

The shell starts by expanding `*.dat` to create the list of files it will process.
The **loop body**
then executes two commands for each of those files.
The first, `echo`, just prints its command-line parameters to standard output.
For example:

~~~ {.bash}
$ echo hello there
~~~

prints:

~~~ {.output}
hello there
~~~

In this case,
since the shell expands `$filename` to be the name of a file,
`echo $filename` just prints the name of the file.
Note that we can't write this as:

~~~ {.bash}
for filename in *.dat
do
    $filename
    head -n 100 $filename | tail -n 20
done
~~~

because then the first time through the loop,
when `$filename` expanded to `basilisk.dat`, the shell would try to run `basilisk.dat` as a program.
Finally,
the `head` and `tail` combination selects lines 81-100 from whatever file is being processed.

> ## Spaces in Names {.callout}
> 
> Filename expansion in loops is another reason you should not use spaces in filenames.
> Suppose our data files are named:
> 
> ~~~
> basilisk.dat
> red dragon.dat
> unicorn.dat
> ~~~
> 
> If we try to process them using:
> 
> ~~~
> for filename in *.dat
> do
>     head -n 100 $filename | tail -n 20
> done
> ~~~
> 
> then the shell will expand `*.dat` to create:
> 
> ~~~
> basilisk.dat red dragon.dat unicorn.dat
> ~~~
> 
> With older versions of Bash,
> or most other shells,
> `filename` will then be assigned the following values in turn:
> 
> ~~~
> basilisk.dat
> red
> dragon.dat
> unicorn.dat
> ~~~
>
> That's a problem: `head` can't read files called `red` and `dragon.dat`
> because they don't exist,
> and won't be asked to read the file `red dragon.dat`.
> 
> We can make our script a little bit more robust
> by **quoting** our use of the variable:
> 
> ~~~
> for filename in *.dat
> do
>     head -n 100 "$filename" | tail -n 20
> done
> ~~~
>
> but it's simpler just to avoid using spaces (or other special characters) in filenames.

Going back to our original file copying problem,
we can solve it using this loop:

~~~ {.bash}
for filename in *.dat
do
    cp $filename original-$filename
done
~~~

This loop runs the `cp` command once for each filename.
The first time,
when `$filename` expands to `basilisk.dat`,
the shell executes:

~~~ {.bash}
cp basilisk.dat original-basilisk.dat
~~~

The second time, the command is:

~~~ {.bash}
cp unicorn.dat original-unicorn.dat
~~~

> ## Measure Twice, Run Once {.callout}
> 
> A loop is a way to do many things at once --- or to make many mistakes at
> once if it does the wrong thing. One way to check what a loop *would* do
> is to echo the commands it would run instead of actually running them.
> For example, we could write our file copying loop like this:
> 
> ~~~
> for filename in *.dat
> do
>     echo cp $filename original-$filename
> done
> ~~~
> 
> Instead of running `cp`, this loop runs `echo`, which prints out:
> 
> ~~~
> cp basilisk.dat original-basilisk.dat
> cp unicorn.dat original-unicorn.dat
> ~~~
> 
> *without* actually running those commands. We can then use up-arrow to
> redisplay the loop, back-arrow to get to the word `echo`, delete it, and
> then press Enter to run the loop with the actual `cp` commands. This
> isn't foolproof, but it's a handy way to see what's going to happen when
> you're still learning how loops work.

## Nelle's Pipeline: Processing Files

Nelle is now ready to process her data files.
Since she's still learning how to use the shell,
she decides to build up the required commands in stages.
Her first step is to make sure that she can select the right files --- remember,
these are ones whose names end in 'A' or 'B', rather than 'Z'. Starting from her home directory, Nelle types:

~~~ {.bash}
$ cd north-pacific-gyre/2012-07-03
$ for datafile in *[AB].txt
> do
>     echo $datafile
> done
~~~
~~~ {.output}
NENE01729A.txt
NENE01729B.txt
NENE01736A.txt
...
NENE02043A.txt
NENE02043B.txt
~~~

Her next step is to decide
what to call the files that the `goostats` analysis program will create.
Prefixing each input file's name with "stats" seems simple,
so she modifies her loop to do that:

~~~ {.bash}
$ for datafile in *[AB].txt
> do
>     echo $datafile stats-$datafile
> done
~~~
~~~ {.output}
NENE01729A.txt stats-NENE01729A.txt
NENE01729B.txt stats-NENE01729B.txt
NENE01736A.txt stats-NENE01736A.txt
...
NENE02043A.txt stats-NENE02043A.txt
NENE02043B.txt stats-NENE02043B.txt
~~~

She hasn't actually run `goostats` yet,
but now she's sure she can select the right files and generate the right output filenames.

Typing in commands over and over again is becoming tedious,
though,
and Nelle is worried about making mistakes,
so instead of re-entering her loop,
she presses the up arrow.
In response,
the shell redisplays the whole loop on one line
(using semi-colons to separate the pieces):

~~~ {.bash}
$ for datafile in *[AB].txt; do echo $datafile stats-$datafile; done
~~~

Using the left arrow key,
Nelle backs up and changes the command `echo` to `bash goostats`:

~~~ {.bash}
$ for datafile in *[AB].txt; do bash goostats $datafile stats-$datafile; done
~~~

When she presses Enter,
the shell runs the modified command.
However, nothing appears to happen --- there is no output.
After a moment, Nelle realizes that since her script doesn't print anything to the screen any longer,
she has no idea whether it is running, much less how quickly.
She kills the running command by typing Ctrl-C,
uses up-arrow to repeat the command,
and edits it to read:

~~~ {.bash}
$ for datafile in *[AB].txt; do echo $datafile; bash goostats $datafile stats-$datafile; done
~~~

> ## Beginning and End {.callout}
>
> We can move to the beginning of a line in the shell by typing Ctrl-A
> and to the end using Ctrl-E.

When she runs her program now,
it produces one line of output every five seconds or so:

~~~ {.output}
NENE01729A.txt
NENE01729B.txt
NENE01736A.txt
...
~~~

1518 times 5 seconds,
divided by 60,
tells her that her script will take about two hours to run.
As a final check,
she opens another terminal window,
goes into `north-pacific-gyre/2012-07-03`,
and uses `cat stats-NENE01729B.txt`
to examine one of the output files.
It looks good,
so she decides to get some coffee and catch up on her reading.

> ## Those Who Know History Can Choose to Repeat It {.callout}
> 
> Another way to repeat previous work is to use the `history` command to
> get a list of the last few hundred commands that have been executed, and
> then to use `!123` (where "123" is replaced by the command number) to
> repeat one of those commands. For example, if Nelle types this:
> 
> ~~~
> $ history | tail -n 5
>   456  ls -l NENE0*.txt
>   457  rm stats-NENE01729B.txt.txt
>   458  bash goostats NENE01729B.txt stats-NENE01729B.txt
>   459  ls -l NENE0*.txt
>   460  history
> ~~~
> 
> then she can re-run `goostats` on `NENE01729B.txt` simply by typing
> `!458`.

> ## Other history commands {.callout}
>
> There are a number of other shortcut commands for getting at the history.
> Two of the more useful are `!!`, which retrieves the immediately
> preceding command (you may or may not find this more convenient than
> plain up-arrow), and `!$`, which retrieves the last word of the last
> command.  That's useful more often than you might expect: after
> `bash goostats NENE01729B.txt stats-NENE01729B.txt`, you can type
> `less !$` to look at the file `stats-NENE01729B.txt`, which is
> quicker than doing up-arrow and editing the command-line.

> ## Variables in Loops {.challenge}
> 
> Suppose that `ls` initially displays:
> 
> ~~~
> fructose.dat    glucose.dat   sucrose.dat
> ~~~
> 
> What is the output of:
> 
> ~~~
> for datafile in *.dat
> do
>     ls *.dat
> done
> ~~~
>
> Now, what is the output of:
>
> ~~~
> for datafile in *.dat
> do
>	ls $datafile
> done
> ~~~
>
> Why do these two loops give you different outputs?

> ## Saving to a File in a Loop - Part One {.challenge}
>
> In the same directory, what is the effect of this loop?
> 
> ~~~
> for sugar in *.dat
> do
>     echo $sugar
>     cat $sugar > xylose.dat
> done
> ~~~
> 
> 1.  Prints `fructose.dat`, `glucose.dat`, and `sucrose.dat`, and the text from `sucrose.dat` will be saved to a file called `xylose.dat`.
> 2.  Prints `fructose.dat`, `glucose.dat`, and `sucrose.dat`, and the text from all three files would be 
>     concatenated and saved to a file called `xylose.dat`.
> 3.  Prints `fructose.dat`, `glucose.dat`, `sucrose.dat`, and
>     `xylose.dat`, and the text from `sucrose.dat` will be saved to a file called `xylose.dat`.
> 4.  None of the above.

> ## Saving to a File in a Loop - Part Two {.challenge}
>
> In another directory, where `ls` returns:
>
> ~~~
> fructose.dat    glucose.dat   sucrose.dat   maltose.txt
> ~~~
> 
> What would be the output of the following loop?
>
> ~~~
> for datafile in *.dat
> do
>     cat $datafile >> sugar.dat
> done
> ~~~
>
> 1.  All of the text from `fructose.dat`, `glucose.dat` and `sucrose.dat` would be 
>     concatenated and saved to a file called `sugar.dat`.
> 2.  The text from `sucrose.dat` will be saved to a file called `sugar.dat`.
> 3.  All of the text from `fructose.dat`, `glucose.dat`, `sucrose.dat` and `maltose.txt`
>     would be concatenated and saved to a file called `sugar.dat`.
> 4.  All of the text from `fructose.dat`, `glucose.dat` and `sucrose.dat` would be printed
>     to the screen and saved to a file called `sugar.dat`

> ## Doing a Dry Run {.challenge}
>
> Suppose we want to preview the commands the following loop will execute
> without actually running those commands:
>
> ~~~ {.bash}
> for file in *.dat
> do
>   analyze $file > analyzed-$file
> done
> ~~~
>
> What is the difference between the two loops below, and which one would we
> want to run?
>
> ~~~ {.bash}
> # Version 1
> for file in *.dat
> do
>   echo analyze $file > analyzed-$file
> done
> ~~~
>
> ~~~ {.bash}
> # Version 2
> for file in *.dat
> do
>   echo "analyze $file > analyzed-$file"
> done
> ~~~

> ## Nested Loops {.challenge}
>
> Suppose we want to set up up a directory structure to organize
> some experiments measuring the growth rate under different sugar
> types *and* different temperatures.  What would be the
> result of the following code:
>
> ~~~
> for sugar in fructose glucose sucrose
> do
>     for temperature in 25 30 37 40
>     do
>         mkdir $sugar-$temperature
>     done
> done
> ~~~
