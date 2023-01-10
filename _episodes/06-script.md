---
title: "Shell Scripts"
teaching: 30
exercises: 15
questions:
- "How can I save and re-use commands?"
objectives:
- "Write a shell script that runs a command or series of commands for a fixed set of files."
- "Run a shell script from the command line."
- "Write a shell script that operates on a set of files defined by the user on the command line."
- "Create pipelines that include shell scripts you, and others, have written."
keypoints:
- "Save commands in files (usually called shell scripts) for re-use."
- "`bash [filename]` runs the commands saved in a file."
- "`$@` refers to all of a shell script's command-line arguments."
- "`$1`, `$2`, etc., refer to the first command-line argument, the second command-line argument, etc."
- "Place variables in quotes if the values might have spaces in them."
- "Letting users decide what files to process is more flexible and more consistent with built-in Unix commands."
---

We are finally ready to see what makes the shell such a powerful programming environment.
We are going to take the commands we repeat frequently and save them in files
so that we can re-run all those operations again later by typing a single command.
For historical reasons,
a bunch of commands saved in a file is usually called a **shell script**,
but make no mistake:
these are actually small programs.

Not only will writing shell scripts make your work faster ---
you won't have to retype the same commands over and over again ---
it will also make it more accurate (fewer chances for typos) and more reproducible.
If you come back to your work later (or if someone else finds your work and wants to build on it)
you will be able to reproduce the same results simply by running your script,
rather than having to remember or retype a long list of commands.

For this example, we'll agin use the `exercise-data/populations` directory containing population time series for six species, from the Living Planet Database of the [Living Planet Index](https://www.livingplanetindex.org/data_portal).

Let's start by going back to `populations/` and creating a new file, `middle.sh`, which will
become our shell script:

~~~
$ cd populations
$ nano middle.sh
~~~
{: .language-bash}

The command `nano middle.sh` opens the file `middle.sh` within the text editor 'nano'
(which runs within the shell).
If the file does not exist, it will be created.
We can use the text editor to directly edit the file -- we'll simply insert the following line:

~~~
head -n 10 shark.txt | tail -n 2
~~~
{: .source}

This is a variation on the pipe we constructed earlier:
it selects lines 9-10 of the file `shark.txt`.
Remember, we are *not* running it as a command just yet:
we are putting the commands in a file.

Then we save the file (`Ctrl-O` in nano),
 and exit the text editor (`Ctrl-X` in nano).
Check that the directory `populations` now contains a file called `middle.sh`.

Once we have saved the file,
we can ask the shell to execute the commands it contains.
Our shell is called `bash`, so we run the following command:

~~~
$ bash middle.sh
~~~
{: .language-bash}

~~~
19586   Carcharodon_carcharias  0       Dicken_M._L._M._J._Smale_et_al._(2013)._White_sharks_Carcharodon_carcharias_at_Bird_Island_Algoa_Bay_South_Africa._African_Journal_of_Marine_Science_35(2):_175-182     Elasmobranchii  Lamniformes    Lamnidae Carcharodon     carcharias              (Linnaeus_1758) Great_white_shark       Bird_Island_Algoa_Bay_Eastern_Cape      South_Africa    South_Africa    Africa  NULL    NULL    -33.5   25.775554       1       Marine  NULL    NULL   NULL     NULL    Tropical_and_subtropical_Indo-Pacific   Indian_Ocean    Unknown 0       Sightings_per_unit_effort_SPUE_(**hr)   Visual_census   NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    0.225   0.487   0       NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL
19587   Carcharodon_carcharias  0       Ryklief_R._P._A._Pistorius_et_al._(2014)._Spatial_and_seasonal_patterns_in_sighting_rate_and_life-history_composition_of_the_white_shark_Carcharodon_carcharias_at_Mossel_Bay_South_Africa._African_Journal_of_Marine_Science_36(4):_449-453    Elasmobranchii  Lamniformes     Lamnidae        Carcharodon     carcharias     (Linnaeus_1758)  Great_white_shark       Seal_Island_Mossel_Bay_Western_Cape     South_Africa    South_Africa    Africa NULL     NULL    -34.151089      22.119689       1       Marine  NULL    NULL    NULL    NULL    Tropical_and_subtropical_Indo-Pacific   Indian_Ocean    Unknown 0       Sightings_per_unit_effort_SPUE_(**hr)   Visual_census_Feb-Dec   NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    1.6809  1.0745  2.1702 NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL
~~~
{: .output}

