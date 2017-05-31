
---
layout: page
title: Miniconda Setup
permalink: /setup/
---

# Miniconda Setup Instructions

## Step 1: Install Miniconda 

To install Miniconda, follow these [instructions][instruc] 

Make sure to download the Python 3.6 version from the [installation page][install]

## Step 2: Setup an environment
Open up Anaconda prompt and type in or copy the command below

```
!conda create -n swc python=3.6 m2-base jupyter m2-git sqlite r-essentials rpy2 m2-make 
```

## Step 3: Open the environment you created
If you use Windows, type !activate swc below
If you use Linux or OS X, type !source activate swc below

```
!activate swc
```
## Step 4: Open up Jupyter QtConsole

```
!jupyter qtconsole
```

You are now ready for every Software and Data Carpentry lesson!

[instruc]: https://conda.io/docs/install/quick.html
[install]: https://conda.io/miniconda.html