---
layout: page
title: The Unix Shell
subtitle: Files and Directories
minutes: 15
---
> ## Learning Objectives {.objectives}
>
> *   Explain the similarities and differences between a file and a directory.
> *   Translate an absolute path into a relative path and vice versa.
> *   Construct absolute and relative paths that identify specific files and directories.
> *   Explain the steps in the shell's read-run-print cycle.
> *   Identify the actual command, flags, and filenames in a command-line call.
> *   Demonstrate the use of tab completion, and explain its advantages.

The part of the operating system responsible for managing files and directories
is called the **file system**.
It organizes our data into files,
which hold information,
and directories (also called "folders"),
which hold files or other directories.

Several commands are frequently used to create, inspect, rename, and delete files and directories.

To start exploring them,
let's open a shell window:
> * Windows Users should open the app **GIT BASH**. If there are problems open a command window and ask the instructor for directory help. 

> ## Preparation Magic {.callout}
>
> Note that when you first open a shell window, 
> you should automatically be in your 
> "home" directory (e.g. /Users/nelle). The dollar sign is a **prompt**. 
> Often there is a lot of other informative
> information on the screen (may be very 
> helpful information!), but for our exercise, let's minimize distractions.  
> Start by typing the Shell Prompt command:
> `PS1='$ '`
> into your shell. 
> `PS1=` is the Prompt Shell **command**, and what follows (in this case `'$ '`)
> is your instruction about what the command should look like
> (a simple dollar sign followed by a space).
> Many people like to customize their prompt. Try it later!   
> For now your window should look similar to our examples in this lesson.  

~~~ {.bash}
$
~~~

Seeing a prompt means that the shell is waiting for input;
When typing commands, either from these lessons or from other sources, 
**do not type the prompt, only the commands that follow it**.

Type the command `whoami`,
then press the Enter key (sometimes marked Return) to send the command to the shell.
The command's output is the ID of the current user, 
which will be `nelle` in our exercises, but will be different on your
computer where you should substitute the actual username of your system.
There will be differences between operating systems:

~~~ {.bash}
$ whoami
~~~
~~~ {.output}
nelle
~~~

More specifically, when we type `whoami` the shell:

1.  finds a program called `whoami`,
2.  runs that program,
3.  displays that program's output, then
4.  displays a new prompt to tell us that it's ready for more commands.


> ## Username Variation {.callout}
>
> Remember, we have used the username `nelle` (associated 
> with our hypothetical scientist Nelle) in example input and output throughout.  
> However, when 
> you type this lesson's commands on your computer,
> you should see and use something different, 
> namely, the username associated with the user account on your computer (probably YOU).
> This username will be the output from `whoami`.  In 
> what follows, `nelle` should always be replaced by that username.
> Windows users may see the computer name and the username.  

Next,
let's find out where we are by running a command called `pwd`
(which stands for "print working directory").
At any moment,
our **current working directory**
is the directory where the computer assumes we want to run commands
unless we explicitly specify something else.
Because we have just opened the shell,
the computer's response is `/Users/nelle`,
which is Nelle's **home directory**:

~~~ {.bash}
$ pwd
~~~
~~~ {.output}
/Users/nelle
~~~

> ## Home Directory Variation {.callout}
>
> The home directory path will look different on different operating systems.
> On Linux it may look like `/home/nelle`,
> and on Windows it will be similar to `C:\Documents and Settings\nelle` or 
> `C:\Users\nelle` or even `/c/Users/nelle`. 
> If you see `/c/` think of it as the same as `/` in Linux. 
> In future lesson examples, we've used **Mac output** as the default - Linux and Windows 
> output may differ slightly, but should be generally similar.  

To understand what a "home directory" is,
let's have a look at how the file system as a whole is organized.  For the 
sake of example, we'll be 
illustrating the filesystem on our scientist Nelle's computer.  After this
illustration, you'll be learning commands to explore your own filesystem, 
which will be constructed in a similar way, but not be exactly identical. Windows systems can be very different, but the `data-shell` directory we ceated for you will make this exercise similar on most operating systems. Windows differences can be noted as they occur. 