Sure enough,
our script's output is exactly what we would get if we ran that pipeline directly.

> ## Text vs. Whatever
>
> We usually call programs like Microsoft Word or LibreOffice Writer "text
> editors", but we need to be a bit more careful when it comes to
> programming. By default, Microsoft Word uses `.docx` files to store not
> only text, but also formatting information about fonts, headings, and so
> on. This extra information isn't stored as characters and doesn't mean
> anything to tools like `head`: they expect input files to contain
> nothing but the letters, digits, and punctuation on a standard computer
> keyboard. When editing programs, therefore, you must either use a plain
> text editor, or be careful to save files as plain text.
{: .callout}

What if we want to select lines from an arbitrary file?
We could edit `middle.sh` each time to change the filename,
but that would probably take longer than typing the command out again
in the shell and executing it with a new file name.
Instead, let's edit `middle.sh` and make it more versatile:

~~~
$ nano middle.sh
~~~
{: .language-bash}

Now, within "nano", replace the text `shark.txt` with the special variable called `$1`:

~~~
head -n 10 "$1" | tail -n 2
~~~
{: .source}

Inside a shell script,
`$1` means 'the first filename (or other argument) on the command line'.
We can now run our script like this:

~~~
$ bash middle.sh shark.txt
~~~
{: .language-bash}

~~~
19586   Carcharodon_carcharias  0       Dicken_M._L._M._J._Smale_et_al._(2013)._White_sharks_Carcharodon_carcharias_at_Bird_Island_Algoa_Bay_South_Africa._African_Journal_of_Marine_Science_35(2):_175-182     Elasmobranchii  Lamniformes    Lamnidae Carcharodon     carcharias              (Linnaeus_1758) Great_white_shark       Bird_Island_Algoa_Bay_Eastern_Cape      South_Africa    South_Africa    Africa  NULL    NULL    -33.5   25.775554       1       Marine  NULL    NULL   NULL     NULL    Tropical_and_subtropical_Indo-Pacific   Indian_Ocean    Unknown 0       Sightings_per_unit_effort_SPUE_(**hr)   Visual_census   NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    0.225   0.487   0       NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL
19587   Carcharodon_carcharias  0       Ryklief_R._P._A._Pistorius_et_al._(2014)._Spatial_and_seasonal_patterns_in_sighting_rate_and_life-history_composition_of_the_white_shark_Carcharodon_carcharias_at_Mossel_Bay_South_Africa._African_Journal_of_Marine_Science_36(4):_449-453    Elasmobranchii  Lamniformes     Lamnidae        Carcharodon     carcharias     (Linnaeus_1758)  Great_white_shark       Seal_Island_Mossel_Bay_Western_Cape     South_Africa    South_Africa    Africa NULL     NULL    -34.151089      22.119689       1       Marine  NULL    NULL    NULL    NULL    Tropical_and_subtropical_Indo-Pacific   Indian_Ocean    Unknown 0       Sightings_per_unit_effort_SPUE_(**hr)   Visual_census_Feb-Dec   NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    1.6809  1.0745  2.1702 NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL
~~~
{: .output}

or on a different file like this:

~~~
$ bash middle.sh toad.txt
~~~
{: .language-bash}

