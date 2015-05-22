The file `input.txt` contains the following lines:
~~~{.output}
1234
2345
1
45
~~~

In which order will the lines be returned by the following command:
~~~{.bash}
sort -r input.txt
~~~
1.
~~~{.bash}
1
1234
2345
45
~~~
2.
~~~{.bash}
1
45
1234
2345
~~~
3.
~~~{.bash}
45
2345
1234
1
~~~
4.
~~~{.bash}
2345
1234
45
1
~~~

The point of the exercise is testing the understanding of alphabetical versus numerical sort of numbers

1. They have missed the `-r` argument
2. They have confused `-r` with `-n` to pick this one
3. Correct answer
4. They have confused alphabetical sort with numerical sort