Everyone just follow along with the instructor at this point. 

On Nelle's computer, the filesystem looks like this: 

![The File System](fig/filesystem.svg)

At the top is the **root directory**
that holds everything else.
It is *called* "root", but does not actually have a folder or directory name `"root"`. 
Instead it is designated using a slash character `/` on its own;
this is the leading slash in `/Users/nelle`.

Inside the `/` or root directory are several other directories:
`bin` (which is where some built-in programs are stored),
`data` (for miscellaneous data files),
`Users` (where users' personal directories are located),
`tmp` (for temporary files that don't need to be stored long-term),
and so on.  

We know that our current working directory `/Users/nelle` is stored inside `/Users`
because `/Users` is the first part of its name.
Similarly,
we know that `/Users` is stored inside the root directory `/`
because its name begins with `/`.

> ## Slashes {.callout}
>
> Notice that there are two meanings for the `/` character.

> When it appears at the front of a file, path, or directory name,
> it refers to the root directory. When it appears *inside* a path
> or a path and a filename,
> it is just a separator.

Underneath `/Users`, (or *inside* the `/Users` diretory)
we find one directory for each other user with an account on Nelle's machine; 
her colleagues the Mummy and Wolfman.  

![Home Directories](fig/home-directories.svg)

The egotistic Mummy likes to store his files in a directory called `/Users/imhotep`,
while the reclusive Wolfman just calls his file direcotry `/Users/larry`,
and logical Nelle's are in `/Users/nelle`.  Because Nelle is the user in our 
examples here, this is why we get `/Users/nelle` as our home directory and this is where we will begin our adventure.  

Now let's learn the command that will let us see the contents of our 
own filesystem.  We can see what's in our home directory `/Users/nelle/` by running `ls`,
which stands for "listing":

~~~ {.bash}
$ ls
~~~
~~~ {.output}
Applications Documents    Library      Music        Public
Desktop      Downloads    Movies       Pictures
~~~

Windows users will find there are MANY files in their home directory many which cannot be moved or deleted. Clean out clutter if you can.

`ls` prints the names of the files and directories in the current directory in 
alphabetical order,
arranged neatly into columns.
We can make its output more comprehensible by using the **flag** `-F`,
which tells `ls` to add a trailing `/` to the names of directories:

~~~ {.bash}
$ ls -F
~~~
~~~ {.output}
Applications/ Documents/    Library/      Music/        Public/
Desktop/      Downloads/    Movies/       Pictures/
~~~

Here,
we can see that our home directory contains mostly **sub-directories**.
Any names in your output that don't have trailing slashes,
are plain old **files**.
And note that there is a space between `ls` and `-F`:
without it,
the shell thinks we're trying to run a command called `ls-F`,
which doesn't exist. Windows sometimes adds an asterisk after a file, 
but you can ignore that for now.

> ## Parameters vs. Arguments {.callout}
>
> According to [Wikipedia](https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments),
> the terms argument and **parameter**
> mean slightly different things.
> In practice,
> however,
> most people use them interchangeably or inconsistently,
> so we will too.

We can also use `ls` to see the contents of a different directory.  Let's take a 
look at our `Desktop` directory by running `ls -F Desktop`,
i.e.,
the command `ls` with the **arguments** `-F` and `Desktop`.
The second argument --- the one *without* a leading dash --- tells `ls` that
we want a listing of something other than our current working directory:

~~~ {.bash}
$ ls -F Desktop
~~~
~~~ {.output}
data-shell/
~~~

Your output should be a list of all the files and sub-directories on your 
Desktop, including the `data-shell` directory you downloaded at 
the start of the lesson.  Take a look at your Desktop to confirm that 
your output is accurate.  

As you may now see, using a bash shell is strongly dependent on the idea that 
your **files are organized in an hierarchical file system**.  
Organizing things hierarchically in this way helps us keep track of our work:
it's possible to put hundreds of files in our home directory,
just as it's possible to pile hundreds of printed papers on our desk,
but it's a self-defeating strategy.

Now that we know the `data-shell` directory is located on our Desktop, we 
can do two things.  

First, we can look at its contents, using the same strategy as before, passing 
a directory name to `ls`: 

~~~ {.bash}
$ ls -F Desktop/data-shell
~~~
~~~ {.output}
creatures/          molecules/          notes.txt           solar.pdf
data/               north-pacific-gyre/ pizza.cfg           writing/
~~~

Second, we can actually change our location to a different directory, so 
we are no longer located in
our home directory.  

The command to change locations is `cd` followed by a 
directory name to change our working directory.
`cd` stands for "change directory",
which is a bit misleading:
the command doesn't change the directory,
it changes the shell's idea of what directory we are in as we **move
around in our directory**.

Let's say we want to move to the `data` directory we saw above.  We can 
use the following series of commands to get there: 

~~~ {.bash}
$ cd Desktop
$ cd data-shell
$ cd data
~~~

These commands will move us from our home directory onto our Desktop, then into 
the `data-shell` directory, then into the `data` directory.  `cd` doesn't print anything,
but if we run `pwd` after it, we can see that we are now 
in `/Users/nelle/Desktop/data-shell/data`.
If we run `ls` without arguments now,
it lists the contents of `/Users/nelle/Desktop/data-shell/data`,
because that's where we now are:

~~~ {.bash}
$ pwd
~~~
~~~ {.output}
/Users/nelle/Desktop/data-shell/data
~~~
~~~ {.bash}
$ ls -F
~~~
~~~ {.output}
amino-acids.txt   elements/     pdb/	        salmon.txt
animals.txt       morse.txt     planets.txt     sunspot.txt
~~~

We now know how to go down the directory tree:
how do we go up?  We might try the following: 

~~~{.bash}
cd data-shell
~~~
~~~{.error}
-bash: cd: data-shell: No such file or directory
~~~

But we get an error!  Why is this?  

With our methods so far, 
`cd` can only see sub-directories inside (or below) your current directory.  **BUT** there are 
different ways to see directories above your current location and we'll start 
with the simplest.  

There is a shortcut in the shell to move up one directory level
that looks like this: 

~~~ {.bash}
$ cd ..
~~~

`..` is a special directory name meaning
"the directory containing this one",or “the directory above this one”,
or more succinctly,
the **parent** of the current directory.
Sure enough,
if we run `pwd` after running `cd ..`, we're back in `/Users/nelle/Desktop/data-shell`:

~~~ {.bash}
$ pwd
~~~
~~~ {.output}
/Users/nelle/Desktop/data-shell
~~~

The special directory `..` doesn't usually show up when we run `ls`.  If we want 
to display them from within the 2012-07-03 directory, we can give `ls` the `-a` flag:

~~~ {.bash}
$ ls -F -a
~~~
~~~ {.output}
./                  creatures/          notes.txt
../                 data/               pizza.cfg
.bash_profile       molecules/          solar.pdf
north-pacific-gyre/ writing/
~~~

`-a` stands for "show all";
it forces `ls` to show us hidden file and directory names that begin with `.`,
such as `..` and
it also displays another special directory that's just called `.`,
which means “this directory”, or more precisely: "the current working directory".
It may seem redundant to have a name for it,
but we'll see some uses for it soon. Think of `..` as a shortcut to the parent directory and `.` as a shortcut to the directory you are already in (the current working directory)

> ## Other Hidden Files {.callout}
> 
> In addition to the hidden directories `..` and `.`, you'll also see a file 
> called `.bash_profile`. This file usually 
> contains settings to customize the shell.  There may also be similar files called 
> `.bashrc` or `.bash_login` in your own home directory. The `.` prefix is 
> used to prevent these 
> configuration files from cluttering the terminal when a standard `ls` command is used.
> Most of time you don't need to change these files anyway.

> ## Orthogonality {.callout}
>
> The special names `.` and `..` are interpreted the same way by every program 
> and don't just belong to `ls`, but also `cd` as we've seen;
> they are interpreted the same way by every program.
> For example,
> if we are in `/Desktop/data-shell/data`,
> the command `ls ..` will give us a listing of `/Desktop/data-shell`.
> When the meanings of the parts are the same no matter how they're combined,
> programmers say they are **orthogonal**:
> Orthogonal systems tend to be easier for people to learn
> because there are fewer special cases and exceptions to track.

These then, are the basic commands for navigating the filesystem on your computer: 
`pwd`, `ls` and `cd`.  Let's explore some variations on those commands.  What happens 
if you type `cd` on its own, without giving 
a directory?  

~~~ {.bash}
$ cd
~~~

How can you check what happened?  `pwd` gives us the answer!  

~~~ {.bash}
$ pwd
~~~
~~~ {.output}
/Users/nelle
~~~

It turns out that `cd` without an argument will **ALWAYS** return you to your home directory, 
which is great if you've gotten lost in your own filesystem.  

Let's try returning to the `data` directory from before.  Last time, we used 
three commands, but we can actually string together the list of directories 
to move to `data` in one step: 

~~~ {.bash}
$ cd Desktop/data-shell/data
~~~

Check that we've moved to the right place by running `pwd` and `ls -F`.  

> ## Using absolute and relative paths to move between directorys {.callout}
If we want to move up one level from the shell directory, we could use `cd ..`.  But 
there is another way to move to any directory, regardless of your 
current location.  

So far, when specifying directory names, or even a directory path (as above), 
we have been using **relative paths**.  When using `ls` or `cd`, 
a **relative path** tries to find that location from where we are now 
(the current working directory),
rather than from the root of the file system.  

However, it is possible to specify the **absolute path** to a directory by 
including its entire path from the root directory, which *must be* indicated by a 
leading slash.  The leading `/` tells the computer to follow the path from 
the root of the file system, so it always refers to exactly one directory,
no matter where we are when we run the command.

This allows us to move to our data-shell directory from anywhere on 
the filesystem (including from inside `data`).  To find the absolute path 
we're looking for, we can use `pwd` and then extract the piece we need 
to move to `data-shell`.  

~~~ {.bash}
$ pwd
~~~
~~~ {.output}
/Users/nelle/Desktop/data-shell/data
~~~
  * Windows users will see:
~~~ {.output}
/c/Users/nelle/Desktop/data-shell
~~~

~~~ {.bash}
$ cd /Users/nelle/Desktop/data-shell
~~~
  * Windows users will have to type:
~~~ {.bash}
cd /c/Users/nelle/Desktop/data-shell
~~~

Run `pwd` and `ls -F` to ensure that we're in the directory we expect.  

> ## Two More Shortcuts {.callout}
>
> The shell interprets the character `~` (tilde) at the start of a path to
> mean "the current user's home directory". For example, if Nelle's home
> directory is `/Users/nelle`, then `~/Desktop` is equivalent to
> `/Users/nelle/Desktop`. This only works if it is the first character in the
> path: `here/there/~/elsewhere` is *not* `/Users/nelle/elsewhere`. 
> 
> Another shortcut is the `-` (dash) character.  `cd` will translate `-` into
> *the previous directory I was in* (no matter where that directory was), 
> which is faster than having to remember, 
> then type, the full path.  This is a *very* efficient way of moving back 
> and forth between directories. The difference between `cd ..` and `cd -` is 
> that the former brings you *up (to the parent directory)*, while the later brings you *back (to wherever you were)*. 

### Nelle's Pipeline: Organizing Files

Knowing just this much about files and directories,
Nelle is ready to organize the files that the protein assay machine will create.
First,
she creates a directory called `north-pacific-gyre`
(to remind herself where the data came from).
Inside that,
she creates a directory called `2012-07-03`,
which is the date she started processing the samples.
She used to use names like `conference-paper` and `revised-results`,
but she found them hard to understand after a couple of years.
(The final straw was when she found herself creating
a directory called `revised-revised-results-3`.)

> ## Output sorting {.callout}
>
> Nelle names her directories "year-month-day",
> with leading zeroes for months and days,
> because the shell displays file and directory names in alphabetical order.
> If she used month names,
> December would come before July;
> if she didn't use leading zeroes,
> November ('11') would come before July ('7'). Similarly, putting the year first 
> means that June 2012 will come before June 2013.

Each of her physical samples is labelled according to her lab's convention
with a unique ten-character ID,
such as "NENE01729A".
This is what she used in her collection log
to record the location, time, depth, and other characteristics of the sample,
so she decides to use it as part of each data file's name.
Since the assay machine's output is plain text,
she will call her files `NENE01729A.txt`, `NENE01812A.txt`, and so on.
All 1520 files will go into the same directory.

If she is in her data-shell directory,
Nelle can see what files she has using the command:

~~~ {.bash}
$ ls north-pacific-gyre/2012-07-03/
~~~

This is a lot to type,
but she can let the shell do most of the work through what is called **tab completion**.
If she types:

~~~ {.bash}
$ ls nor
~~~

and then presses tab (the tab key on her keyboard),
the shell automatically completes the directory name for her:

~~~ {.bash}
$ ls north-pacific-gyre/
~~~

If she presses tab again,
Bash will add `2012-07-03/` to the command,
since it's the only possible completion.
Pressing tab again does nothing,
since there are 19 possibilities;
pressing tab twice brings up a list of all the files,
and so on.
This is **tab completion**,
and we will see it in many other tools as we go on.

> ## Many ways to do the same thing - absolute vs relative paths {.challenge}
>
> For a hypothetical filesystem location of `/Users/amanda/data/`, 
> select each of the below commands that Amanda could use to navigate to her home directory, 
> which is `Users/amanda`.  
> 
>1.  `cd .`
>2.  `cd /`
>3.  `cd /home/amanda`
>4.  `cd ../..`
>5.  `cd ~`
>6.  `cd home`
>7.  `cd ~/data/..`
>8.  `cd`
>9.  `cd ..`

> ## Relative path resolution {.challenge}
>
> Using the filesystem diagram below, if `pwd` displays `/Users/thing`, 
what will `ls ../backup` display?
>
> 1.  `../backup: No such file or directory`
> 2.  `2012-12-01 2013-01-08 2013-01-27`
> 3.  `2012-12-01/ 2013-01-08/ 2013-01-27/`
> 4.  `original pnas_final pnas_sub`
> 
> ![File System for Challenge Questions](fig/filesystem-challenge.svg)


> ## `ls` reading comprehension {.challenge}
>
> Assuming a directory structure as in the above Figure 
> (File System for Challenge Questions), if `pwd` displays `/Users/backup`,
> and `-r` tells `ls` to display things in reverse order,
> what command will display:
>
> ~~~
> pnas_sub/ pnas_final/ original/
> ~~~
>
> 1.  `ls pwd`
> 2.  `ls -r -F`
> 3.  `ls -r -F /Users/backup`
> 4.  Either \#2 or \#3 above, but not \#1.

> ## `ls` Relative path outputs {.challenge}


> Using the directory structure as in the above Figure (The File System for Challenge Questions), if you were in /Users:

> 1. Will the same outputs be produced by: 
>  
>   `ls backup` 
>  and 
>  
>   `ls thing/backup`
>  
> 2. Will the same outputs be produced by:
>  ~~~
>   cd backup 
>   cd ..` 
>   pwd 
>  ~~~
>  and
>  ~~~
>   cd thing/backup
>   cd .. 
>   cd .. 
>   pwd
>  ~~~
>  
> 3. Will different outputs be produced by:
> ~~~
>   cd thing/backup/2012-12-01
>   ls
> ~~~
> and 
> ~~~
>   cd backup/original
>   cd - 
>   cd thing/backup/2012-12-01
>   ls
> ~~~

> ## Exploring more `ls` arguments {.challenge}
>
> What does the command `ls` do when used with the `-s` and `-h`
> arguments?