~~~
9084    Bufo_bufo       0       Cooke_A._S._and_R._S._Oldham_(1995)._Establishment_of_populations_of_the_common_frog_Rana_temporaria_and_common_toad_Bufo_bufo_in_a_newly_created_reserve_following_translocation._Herpetological_Journal_5(1):_173-180.        Amphibia        Anura   Bufonidae       Bufo    bufo    NULL    (Linnaeus_1758) Common_toad     The_Boardwalks_Reserve_north_bank_of_the_River_Nene_near_the_western_edge_of_Peterborough       United_Kingdom  United_Kingdom Europe   Europe_and_Central_Asia Central_and_Western_Europe      52.55444        -0.26444        0       Freshwater     NULL     NULL    Palearctic      Temperate_floodplain_rivers_and_wetlands        NULL    NULL    NULL    0       Peak_total_toad_count   Counts_during_breeding_season   NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    0       NULL    127    311      181     328     306     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL
18832   Bufo_bufo       0       Jedrzejewska_B._et_al._(2002)._Seasonal_dynamics_and_breeding_of_amphibians_in_pristine_forests_(Bialowieza_National_Park_E_Poland)_in_dry_years._Folia_Zoologica_52(1):_77-86. Amphibia        Anura   Bufonidae       Bufo    bufo            (Linnaeus_1758) Common_toad     Oak-hornbeam-lime_forests_Bia?�owie??a_National_Park_East_Poland        Poland  Poland  Europe  Europe_and_Central_Asia Central_and_Western_Europe      52.75   23.916667      Terrestrial      Palearctic      Temperate_broadleaf_and_mixed_forests   NULL    NULL    NULL    NULL    NULL    0      Number_of_individuals*ha Live_trapping_on_8_30x30m_grids NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    71.5953 45.1319 NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL
~~~
{: .output}

> ## Double-Quotes Around Arguments
>
> For the same reason that we put the loop variable inside double-quotes,
> in case the filename happens to contain any spaces,
> we surround `$1` with double-quotes.
{: .callout}

Currently, we need to edit `middle.sh` each time we want to adjust the range of
lines that is returned.
Let's fix that by configuring our script to instead use three command-line arguments.
Each additional argument that we
provide will be accessible via the special variables `$1`, `$2`, `$3`,
which refer to the first, second, third command-line arguments, respectively.

Knowing this, we can use additional arguments to define the range of lines to
be passed to `head` and `tail` respectively:

~~~
$ nano middle.sh
~~~
{: .language-bash}

~~~
head -n "$2" "$1" | tail -n "$3"
~~~
{: .source}

We can now run:

~~~
$ bash middle.sh shark.txt 10 2
~~~
{: .language-bash}

~~~
19586   Carcharodon_carcharias  0       Dicken_M._L._M._J._Smale_et_al._(2013)._White_sharks_Carcharodon_carcharias_at_Bird_Island_Algoa_Bay_South_Africa._African_Journal_of_Marine_Science_35(2):_175-182     Elasmobranchii  Lamniformes    Lamnidae Carcharodon     carcharias              (Linnaeus_1758) Great_white_shark       Bird_Island_Algoa_Bay_Eastern_Cape      South_Africa    South_Africa    Africa  NULL    NULL    -33.5   25.775554       1       Marine  NULL    NULL   NULL     NULL    Tropical_and_subtropical_Indo-Pacific   Indian_Ocean    Unknown 0       Sightings_per_unit_effort_SPUE_(**hr)   Visual_census   NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    0.225   0.487   0       NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL
19587   Carcharodon_carcharias  0       Ryklief_R._P._A._Pistorius_et_al._(2014)._Spatial_and_seasonal_patterns_in_sighting_rate_and_life-history_composition_of_the_white_shark_Carcharodon_carcharias_at_Mossel_Bay_South_Africa._African_Journal_of_Marine_Science_36(4):_449-453    Elasmobranchii  Lamniformes     Lamnidae        Carcharodon     carcharias     (Linnaeus_1758)  Great_white_shark       Seal_Island_Mossel_Bay_Western_Cape     South_Africa    South_Africa    Africa NULL     NULL    -34.151089      22.119689       1       Marine  NULL    NULL    NULL    NULL    Tropical_and_subtropical_Indo-Pacific   Indian_Ocean    Unknown 0       Sightings_per_unit_effort_SPUE_(**hr)   Visual_census_Feb-Dec   NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    1.6809  1.0745  2.1702 NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL
~~~
{: .output}

