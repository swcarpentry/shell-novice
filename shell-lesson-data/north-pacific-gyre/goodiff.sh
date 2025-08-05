#!/bin/bash
# Incomplete goo comparator by Nelle Nemo.

# check for the right number of input arguments
if [ $# -ne 2 ]
  then
    echo "call goodiff with two arguments:"
    echo "  $0 file1 file2"
    exit 0
fi

# check read permissions
if [ ! -f "$1" ]
then
    echo "error reading $1"
    exit 2
elif [ ! -f "$2" ]
then
    echo "error reading $2"
    exit 2
fi

# demo version, just return a random number or "files are identical"
if [ "$1" == "$2" ]
then
    echo "files are identical"
else
    echo 0.$RANDOM
fi
