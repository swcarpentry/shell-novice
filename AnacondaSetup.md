---
layout: page
title: Anaconda Setup
permalink: /setup/
---

# Setup

## Step 1: Install Anaconda 

To install Anaconda, follow these [instructions][instruc]
You have two options:

1. Graphical Install (for Windows or Mac);

2. Command Line Install (for Mac or Linux)

If you have not used the command line before, you should pick the Graphical Install option.

Make sure to pick the appropriate install option for your system (32 vs. 64-bit and Windows, Mac or Linux). 

If you use the Graphical Install option, you should keep defaults (add Anaconda to path and use Anaconda as default python).

You will not need Anaconda Cloud for anything at this point.

## Step 2: Create a new Environment in Anaconda Navigator

- After installing Anaconda, open Anaconda Navigator 
- Create a new Environment in the Environment tab
- Click the Environments tab
- Create new Environment and pick a name (e.g. swc)

## Step 3: Install necessary packages

- To enable UNIX commands, install m2-base
- To enable Git commands, install m2-git
- To enable SQL commands, install sqlite
- To enable R commands, install r-essentials and rpy2 

## Step 3: Run an Application in the Environment you just created

Return to Applications tab, pick the Environment you just created (e.g. swc)


Now you have three main options:
1. Install Jupyter QtConsole (for the command line use of git, sql, R and python) or 
2. Open Jupyter Notebook (if your instructor provides you with a ipynb file) or 
3. Install Rstudio (useful for R lessons only, ask your instructor)

You are now ready for every Software and Data Carpentry lesson!
[instruc]: https://docs.continuum.io/anaconda/install