By changing the arguments to our command we can change our script's
behaviour:

~~~
$ bash middle.sh shark.txt 4 3
~~~
{: .language-bash}

~~~
7701    Carcharodon_carcharias  0       Dudley_S._F._J._(2002)._Shark_Catch_Trends_and_Effort_Reduction_in_the_Beach_Protection_Program_KwaZulu-Natal_South_Africa._SCIENTIFIC_COUNCIL_MEETING_-_SEPTEMBER_2002_NAFO._*_Dudley_S._F._J._and_C._A._Simpfendorfer_(2006)._Population_status_of_14_shark_species_caught_in_the_protective_gillnets_off_KwaZulu-Natal_beaches_South_Africa_1978-2003._Marine_and_Freshwater_Research_57:_225-240.   Elasmobranchii  Lamniformes     Lamnidae       Carcharodon      carcharias              (Linnaeus_1758) Great_white_shark       Beaches_of_KwaZulu-Natal_province_South_Africa  South_Africa    South_Africa    Africa  NULL    NULL    -29.25  33.08333        0       Marine  NULL    NULL   NULL     NULL    Tropical_and_subtropical_Indo-Pacific   Indian_Ocean    Unknown 0       number*km-net_year      shark_net_catch_rates   NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   1.8      1.6     1.4     0.9     0.6     0.6     1.4     1.1     0.75    0.7     0.9     1.4     0.9     0.5     0.7    0.9      1.12    1.19    0.99    0.65    0.25    1.1     0.55    0.65    0.87    1.37    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL
9057    Carcharodon_carcharias  1       Cliff_G._S._F._J._Dudley_et_al._(1996)._Catches_of_white_sharks_in_KwaZulu-Natal_South_Africa_and_environmental_influences._Great_white_sharks:_the_biology_of_Carcharodon_carcharias._A._P._Klimley_and_D._G._Ainley:_351-362. Elasmobranchii  Lamniformes     Lamnidae        Carcharodon     carcharias      NULL    (Linnaeus_1758) Great_white_shark       Natal_Coast_South_Africa        South_Africa    South_Africa    Africa  NULL    NULL   -31.71667        30.38333        0       Marine  NULL    NULL    NULL    NULL    Tropical_and_subtropical_Indo-Pacific  Indian_Ocean     Unknown 0       CPUE_(no.*km-net*yr)    Shark_nets      NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    3.9     1.9     3.5     1.3     0.9    0.6      0.3     1.8     1.1     1.5     1.7     0.9     2.2     1.8     1.3     0.7     0.6     0.4     1.5     1.2    0.7      0.8     1       1.5     1       0.8     1.6     1.8     NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL
9058    Carcharodon_carcharias  0       Cliff_G._S._F._J._Dudley_et_al._(1996)._Catches_of_white_sharks_in_KwaZulu-Natal_South_Africa_and_environmental_influences._Great_white_sharks:_the_biology_of_Carcharodon_carcharias._A._P._Klimley_and_D._G._Ainley:_351-362. Elasmobranchii  Lamniformes     Lamnidae        Carcharodon     carcharias      NULL    (Linnaeus_1758) Great_white_shark       Richards_Bay_South_Africa       South_Africa    South_Africa    Africa  NULL    NULL   -28.85   32.23333        0       Marine  NULL    NULL    NULL    NULL    Tropical_and_subtropical_Indo-Pacific   Indian_Ocean    Unknown 0       CPUE_(no.*km-net*yr)    Shark_nets      NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    5.2     3.5     1.5     2       2       2       1.1    1.8      3.2     1.4     0.5     1.1     2.9     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL    NULL   NULL     NULL    NULL
~~~
{: .output}

