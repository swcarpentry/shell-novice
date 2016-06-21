#!/usr/bin/env bash

if [ -d "_episodes_rmd" ] ; then
    Rscript -e "source('bin/generate_md_episodes.R')"
fi
