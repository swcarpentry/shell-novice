---
title: "Pipes and Filters"
teaching: 25
exercises: 10
questions:
- "How can I combine existing commands to do new things?"
objectives:
- "Redirect a command's output to a file."
- "Construct command pipelines with two or more stages."
- "Explain what usually happens if a program or pipeline isn't given any input to process."
- "Explain the advantage of linking commands with pipes and filters."
keypoints:
- "`wc` counts lines, words, and characters in its inputs."
- "`cat` displays the contents of its inputs."
- "`sort` sorts its inputs."
- "`head` displays the first 10 lines of its input."
- "`tail` displays the last 10 lines of its input."
- "`command > [file]` redirects a command's output to a file (overwriting any existing content)."
- "`command >> [file]` appends a command's output to a file."
- "`[first] | [second]` is a pipeline: the output of the first command is used as the input to the second."
- "The best way to use the shell is to use pipes to combine simple single-purpose programs (filters)."
---

Now that we know a few basic commands,
we can finally look at the shell's most powerful feature:
the ease with which it lets us combine existing programs in new ways.

We'll start with the directory `shell-lesson-data/exercise-data/populations`
that contains data extracted from the 2022 version of the Living Planet Database (LPD). The LPD is kindly provided by [Living Planet Index](https://www.livingplanetindex.org/) and is
the basis of the [Living Planet Report 2022](https://www.wwf.org.uk/our-reports/living-planet-report-2022), which has been covered extensively in the media, [for example here](https://www.bbc.co.uk/news/science-environment-46028862).

The full LPD contains population time series data for 5268 species and 38427 populations. We have extracted a subset of data for six species and processed it for easier use in this exercise. (The full, original dataset [may be downloaded here](https://www.livingplanetindex.org/data_portal).)

Following an optional convention, the `.txt` extension indicates that files are in text format. In the LPD, each line of text gives a time series, showing variation in population size over a range of years, plus associated data such as the species name and literature source. Each of these six files contains all population time series in the LPD for a particular species of animal. (There is one additional file, which we will return to later in this episode.)

~~~
$ ls populations
~~~
{: .language-bash}

~~~
bowerbird.txt  dunnock.txt  final.txt  lengths.txt  python.txt  shark.txt  six-species.csv  toad.txt  wildcat.txt
~~~
{: .output}

Let's go into that directory with `cd` and run an example  command `wc wildcat.txt`:

~~~
$ cd populations
$ wc wildcat.txt
~~~
{: .language-bash}

~~~
   4  408 4142 wildcat.txt
~~~
{: .output}

`wc` is the 'word count' command:
it counts the number of lines, words, and characters in files (from left to right, in that order).

If we run the command `wc *.txt`, the `*` in `*.txt` matches zero or more characters,
so the shell turns `*.txt` into a list of all `.txt` files in the current directory:

~~~
$ wc *.txt
~~~
{: .language-bash}

~~~
    3   306  2808 bowerbird.txt
   11  1131  9838 dunnock.txt
    1   102   798 python.txt
   18  1841 16908 shark.txt
   20  2049 19034 toad.txt
    4   409  4142 wildcat.txt
   57  5838 53528 total
~~~
{: .output}

Note that `wc *.txt` also shows the total number of all lines in the last line of the output.

If we run `wc -l` instead of just `wc`,
the output shows only the number of lines per file:

~~~
$ wc -l *.txt
~~~
{: .language-bash}

~~~
    3 bowerbird.txt
   11 dunnock.txt
    1 python.txt
   18 shark.txt
   20 toad.txt
    4 wildcat.txt
   57 total
~~~
{: .output}

The `-m` and `-w` options can also be used with the `wc` command, to show
only the number of characters or the number of words in the files.

> ## Why Isn't It Doing Anything?
>
> What happens if a command is supposed to process a file, but we
> don't give it a filename? For example, what if we type:
>
> ~~~
> $ wc -l
> ~~~
> {: .language-bash}
>
> but don't type `*.txt` (or anything else) after the command?
> Since it doesn't have any filenames, `wc` assumes it is supposed to
> process input given at the command prompt, so it just sits there and waits for us to give
> it some data interactively. From the outside, though, all we see is it
> sitting there: the command doesn't appear to do anything.
>
> If you make this kind of mistake, you can escape out of this state by holding down
> the control key (<kbd>Ctrl</kbd>) and typing the letter <kbd>C</kbd> once and
> letting go of the <kbd>Ctrl</kbd> key.
> <kbd>Ctrl</kbd>+<kbd>C</kbd>
{: .callout}


## Capturing output from commands

Which of these files contains the fewest lines?
It's an easy question to answer when there are only six files,
but what if there were 6000?
Our first step toward a solution is to run the command:

~~~
$ wc -l *.txt > lengths.txt
~~~
{: .language-bash}

The greater than symbol, `>`, tells the shell to **redirect** the command's output
to a file instead of printing it to the screen. (This is why there is no screen output:
everything that `wc` would have printed has gone into the
file `lengths.txt` instead.)  The shell will create
the file if it doesn't exist. If the file exists, it will be
silently overwritten, which may lead to data loss and thus requires
some caution.
`ls lengths.txt` confirms that the file exists:

~~~
$ ls lengths.txt
~~~
{: .language-bash}

~~~
lengths.txt
~~~
{: .output}

We can now send the content of `lengths.txt` to the screen using `cat lengths.txt`.
The `cat` command gets its name from 'concatenate' i.e. join together,
and it prints the contents of files one after another.
There's only one file in this case,
so `cat` just shows us what it contains:

~~~
$ cat lengths.txt
~~~
{: .language-bash}

~~~
    3 bowerbird.txt
   11 dunnock.txt
    1 python.txt
   18 shark.txt
   20 toad.txt
    4 wildcat.txt
   57 total
~~~
{: .output}

> ## Output Page by Page
>
> We'll continue to use `cat` in this lesson, for convenience and consistency,
> but it has the disadvantage that it always dumps the whole file onto your screen.
> More useful in practice is the command `less`,
> which you can use with `less lengths.txt`.
> This displays a screenful of the file, and then stops.
> You can go forward one screenful by pressing the spacebar,
> or back one by pressing `b`.  Press `q` to quit.
{: .callout}


## Filtering output

Next we'll use the `sort` command to sort the contents of the `lengths.txt` file.
But first we'll use an exercise to learn a little about the sort command:

> ## What Does `sort -g` Do?
>
> The file `shell-lesson-data/exercise-data/numbers.txt` contains the following lines:
>
> ~~~
> 10
> 2
> 19
> 22
> 6
> ~~~
> {: .source}
>
> If we run `sort` on this file, the output is:
>
> ~~~
> 10
> 19
> 2
> 22
> 6
> ~~~
> {: .output}
>
> If we run `sort -g` on the same file, we get this instead:
>
> ~~~
> 2
> 6
> 10
> 19
> 22
> ~~~
> {: .output}
>
> Explain why `-g` has this effect.
>
> > ## Solution
> > The `-g` option specifies a sort on numerical value, rather than an alphanumerical sort.
> {: .solution}
{: .challenge}

We will also use the `-g` option to specify that the sort is
numerical instead of alphanumerical.
This does *not* change the file;
instead, it sends the sorted result to the screen. Make sure you are in the `shell-lesson-data/exercise-data/populations` directory, and then:

~~~
$ sort -g lengths.txt
~~~
{: .language-bash}

~~~
    1 python.txt
    3 bowerbird.txt
    4 wildcat.txt
   11 dunnock.txt
   18 shark.txt
   20 toad.txt
   57 total
~~~
{: .output}

Remember that there is one population time series per line. So this output tells us that the python file contains one population time series each, the bowerbird file contains four, and so on.

We can put the sorted list of lines in another temporary file called `sorted-lengths.txt`
by putting `> sorted-lengths.txt` after the command,
just as we used `> lengths.txt` to put the output of `wc` into `lengths.txt`.
Once we've done that,
we can run another command called `head` to get the first few lines in `sorted-lengths.txt`:

~~~
$ sort -g lengths.txt > sorted-lengths.txt
$ head -n 1 sorted-lengths.txt
~~~
{: .language-bash}

~~~
    1 python.txt
~~~
{: .output}

Using `-n 1` with `head` tells it that
we only want the first line of the file;
`-n 20` would get the first 20,
and so on.
Since `sorted-lengths.txt` contains the lengths of our files ordered from least to greatest,
the output of `head` must be the file with the fewest lines.

> ## Redirecting to the same file
>
> It's a very bad idea to try redirecting
> the output of a command that operates on a file
> to the same file. For example:
>
> ~~~
> $ sort -g lengths.txt > lengths.txt
> ~~~
> {: .language-bash}
>
> Doing something like this may give you
> incorrect results and/or delete
> the contents of `lengths.txt`.
{: .callout}

> ## What Does `>>` Mean?
>
> We have seen the use of `>`, but there is a similar operator `>>`
> which works slightly differently.
> We'll learn about the differences between these two operators by printing some strings.
> We can use the `echo` command to print strings e.g.
>
> ~~~
> $ echo The echo command prints text
> ~~~
> {: .language-bash}
> ~~~
> The echo command prints text
> ~~~
> {: .output}
>
> Now test the commands below to reveal the difference between the two operators:
>
> ~~~
> $ echo hello > testfile01.txt
> ~~~
> {: .language-bash}
>
> and:
>
> ~~~
> $ echo hello >> testfile02.txt
> ~~~
> {: .language-bash}
>
> Hint: Try executing each command twice in a row and then examining the output files.
>
> > ## Solution
> > In the first example with `>`, the string 'hello' is written to `testfile01.txt`,
> > but the file gets overwritten each time we run the command.
> >
> > We see from the second example that the `>>` operator also writes 'hello' to a file
> > (in this case`testfile02.txt`),
> > but appends the string to the file if it already exists
> > (i.e. when we run it for the second time).
> {: .solution}
{: .challenge}

> ## Appending Data
>
> We have already met the `head` command, which prints lines from the start of a file.
> `tail` is similar, but prints lines from the end of a file instead.
>
> Consider the file `sorted-lengths.txt`.
> After these commands, select the answer that
> corresponds to the file `sorted-lengths-subset.txt`:
>
> ~~~
> $ head -n 3 sorted-lengths.txt > sorted-lengths-subset.txt
> $ tail -n 2 sorted-lengths.txt >> sorted-lengths-subset.txt
> ~~~
> {: .language-bash}
>
> 1. The first three lines of `sorted-lengths.txt`
> 2. The last two lines of `sorted-lengths.txt`
> 3. The first three lines and the last two lines of `sorted-lengths.txt`
> 4. The second and third lines of `sorted-lengths.txt`
>
> > ## Solution
> > Option 3 is correct.
> > For option 1 to be correct we would only run the `head` command.
> > For option 2 to be correct we would only run the `tail` command.
> > For option 4 to be correct we would have to pipe the output of `head` into `tail -n 2`
> >  by doing `head -n 3 sorted-lengths.txt | tail -n 2 > sorted-lengths-subset.txt`
> {: .solution}
{: .challenge}


## Passing output to another command
In our example of finding a file with the fewest lines,
we are using two intermediate files `lengths.txt` and `sorted-lengths.txt` to store output.
This is a confusing way to work because
even once you understand what `wc`, `sort`, and `head` do,
those intermediate files make it hard to follow what's going on.
We can make it easier to understand by running `sort` and `head` together:

~~~
$ sort -n lengths.txt | head -n 1
~~~
{: .language-bash}

~~~
    1 python.txt
~~~
{: .output}

The vertical bar, `|`, between the two commands is called a **pipe**.
It tells the shell that we want to use
the output of the command on the left
as the input to the command on the right.

This has removed the need for the `sorted-lengths.txt` file.

## Combining multiple commands
Nothing prevents us from chaining pipes consecutively.
We can for example send the output of `wc` directly to `sort`,
and then the resulting output to `head`.
This removes the need for any intermediate files.

In fact, let's delete the files we created, containing lengths of other files:

~~~
$ rm lengths.txt sorted-lengths.txt sorted-lengths-subset.txt
~~~
{: .language-bash}

Now we'll start by using a pipe to send the output of `wc` to `sort`:

~~~
$ wc -l *.txt | sort -g
~~~
{: .language-bash}

~~~
    1 python.txt
    3 bowerbird.txt
    4 wildcat.txt
   11 dunnock.txt
   18 shark.txt
   20 toad.txt
   57 total
~~~
{: .output}

We can then send that output through another pipe, to `head`, so that the full pipeline becomes:

~~~
$ wc -l *.txt | sort -g | head -n 1
~~~
{: .language-bash}

~~~
    1 python.txt
~~~
{: .output}

This is exactly like a mathematician nesting functions like *log(3x)*
and saying 'the log of three times *x*'.
In our case,
the calculation is 'head of sort of line count of `*.txt`'.


Redirection and pipes, as used in the last few commands, are illustrated below:

![Redirects and Pipes of different commands: "wc -l *.txt" will direct the
output to the shell. "wc -l *.txt > lengths" will direct output to the file
"lengths". "wc -l *.txt | sort -n | head -n 1" will build a pipeline where the
output of the "wc" command is the input to the "sort" command, the output of
the "sort" command is the input to the "head" command and the output of the
"head" command is directed to the shell](../fig/redirects-and-pipes.svg)

> ## Piping Commands Together
>
> In our current directory, we want to find the 3 files which have the least number of
> lines. Which command listed below would work?
>
> 1. `wc -l * > sort -g > head -n 3`
> 2. `wc -l * | sort -g | head -n 1-3`
> 3. `wc -l * | head -n 3 | sort -g`
> 4. `wc -l * | sort -g | head -n 3`
>
> > ## Solution
> > Option 4 is the solution.
> > The pipe character `|` is used to connect the output from one command to
> > the input of another.
> > `>` is used to redirect standard output to a file.
> > Try it in the `shell-lesson-data/exercise-data/populations` directory!
> {: .solution}
{: .challenge}


## Tools designed to work together
This idea of linking programs together is why Unix has been so successful.
Instead of creating enormous programs that try to do many different things,
Unix programmers focus on creating lots of simple tools that each do one job well,
and that work well with each other.
This programming model is called 'pipes and filters'.
We've already seen pipes;
a **filter** is a program like `wc` or `sort`
that transforms a stream of input into a stream of output.
Almost all of the standard Unix tools can work this way:
unless told to do otherwise,
they read from standard input,
do something with what they've read,
and write to standard output.

The key is that any program that reads lines of text from standard input
and writes lines of text to standard output
can be combined with every other program that behaves this way as well.
You can *and should* write your programs this way
so that you and other people can put those programs into pipes to multiply their power.


> ## Pipe Reading Comprehension
>
> A file called `six-species.csv` (in the `shell-lesson-data/exercise-data/populations` folder)
> contains the combined data for the six species. Take a look at the file using `cat`. There is a lot of information. Lines have been wrapped to fit, and the 
> top of the output scrolls off the top of the terminal.
> Now look at the first line only, using `head -n 1 six-species.csv`. This
> gives column headings. Confirm that the first heading is "ID". This gives the
> LPD database ID for the population time series, an arbitrary number which uniquely identifies
> the time series. (The final column headings, from 1950 to 2020, give the date.)
>
> What text passes through each of the pipes and the final redirect in the pipeline below?
> Note, the `sort -r` command sorts in reverse order.
>
> ~~~
> $ cat six-species.csv | head -n 5 | tail -n 3 | sort -g -r > final.txt
> ~~~
> {: .language-bash}
> Hint: build the pipeline up one command at a time to test your understanding
> > ## Solution
> > The `head` command extracts the first 5 lines from `six-species.csv`.
> > Then, the last 3 lines are extracted from the previous 5 by using the `tail` command.
> > With the `sort -g -r` command those 3 lines are sorted in reverse numerical order
> > and finally, the output is redirected to a file `final.txt`.
> > The content of this file can be checked by executing `cat final.txt`.
> > The file should contain three long lines, the first beginning with 2826, the second
> > beginning with 2825 and the third beginning with 2824. I.e. the three population
> > time series extracted by `head` and `tail` have been sorted in reverse numerical order
> > of their IDs in the Living Planet Database (LPD).
> {: .solution}
{: .challenge}

> ## Pipe Construction
>
> For the file `six-species.csv` from the previous exercise, consider the following command:
>
> ~~~
> $ cut -d , -f 2 six-species.csv
> ~~~
> {: .language-bash}
>
> The `cut` command is used to remove or 'cut out' certain sections of each line in the file,
> and `cut` expects the lines to be separated into columns by a <kbd>Tab</kbd> character.
> A character used in this way is a called a **delimiter**.
> In the example above we use the `-d` option to specify the comma as our delimiter character.
> We have also used the `-f` option to specify that we want to extract the second field (column).
> This gives the following output:
>
> ~~~
> Binomial
> Prunella_modularis
> Prunella_modularis
> Prunella_modularis
> Prunella_modularis
> Prunella_modularis
> Prunella_modularis
> Prunella_modularis
> Prunella_modularis
> Prunella_modularis
> Prunella_modularis
> Prunella_modularis
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Bufo_bufo
> Ailuroedus_melanotis
> Ailuroedus_melanotis
> Ailuroedus_melanotis
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Carcharodon_carcharias
> Python_regius
> Felis_silvestris
> Felis_silvestris
> Felis_silvestris
> Felis_silvestris
> ~~~
> {: .output}
>
> The first line contains the column heading, "Binomial". The rows then give the binomial name
> of the exact species, for example *Prunella modularis* (the dunnock).
> 
> The `uniq` command filters out adjacent matching lines in a file.
> How could you extend this pipeline (using `uniq` and another command) to find
> out which species the file contains (without any duplicates in their
> names)?
>
> > ## Solution
> > ```
> > $ cut -d , -f 2 six-species.csv | sort | uniq
> > ```
> > {: .language-bash}
> {: .solution}
{: .challenge}

> ## Which Pipe?
>
> The `uniq` command has a `-c` option which gives a count of the
> number of times a line occurs in its input.  Assuming your current
> directory is `shell-lesson-data/exercise-data/populations`, 
> which of the following commands would be best to produce a table that shows
> the total count of each type of animal in the file?
>
> 1.  `sort six-species.csv | uniq -c`
> 2.  `sort -t , -k2,2 six-species.csv | uniq -c`
> 3.  `cut -d , -f 2 six-species.csv | uniq -c`
> 4.  `cut -d , -f 2 six-species.csv | sort | uniq -c`
> 5.  `cut -d , -f 2 six-species.csv | sort | uniq -c | wc -l`
>
> > ## Solution
> > Option 4. is the correct answer. (Note, it could be improved further --- its output also
> > includes an entry for the column
> > heading, "Binomial").
> > If you have difficulty understanding why this is the best, try
> > running the commands, or sub-sections of
> > the pipelines (make sure you are in the `shell-lesson-data/exercise-data/populations` 
> > directory).
> {: .solution}
{: .challenge}


> ## Removing Unneeded Files
>
> Suppose you want to delete your processed data files, and only keep
> your raw files and processing script to save storage.
> The raw files end in `.dat` and the processed files end in `.txt`.
> Which of the following would remove all the processed data files,
> and *only* the processed data files?
>
> 1. `rm ?.txt`
> 2. `rm *.txt`
> 3. `rm * .txt`
> 4. `rm *.*`
>
> > ## Solution
> > 1. This would remove `.txt` files with one-character names
> > 2. This is the correct answer
> > 3. The shell would expand `*` to match everything in the current directory,
> > so the command would try to remove all matched files and an additional
> > file called `.txt`
> > 4. The shell would expand `*.*` to match all files with any extension,
> > so this command would delete all files
> {: .solution}
{: .challenge}

{% include links.md %}
