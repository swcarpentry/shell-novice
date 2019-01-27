---
title: "grep"
author: "Ziqi Zhu"
output: pdf_document
---

## linux grep command with usage examples

I believe the usage of grep command will be much more common in the futural bioinformatics
methods. So I do want to add this missing part to the "The unix Shell: Pipes and Filters" content.

1.1 Install the grep  
The grep command which stands for “global regular expression print,” processes text line by line
and prints any lines which match a specified pattern. If it is not installed in your computer, you
can easilly installed in your package manager.  
  
$ sudo apt-get install   grep #Debian/Ubuntu   
$ sudo yum install       grep #RHEL/CentOS/Fedora  
## Including Plots
**Syntax:**  
**grep [options] pattern [files]**  
  
**Sample example**   
Consider this file as an input.  
  
In [3]: %%bash  
cat id.txt  
My name is Nirvana_in_File.  
I am born in 1992.  
I am a boy.  
I am from China.  

1. Case insensitive search : The -i option enables to search for a string case insensitively in the
give file.  
  
In [4]: %%bash  
grep -i 'AM' id.txt  
My name is Nirvana_in_File.  
I am born in 1992.  
I am a boy.   
I am from China.  

2. Displaying the count of number of matches : We can find the number of lines that matches
the given string/pattern.  
  
In [5]: %%bash    
grep -c 'I' id.txt   
