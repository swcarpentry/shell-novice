---
layout: page
title: The Unix Shell
subtitle: Introducing the Shell
minutes: 
---
In a shell script (`bash`) you wish to run the `foo` command against each entry in the current directory. Which of the following is correct:

1. 
~~~ {.bash}
for * in i
do
  foo $i
done
~~~

2.
~~~ {.bash}
for i in ls
do
  foo $i
done
~~~

3.
~~~ {.bash}
for i in *
do
  foo $i
done
~~~

4. 
~~~ {.bash}
for $i in *
do
  foo $i
done
~~~

Answers and analysis:

Note: I’m only looking at line 1 here. The rest should be the same.

1. Wrong. Have realised they need to use `*` to identify all directory entries but get the order mixed up with the variable.
2. Wrong. Have realised they need the list of all entries in the directory so use the `ls` command as they know this lists all entries in a directory.
3. Correct
4. Wrong. Know they need a variable (`$i`) to hold each element in one at a time but fail to remember that this isn’t a request for the contents of the variable.
