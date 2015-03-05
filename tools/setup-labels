#!/bin/bash
#
## This script sets up labels for issues in your GitHub repository.
##
## Syntax:
##
##     $ tools/setup-label OWNER REPO
##
## Parameters:
##
## - OWNER: GitHub username of the owner of the repository
## - REPO: the name of the repository
##
## Example:
##
## For set up the labels at https://github.com/wking/swc-modular-shell use
##
##     $ tools/setup-label wking swc-modular-shell

CURL_FLAGS="--silent --fail"

if test $# -lt 2
then
    echo "Missing parameters."
    echo
    grep '^##' tools/setup-labels | sed 's/## //' | sed 's/##//'
    exit 1
fi

OWNER=$1
REPO=$2
GITHUB_URL=https://github.com/${OWNER}/${REPO}
LABELS=(bug    build  defer  discussion documentation enhancement newcomer-friendly upstream work-in-progress)
COLORS=(FF0000 551033 66FF00 0000FF     D4318C        E0115F      FCE883            83F52C   545AA7)
LABELS_TO_DELETE=(duplicate filed-by-newcomer getting-started help%20wanted help-wanted invalid left-as-was suitable-for-newcomer question wontfix)

# Test if repository exists
curl -s --head ${GITHUB_URL} | head -n 1 | grep -q "HTTP/1.[01] [23].."
if test $? -ne 0
then
    echo "ERROR: this repository doesn't exist"
    exit $?
fi

echo "Before setup the labels for ${GITHUB_URL}"
echo "you must provide some informations."
echo "Your GitHub username:"
read USERNAME
echo "Your GitHub password:"
read -s PASSWORD

# Delete labels
for INDEX in $(seq 0 $((${#LABELS_TO_DELETE[*]} - 1)))
do
    # Try to delete label
    curl ${CURL_FLAGS} -X DELETE \
        -u ${USERNAME}:${PASSWORD} \
        "https://api.github.com/repos/${OWNER}/${REPO}/labels/${LABELS_TO_DELETE[${INDEX}]}" > /dev/null
done
# Create labels
for INDEX in $(seq 0 $((${#LABELS[*]} - 1)))
do
    # Try create new label
    curl ${CURL_FLAGS} -X POST \
        -u ${USERNAME}:${PASSWORD} \
        -d "{\"name\":\"${LABELS[${INDEX}]}\",\"color\":\"${COLORS[${INDEX}]}\"}" \
        "https://api.github.com/repos/${OWNER}/${REPO}/labels" > /dev/null
    if test $? -ne 0
    then
        # Try to fix label color
        curl ${CURL_FLAGS} -X PATCH \
            -u ${USERNAME}:${PASSWORD} \
            -d "{\"name\":\"${LABELS[${INDEX}]}\",\"color\":\"${COLORS[${INDEX}]}\"}" \
            "https://api.github.com/repos/${OWNER}/${REPO}/labels/${LABELS[${INDEX}]}" > /dev/null
        if test $? -ne 0
        then
            echo "Failed when trying to create and update the label ${LABELS[${INDEX}]}."
            echo "Please check at ${GITHUB_URL}/labels"
            echo ""
            echo "If you find a bug report it at"
            echo "https://github.com/swcarpentry/lesson-template/."
        fi
    fi
done