This works,
but it may take the next person who reads `middle.sh` a moment to figure out what it does.
We can improve our script by adding some **comments** at the top:

~~~
$ nano middle.sh
~~~
{: .language-bash}

~~~
# Select lines from the middle of a file.
# Usage: bash middle.sh filename end_line num_lines
head -n "$2" "$1" | tail -n "$3"
~~~
{: .source}

A comment starts with a `#` character and runs to the end of the line.
The computer ignores comments,
but they're invaluable for helping people (including your future self) understand and use scripts.
The only caveat is that each time you modify the script,
you should check that the comment is still accurate:
an explanation that sends the reader in the wrong direction is worse than none at all.

What if we want to process many files in a single pipeline?
For example, if we want to sort our `.txt` files by length, we would type:

~~~
$ wc -l *.txt | sort -n
~~~
{: .language-bash}

because `wc -l` lists the number of lines in the files
(recall that `wc` stands for 'word count', adding the `-l` option means 'count lines' instead)
and `sort -n` sorts things numerically.
We could put this in a file,
but then it would only ever sort a list of `.txt` files in the current directory.
If we want to be able to get a sorted list of other kinds of files,
we need a way to get all those names into the script.
We can't use `$1`, `$2`, and so on
because we don't know how many files there are.
Instead, we use the special variable `$@`,
which means,
'All of the command-line arguments to the shell script'.
We also should put `$@` inside double-quotes
to handle the case of arguments containing spaces
(`"$@"` is special syntax and is equivalent to `"$1"` `"$2"` ...).

Here's an example:

~~~
$ nano sorted.sh
~~~
{: .language-bash}

~~~
# Sort files by their length.
# Usage: bash sorted.sh one_or_more_filenames
wc -l "$@" | sort -n
~~~
{: .source}

~~~
$ bash sorted.sh *.txt ../numbers.txt
~~~
{: .language-bash}

~~~
    1 python.txt
    3 bowerbird.txt
    4 wildcat.txt
    5 ../numbers.txt
   11 dunnock.txt
   18 shark.txt
   20 toad.txt
   62 total
~~~
{: .output}

> ## List Unique Species
>
> Remember, you can see the column headings for our population time series files as follows:
>
> ~~~
> $ head -n 1 six-species.csv
> ~~~
> {: .language-bash}
>
> Count manually to confirm that "Binomial" (the binomial species name) is the second column, and "Country" 
> is the 15th column and "System" is the 22nd column.
>
> We can use the command `cut -f 2,14,22 shark.txt | sort | uniq` to display
> the unique combinations of species, country and system in `shark.txt`. (Note, the columns appear ragged due to 
> the positioning of tab stops. But all the data are there.)
> In order to avoid having to type out this series of commands every time,
> a scientist may choose to write a shell script instead.
>
> Write a shell script called `species.sh` that takes any number of
> filenames as command-line arguments, and uses a variation of the above command
> to print a list of the unique species appearing in each of those files separately.
>
> > ## Solution
> >
> > ```
> > # Script to find unique combinations of species, country and
> > # system in tab-delimited text files where the data are in
> > # columns 2, 14 and 22.
> > # This script accepts any number of file names as command line arguments.
> >
> > # Loop over all files
> > for file in $@
> > do
> >    echo "Unique combinations of species, country and system within $file:"
> >    # Extract binomial species names, countries and systems
> >    cut -f 2,14,22 $file | sort | uniq
done
> > ```
> > {: .language-bash}
> {: .solution}
{: .challenge}


Suppose we have just run a series of commands that did something useful --- for example,
that created a graph we'd like to use in a paper.
We'd like to be able to re-create the graph later if we need to,
so we want to save the commands in a file.
Instead of typing them in again
(and potentially getting them wrong)
we can do this:

