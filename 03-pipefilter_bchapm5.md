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

> ## New Exersize - cut file list by count {.challenge}
>
> The command:
> 
> ~~~
> $  wc -l *.pdb | sort -n | tail -37
> ~~~
> 
> produces the following output:
> 
> ~~~
>   20 cubane.pdb
>   20 styrene.pdb
>   21 pentane.pdb
>   22 cinnamaldehyde.pdb
>   23 cyclohexanol.pdb
>   23 vanillin.pdb
>   24 ascorbic-acid.pdb
>   25 pyridoxal.pdb
>   25 tnt.pdb
>   30 aldrin.pdb
>   30 camphene.pdb
>   30 octane.pdb
>   33 citronellal.pdb
>   33 nerol.pdb
>   34 tyrian-purple.pdb
>   35 menthol.pdb
>   36 mint.pdb
>   41 mustard.pdb
>   42 thiamine.pdb
>   43 piperine.pdb
>   44 morphine.pdb
>   47 codeine.pdb
>   49 lactose.pdb
>   49 maltose.pdb
>   49 sucrose.pdb
>   51 norethindrone.pdb
>   51 strychnine.pdb
>   52 quinine.pdb
>   53 lsd.pdb
>   53 testosterone.pdb
>   54 ethylcyclohexane.pdb
>   54 tuberin.pdb
>   55 vitamin-a.pdb
>   78 cholesterol.pdb
>   79 heme.pdb
>  248 lanoxin.pdb
> 1808 total
> ~~~
> 
> if we only wanted to see the first five row of output what command
> could we use
