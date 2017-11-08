# check for the right number of input arguments
if [ $# -ne 2 ]
  then
    echo "goodstats file1 file2"
    echo "call goostats with two arguments"
    exit 1
fi

sleep 2
head -n 3 $1 | cut -d , -f 1 | sort | uniq > $2
