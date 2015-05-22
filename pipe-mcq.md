---
layout: page
title: The Unix Shell
subtitle: Piping and Filtering
minutes: 
---
The file named `Samples` contains a lot of text lines. In unix, which one(s) of the commands below would give a count of how many times a word `gmor` occurred in the file?

1.
~~~{.bash}
grep gmor Samples | wc
~~~
2.
~~~{.bash}
wc gmor Samples
~~~
3.
~~~{.bash}
grep gmor Samples > wc
~~~
4.
~~~{.bash}
grep gmor Samples
~~~

Diagnostics:
The point is to understand that `wc` counts lines, that `grep` selects lines where a pattern is present and the difference between `>` and `|`. Another important thing to understand is how to chain elements together.

1. is correct
2. have understood that `wc` counts words, missed the meaning of `grep`, and also not figured out how to chain commands.
3. have not understood the difference between pipe and redirect.
4. have understood `grep`, but not that `wc` counts lines
