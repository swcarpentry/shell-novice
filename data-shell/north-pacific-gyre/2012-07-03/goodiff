# check for the right number of input arguments
if [ $# -ne 2 ]
  then
    echo "goodiff file1 file2"
    echo "call goodiff with two arguments"
    exit 1
fi


# difference of two input files
# demo version, just return a random number or "files are identical"
if [ "$1" == "$2" ]
then
    echo "files are identical"
else
    echo 0.$RANDOM
fi
