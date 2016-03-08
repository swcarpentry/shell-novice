---
layout: page
title: The Unix Shell
subtitle: Backticks
minutes: 15?
---
> ## Learning Objectives {.objectives}
>
> *   Loop over 


In the @@loops exercise, we saw how to improve productivity by letting the computer do the repetitive work.
Often, this involves doing the same thing over and over to a whole set of files, e.g.:

~~~{.bash}
$ cd data/pdb
$ mkdir sorted
$ for file in *cyclo*pdb; do
>     sort $file > sorted/sorted-$file
> done
~~~

Another example is a so-called *parameter sweep*, where you run the same program a number of times
with different arguments. Here is a fictitional example:

~~~{.bash}
$ for cutoff in 0.001 0.01 0.05; do
>   run_prediction.sh --input ALL-data.txt --pvalue $cutoff --output results-$cutoff.txt
> done
~~~

In the first example, the shell generated the list of things to loop
over using the wildcard mechanism seen in @@@WHERE. This results in the `cyclo*.pdf` being replaced with
`cyclobutane.pdb cyclohexanol.pd cyclopropane.pd ethylcyclohexane.pdb` just before the loop takes off.

In the second example, the things to loop over are spelled out by you
(here: `"0.001 0.01 0.05"` ).

## Looping over the words in a string {.callout}
>
> In the previous example you could make your code neater and self-documenting by putting the cutoff values
> in a separate string:
> ~~~
> $ cutoffs="0.001 0.01 0.05"
> $ for cutoff in $cuttoffs; do
>   run_prediction.sh --input ALL-data.txt --pvalue $cutoff --output results-cutoff=$cutoff.txt
> done
> ~~~
> This works because, just as with the filename wildcards, `$cutoffs` is replaced with `0.001 0.01 0.05` just
> before the loop takes off. 

However, you don't always know in advance what you have to loop over. It
could well be that it is not a simple file name pattern (in which case
you can use wildcards), or that it is not a small, known set of values
(in which case you can write them out explicitly as was done in the
second example). 

You know (see @@@ 03) how to redirect input and output from programs using
`<` and `>`, and how to connect the output of one program to the input
of another program using `|`. But those mechanisms cannot be used to
specify values that are used as arguments to the programs.

For instance, it would be useful to create the filename 'on the
fly'. For instance, if some program called `qualitycontrol` is run periodically
(and/or unpredictably), it may be necessary to supply the time stamp as
an argument to keep the output files apart, along the following lines:

~~~
qualitycontrol --inputdir /data/incoming/  --output qcresults-THE_RIGHT_TIMESTAMP_HERE.txt
~~~

In the above example, the value indicated with
'THE_RIGHT_TIMESTAMP_HERE' has of course to be computed at the moment
the script runs.


