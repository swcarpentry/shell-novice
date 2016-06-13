---
layout: page
title: The Unix Shell
subtitle: Working With Files and Directories
minutes: 15
---
> ## Learning Objectives {.objectives}
>
> *   Create a directory hierarchy that matches a given diagram.
> *   Create files in that hierarchy using an editor or by copying and renaming existing files.
> *   Display the contents of a directory using the command line.
> *   Delete specified files and/or directories.

We now know how to explore files and directories,
but how do we create them in the first place?
Let's go back to our `data-shell` directory on the Desktop
and use `ls -F` to see what it contains:

~~~ {.bash}
$ pwd
~~~
~~~ {.output}
/Users/nelle/Desktop/data-shell
~~~
~~~ {.bash}
$ ls -F
~~~
~~~ {.output}
creatures/  molecules/           pizza.cfg
data/       north-pacific-gyre/  solar.pdf
Desktop/    notes.txt            writing/
~~~

Let's create a new directory called `thesis` using the command `mkdir thesis`
(which has no output):

~~~ {.bash}
$ mkdir thesis
~~~

As you might (or might not) guess from its name,
`mkdir` means "make directory".
Since `thesis` is a relative path
(i.e., doesn't have a leading slash),
the new directory is created in the current working directory:

~~~ {.bash}
$ ls -F
~~~
~~~ {.output}
creatures/  north-pacific-gyre/  thesis/
data/       notes.txt            writing/
Desktop/    pizza.cfg
molecules/  solar.pdf
~~~

However, there's nothing in it yet:

~~~ {.bash}
$ ls -F thesis
~~~

Let's change our working directory to `thesis` using `cd`,
then run a text editor called Nano to create a file called `draft.txt`:

~~~ {.bash}
$ cd thesis
$ nano draft.txt
~~~

> ## Which Editor? {.callout}
>
> When we say, "`nano` is a text editor," we really do mean "text": it can
> only work with plain character data, not tables, images, or any other
> human-friendly media. We use it in examples because almost anyone can
> drive it anywhere without training, but please use something more
> powerful for real work. On Unix systems (such as Linux and Mac OS X),
> many programmers use [Emacs](http://www.gnu.org/software/emacs/) or
> [Vim](http://www.vim.org/) (both of which are completely unintuitive,
> even by Unix standards), or a graphical editor such as
> [Gedit](http://projects.gnome.org/gedit/). On Windows, you may wish to
> use [Notepad++](http://notepad-plus-plus.org/).  Windows also has a built-in 
> editor called `notepad` that can be run from the command line in the same 
> way as `nano` for the purposes of this lesson.  
>
> No matter what editor you use, you will need to know where it searches
> for and saves files. If you start it from the shell, it will (probably)
> use your current working directory as its default location. If you use
> your computer's start menu, it may want to save files in your desktop or
> documents directory instead. You can change this by navigating to
> another directory the first time you "Save As..."

Let's type in a few lines of text.
Once we're happy with our text, we can press `Ctrl-O` (press the Ctrl or Control key and, while
holding it down, press the O key) to write our data to disk
(we'll be asked what file we want to save this to:
press Return to accept the suggested default of `draft.txt`).

![Nano in action](fig/nano-screenshot.png)

Once our file is saved, we can use `Ctrl-X` to quit the editor and 
return to the shell.

> ## Control, ctrl, or ^ key {.callout}
>
> The Control key is also called the "Ctrl" key. There are various ways
> in which using the Control key may be described. For example, you may
> see an instruction to press the Control key and, while holding it down, 
> press the X key, described as any of:
>
> * `Control-X`
> * `Control+X`
> * `Ctrl-X`
> * `Ctrl+X`
> * `^X`
>
> In nano, along the bottom of the screen you'll see `^G Get Help ^O WriteOut`.
> This means that you can use `Control-G` to get help and `Control-O` to save your
> file. 

`nano` doesn't leave any output on the screen after it exits,
but `ls` now shows that we have created a file called `draft.txt`:

~~~ {.bash}
$ ls
~~~
~~~ {.output}
draft.txt
~~~

Let's tidy up by running `rm draft.txt`:

~~~ {.bash}
$ rm draft.txt
~~~

This command removes files (`rm` is short for "remove").
If we run `ls` again,
its output is empty once more,
which tells us that our file is gone:

~~~ {.bash}
$ ls
~~~

> ## Deleting Is Forever {.callout}
>
> The Unix shell doesn't have a trash bin that we can recover deleted
> files from (though most graphical interfaces to Unix do).  Instead,
> when we delete files, they are unhooked from the file system so that
> their storage space on disk can be recycled. Tools for finding and
> recovering deleted files do exist, but there's no guarantee they'll
> work in any particular situation, since the computer may recycle the
> file's disk space right away.

Let's re-create that file
and then move up one directory to `/Users/nelle` using `cd ..`:

~~~ {.bash}
$ pwd
~~~
~~~ {.output}
/Users/nelle/thesis
~~~
~~~ {.bash}
$ nano draft.txt
$ ls
~~~
~~~ {.output}
draft.txt
~~~
~~~ {.bash}
$ cd ..
~~~

If we try to remove the entire `thesis` directory using `rm thesis`,
we get an error message:

~~~ {.bash}
$ rm thesis
~~~
~~~ {.error}
rm: cannot remove `thesis': Is a directory
~~~

This happens because `rm` by default only works on files, not directories.

To really get rid of `thesis` we must also delete the file `draft.txt`.
We can do this with the "recursive" option for `rm`:

~~~ {.bash}
$ rm -r thesis
~~~

> ## With Great Power Comes Great Responsibility {.callout}
>
> Removing the files in a directory recursively can be very dangerous
> operation. If we're concerned about what we might be deleting we can
> add the "interactive" flag `-i` to `rm` which will ask us for confirmation
> before each step
>
> ~~~ {.bash}
> $ rm -r -i thesis
> rm: descend into directory ‘thesis’? y
> rm: remove regular file ‘thesis/draft.txt’? y
> rm: remove directory ‘thesis’? y
> ~~~
>
> This removes everything in the directory, then the directory itself, asking
> at each step for you to confirm the deletion.

Let's create that directory and file one more time.
(Note that this time we're running `nano` with the path `thesis/draft.txt`,
rather than going into the `thesis` directory and running `nano` on `draft.txt` there.)

~~~ {.bash}
$ pwd
~~~
~~~ {.output}
/Users/nelle
~~~
~~~ {.bash}
$ mkdir thesis
~~~
~~~ {.bash}
$ nano thesis/draft.txt
$ ls thesis
~~~
~~~ {.output}
draft.txt
~~~

`draft.txt` isn't a particularly informative name,
so let's change the file's name using `mv`,
which is short for "move":

~~~ {.bash}
$ mv thesis/draft.txt thesis/quotes.txt
~~~

The first parameter tells `mv` what we're "moving",
while the second is where it's to go.
In this case,
we're moving `thesis/draft.txt` to `thesis/quotes.txt`,
which has the same effect as renaming the file.
Sure enough,
`ls` shows us that `thesis` now contains one file called `quotes.txt`:

~~~ {.bash}
$ ls thesis
~~~
~~~ {.output}
quotes.txt
~~~

One has to be careful when specifying the target file name, since `mv` will 
silently overwrite any existing file with the same name, which could 
lead to data loss. An additional flag, `mv -i` (or `mv --interactive`),
can be used to make `mv` ask you for confirmation before overwriting. 

Just for the sake of inconsistency,
`mv` also works on directories --- there is no separate `mvdir` command.

Let's move `quotes.txt` into the current working directory.
We use `mv` once again,
but this time we'll just use the name of a directory as the second parameter
to tell `mv` that we want to keep the filename,
but put the file somewhere new.
(This is why the command is called "move".)
In this case,
the directory name we use is the special directory name `.` that we mentioned earlier.

~~~ {.bash}
$ mv thesis/quotes.txt .
~~~

The effect is to move the file from the directory it was in to the current working directory.
`ls` now shows us that `thesis` is empty:

~~~ {.bash}
$ ls thesis
~~~

Further,
`ls` with a filename or directory name as a parameter only lists that file or directory.
We can use this to see that `quotes.txt` is still in our current directory:

~~~ {.bash}
$ ls quotes.txt
~~~
~~~ {.output}
quotes.txt
~~~

The `cp` command works very much like `mv`,
except it copies a file instead of moving it.
We can check that it did the right thing using `ls`
with two paths as parameters --- like most Unix commands,
`ls` can be given thousands of paths at once:

~~~ {.bash}
$ cp quotes.txt thesis/quotations.txt
$ ls quotes.txt thesis/quotations.txt
~~~
~~~ {.output}
quotes.txt   thesis/quotations.txt
~~~

To prove that we made a copy,
let's delete the `quotes.txt` file in the current directory
and then run that same `ls` again.

~~~ {.bash}
$ rm quotes.txt
$ ls quotes.txt thesis/quotations.txt
~~~
~~~ {.error}
ls: cannot access quotes.txt: No such file or directory
thesis/quotations.txt
~~~
This time it tells us that it can't find `quotes.txt` in the current directory,
but it does find the copy in `thesis` that we didn't delete.

> ## What's In A Name? {.callout}
>
> You may have noticed that all of Nelle's files' names are "something dot
> something", and in this part of the lesson, we always used the extension 
> `.txt`.  This is just a convention: we can call a file `mythesis` or
> almost anything else we want. However, most people use two-part names
> most of the time to help them (and their programs) tell different kinds
> of files apart. The second part of such a name is called the
> **filename extension**, and indicates
> what type of data the file holds: `.txt` signals a plain text file, `.pdf`
> indicates a PDF document, `.cfg` is a configuration file full of parameters
> for some program or other, `.png` is a PNG image, and so on.
>
> This is just a convention, albeit an important one. Files contain
> bytes: it's up to us and our programs to interpret those bytes
> according to the rules for plain text files, PDF documents, configuration
> files, images, and so on.
>
> Naming a PNG image of a whale as `whale.mp3` doesn't somehow
> magically turn it into a recording of whalesong, though it *might*
> cause the operating system to try to open it with a music player
> when someone double-clicks it.

> ## Renaming files {.challenge}
>
> Suppose that you created a `.txt` file in your current directory to contain a list of the
> statistical tests you will need to do to analyze your data, and named it: `statstics.txt`
>
> After creating and saving this file you realize you misspelled the filename! You want to
> correct the mistake, which of the following commands could you use to do so?
>
> 1. `cp statstics.txt statistics.txt`
> 2. `mv statstics.txt statistics.txt`
> 3. `mv statstics.txt .`
> 4. `cp statstics.txt .`

> ## Moving and Copying {.challenge}
>
> What is the output of the closing `ls` command in the sequence shown below?
>
> ~~~
> $ pwd
> /Users/jamie/data
> $ ls
> proteins.dat
> $ mkdir recombine
> $ mv proteins.dat recombine
> $ cp recombine/proteins.dat ../proteins-saved.dat
> $ ls
> ~~~
>
> 1.   `proteins-saved.dat recombine`
> 2.   `recombine`
> 3.   `proteins.dat recombine`
> 4.   `proteins-saved.dat`

> ## Organizing Directories and Files {.challenge}
>
> Jamie is working on a project and she sees that her files aren't very well
> organized:
>
> ~~~
> $ ls -F
> analyzed/  fructose.dat    raw/   sucrose.dat
> ~~~
>
> The `fructose.dat` and `sucrose.dat` files contain output from her data
> analysis. What command(s) covered in this lesson does she need to run so that the commands below will
> produce the output shown?
>
> ~~~
> $ ls -F
> analyzed/   raw/
> $ ls analyzed
> fructose.dat    sucrose.dat
> ~~~

> ## Copy with Multiple Filenames {.challenge}
>
> What does `cp` do when given several filenames and a directory name, as in:
>
> ~~~
> $ mkdir backup
> $ cp thesis/citations.txt thesis/quotations.txt backup
> ~~~
>
> What does `cp` do when given three or more filenames, as in:
>
> ~~~
> $ ls -F
> intro.txt    methods.txt    survey.txt
> $ cp intro.txt methods.txt survey.txt
> ~~~