~~~
$ history | tail -n 5 > redo-figure-3.sh
~~~
{: .language-bash}

Depending on which commands we have typed recently, the file `redo-figure-3.sh` might now contain:

~~~
297 bash goostats.sh NENE01729B.txt stats-NENE01729B.txt
298 bash goodiff.sh stats-NENE01729B.txt /data/validated/01729.txt > 01729-differences.txt
299 cut -d ',' -f 2-3 01729-differences.txt > 01729-time-series.txt
300 ygraph --format scatter --color bw --borders none 01729-time-series.txt figure-3.png
301 history | tail -n 5 > redo-figure-3.sh
~~~
{: .source}

After a moment's work in an editor to remove the serial numbers on the commands,
and to remove the final line where we called the `history` command,
we have a completely accurate record of how we created that figure.

> ## Why Record Commands in the History Before Running Them?
>
> If you run the command:
>
> ~~~
> $ history | tail -n 5 > recent.sh
> ~~~
> {: .language-bash}
>
> the last command in the file is the `history` command itself, i.e.,
> the shell has added `history` to the command log before actually
> running it. In fact, the shell *always* adds commands to the log
> before running them. Why do you think it does this?
>
> > ## Solution
> > If a command causes something to crash or hang, it might be useful
> > to know what that command was, in order to investigate the problem.
> > Were the command only be recorded after running it, we would not
> > have a record of the last command run in the event of a crash.
> {: .solution}
{: .challenge}

In practice, most people develop shell scripts by running commands at the shell prompt a few times
to make sure they're doing the right thing,
then saving them in a file for re-use.
This style of work allows people to recycle
what they discover about their data and their workflow with one call to `history`
and a bit of editing to clean up the output
and save it as a shell script.


> ## Variables in Shell Scripts
>
> In the `populations` directory, imagine you have a shell script called `script.sh` containing the
> following commands:
>
> ~~~
> head -n $2 $1
> tail -n $3 $1
> ~~~
> {: .language-bash}
>
> While you are in the `populations` directory, you type the following command:
>
> ~~~
> $ bash script.sh '*.txt' 1 1
> ~~~
> {: .language-bash}
>
> Which of the following outputs would you expect to see?
>
> 1. All of the lines between the first and the last lines of each file ending in `.txt`
>    in the `populations` directory
> 2. The first of each file ending in `.txt` in the `populations` directory, followed by
>    the last line of each such file
> 3. The first and the last line of each file in the `populations` directory
> 4. An error because of the quotes around `*.txt`
>
> > ## Solution
> > The correct answer is 2.
> >
> > The special variables $1, $2 and $3 represent the command line arguments given to the
> > script, such that the commands run are:
> >
> > ```
> > $ head -n 1 bowerbird.txt  dunnock.txt  python.txt  shark.txt  toad.txt  wildcat.txt
> > $ tail -n 1 bowerbird.txt  dunnock.txt  python.txt  shark.txt  toad.txt  wildcat.txt
> > ```
> > {: .language-bash}
> > The shell does not expand `'*.pdb'` because it is enclosed by quote marks.
> > As such, the first argument to the script is `'*.txt'` which gets expanded within the
> > script by `head` and `tail`.
> >
> > Note, `python.txt` only contains a single line, so for this file the line is output twice (being both
> > the first line *and* the last line.)
> {: .solution}
{: .challenge}

