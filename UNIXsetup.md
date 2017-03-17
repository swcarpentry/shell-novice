
---
layout: page
title: Unix lesson file download instructions
permalink: /setup/
---

You need to download some files to follow this lesson:

1. Download [shell-novice-data.zip]({{ page.root }}/data/shell-novice-data.zip) to your root directory.
2. Unzip/extract the file (ask your instructor if you need help with this step). You should end up with a new folder called data-shell on your Desktop.
3. Open a terminal and type:

In the lesson, you will find out how to access the data in this folder.  

If you want to try downloading the file using qtconsole 


```python
cd Desktop
```


```python
!curl -O http://swcarpentry.github.io/shell-novice/data/shell-novice-data.zip
```


```python
!conda install m2-unzip
```


```python
!unzip shell-novice-data.zip
```


```python
cd
```