> ## Find the Longest File With a Given Extension
>
> Write a shell script called `longest.sh` that takes the name of a
> directory and a filename extension as its arguments, and prints
> out the name of the file with the most lines in that directory
> with that extension. For example:
>
> ~~~
> $ bash longest.sh shell-lesson-data/exercise-data/populations txt
> ~~~
> {: .language-bash}
>
> would print the name of the `.txt` file in `shell-lesson-data/exercise-data/populations` that has
> the most lines.
>
> Feel free to test your script on another directory e.g.
> ~~~
> $ bash longest.sh shell-lesson-data/exercise-data/writing txt
> ~~~
> {: .language-bash}
>
> > ## Solution
> >
> > ```
> > # Shell script which takes two arguments:
> > #    1. a directory name
> > #    2. a file extension
> > # and prints the name of the file in that directory
> > # with the most lines which matches the file extension.
> >
> > wc -l $1/*.$2 | sort -g | tail -n 2 | head -n 1
> > ```
> > {: .language-bash}
> >
> > The first part of the pipeline, `wc -l $1/*.$2 | sort -g`, counts
> > the lines in each file and sorts them numerically (largest last). When
> > there's more than one file, `wc` also outputs a final summary line,
> > giving the total number of lines across _all_ files.  We use `tail
> > -n 2 | head -n 1` to throw away this last line.
> >
> > With `wc -l $1/*.$2 | sort -n | tail -n 1` we'll see the final summary
> > line: we can build our pipeline up in pieces to be sure we understand
> > the output.
> >
> {: .solution}
{: .challenge}

> ## Script Reading Comprehension
>
> For this question, consider the `shell-lesson-data/exercise-data/populations` directory once again.
> This contains a number of files containing population time series data, in addition to any other files you
> may have created.
> Explain what each of the following three scripts would do when run as
> `bash script1.sh *.txt`, `bash script2.sh *.txt`, and `bash script3.sh *.txt` respectively.
>
> ~~~
> # Script 1
> echo *.*
> ~~~
> {: .language-bash}
>
> ~~~
> # Script 2
> for filename in $1 $2 $3
> do
>     cat $filename
> done
> ~~~
> {: .language-bash}
>
> ~~~
> # Script 3
> echo $@.txt
> ~~~
> {: .language-bash}
>
> > ## Solutions
> > In each case, the shell expands the wildcard in `*.txt` before passing the resulting
> > list of file names as arguments to the script.
> >
> > Script 1 would print out a list of all files containing a dot in their name.
> > The arguments passed to the script are not actually used anywhere in the script.
> >
> > Script 2 would print the contents of the first 3 files with a `.txt` file extension.
> > `$1`, `$2`, and `$3` refer to the first, second, and third argument respectively.
> >
> > Script 3 would print all the arguments to the script (i.e. all the `.txt` files),
> > followed by `.txt`.
> > `$@` refers to *all* the arguments given to a shell script.
> > ```
> > bowerbird.txt dunnock.txt python.txt script.txt shark.txt toad.txt wildcat.txt.txt
> > ```
> > {: .output}
> {: .solution}
{: .challenge}

> ## Debugging Scripts
>
> Suppose you have saved the following script in a file called `do-errors.sh`
> in Nelle's `north-pacific-gyre/scripts` directory:
>
> ~~~
> # Calculate stats for data files.
> for datafile in "$@"
> do
>     echo $datfile
>     bash goostats.sh $datafile stats-$datafile
> done
> ~~~
> {: .language-bash}
>
> When you run it from the `north-pacific-gyre` directory:
>
> ~~~
> $ bash do-errors.sh NENE*A.txt NENE*B.txt
> ~~~
> {: .language-bash}
>
> the output is blank.
> To figure out why, re-run the script using the `-x` option:
>
> ~~~
> $ bash -x do-errors.sh NENE*A.txt NENE*B.txt
> ~~~
> {: .language-bash}
>
> What is the output showing you?
> Which line is responsible for the error?
>
> > ## Solution
> > The `-x` option causes `bash` to run in debug mode.
> > This prints out each command as it is run, which will help you to locate errors.
> > In this example, we can see that `echo` isn't printing anything. We have made a typo
> > in the loop variable name, and the variable `datfile` doesn't exist, hence returning
> > an empty string.
> {: .solution}
{: .challenge}

{% include links.md %}
