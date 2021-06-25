## ========================================
## Commands for both workshop and lesson websites.

# Settings
MAKEFILES=Makefile $(wildcard *.mk)
JEKYLL=bundle config set --local path .vendor/bundle && bundle install && bundle update && bundle exec jekyll
PARSER=bin/markdown_ast.rb
DST=_site

# Find Docker
DOCKER := $(shell which docker 2>/dev/null)

# Check Python 3 is installed and determine if it's called via python3 or python
# (https://stackoverflow.com/a/4933395)
PYTHON3_EXE := $(shell which python3 2>/dev/null)
ifneq (, $(PYTHON3_EXE))
  ifeq (,$(findstring Microsoft/WindowsApps/python3,$(subst \,/,$(PYTHON3_EXE))))
    PYTHON := $(PYTHON3_EXE)
  endif
endif

ifeq (,$(PYTHON))
  PYTHON_EXE := $(shell which python 2>/dev/null)
  ifneq (, $(PYTHON_EXE))
    PYTHON_VERSION_FULL := $(wordlist 2,4,$(subst ., ,$(shell python --version 2>&1)))
    PYTHON_VERSION_MAJOR := $(word 1,${PYTHON_VERSION_FULL})
    ifeq (3, ${PYTHON_VERSION_MAJOR})
      PYTHON := $(PYTHON_EXE)
    else
      PYTHON_NOTE = "Your system does not appear to have Python 3 installed."
    endif
  else
      PYTHON_NOTE = "Your system does not appear to have any Python installed."
  endif
endif


# Default target
.DEFAULT_GOAL := commands

## I. Commands for both workshop and lesson websites
## =================================================

.PHONY: site docker-serve repo-check clean clean-rmd

## * serve            : render website and run a local server
serve : lesson-md index.md
	${JEKYLL} serve

## * site             : build website but do not run a server
site : lesson-md index.md
	${JEKYLL} build

## * docker-serve     : use Docker to serve the site
docker-serve :
ifeq (, $(DOCKER))
	$(error Your system does not appear to have Docker installed)
else
	@$(DOCKER) pull carpentries/lesson-docker:latest
	@$(DOCKER) run --rm -it \
		-v $${PWD}:/home/rstudio \
		-p 4000:4000 \
		-p 8787:8787 \
		-e USERID=$$(id -u) \
		-e GROUPID=$$(id -g) \
		carpentries/lesson-docker:latest
endif

## * repo-check       : check repository settings
repo-check : python
	@${PYTHON} bin/repo_check.py -s .

## * clean            : clean up junk files
clean :
	@rm -rf ${DST}
	@rm -rf .sass-cache
	@rm -rf bin/__pycache__
	@rm -rf .vendor
	@rm -rf .bundle
	@rm -f Gemfile.lock
	@find . -name .DS_Store -exec rm {} \;
	@find . -name '*~' -exec rm {} \;
	@find . -name '*.pyc' -exec rm {} \;

## * clean-rmd        : clean intermediate R files (that need to be committed to the repo)
clean-rmd :
	@rm -rf ${RMD_DST}
	@rm -rf fig/rmd-*


##
## II. Commands specific to workshop websites
## =================================================

.PHONY : workshop-check

## * workshop-check   : check workshop homepage
workshop-check : python
	@${PYTHON} bin/workshop_check.py .


##
## III. Commands specific to lesson websites
## =================================================

.PHONY : lesson-check lesson-md lesson-files lesson-fixme install-rmd-deps

# RMarkdown files
RMD_SRC = $(wildcard _episodes_rmd/*.Rmd)
RMD_DST = $(patsubst _episodes_rmd/%.Rmd,_episodes/%.md,$(RMD_SRC))

# Lesson source files in the order they appear in the navigation menu.
MARKDOWN_SRC = \
  index.md \
  CODE_OF_CONDUCT.md \
  setup.md \
  $(sort $(wildcard _episodes/*.md)) \
  reference.md \
  $(sort $(wildcard _extras/*.md)) \
  LICENSE.md

# Generated lesson files in the order they appear in the navigation menu.
HTML_DST = \
  ${DST}/index.html \
  ${DST}/conduct/index.html \
  ${DST}/setup/index.html \
  $(patsubst _episodes/%.md,${DST}/%/index.html,$(sort $(wildcard _episodes/*.md))) \
  ${DST}/reference.html \
  $(patsubst _extras/%.md,${DST}/%/index.html,$(sort $(wildcard _extras/*.md))) \
  ${DST}/license/index.html

## * install-rmd-deps : Install R packages dependencies to build the RMarkdown lesson
install-rmd-deps:
	@${SHELL} bin/install_r_deps.sh

## * lesson-md        : convert Rmarkdown files to markdown
lesson-md : ${RMD_DST}

_episodes/%.md: _episodes_rmd/%.Rmd install-rmd-deps
	@mkdir -p _episodes
	@$(SHELL) bin/knit_lessons.sh $< $@

## * lesson-check     : validate lesson Markdown
lesson-check : python lesson-fixme
	@${PYTHON} bin/lesson_check.py -s . -p ${PARSER} -r _includes/links.md

## * lesson-check-all : validate lesson Markdown, checking line lengths and trailing whitespace
lesson-check-all : python
	@${PYTHON} bin/lesson_check.py -s . -p ${PARSER} -r _includes/links.md -l -w --permissive

## * unittest         : run unit tests on checking tools
unittest : python
	@${PYTHON} bin/test_lesson_check.py

## * lesson-files     : show expected names of generated files for debugging
lesson-files :
	@echo 'RMD_SRC:' ${RMD_SRC}
	@echo 'RMD_DST:' ${RMD_DST}
	@echo 'MARKDOWN_SRC:' ${MARKDOWN_SRC}
	@echo 'HTML_DST:' ${HTML_DST}

## * lesson-fixme     : show FIXME markers embedded in source files
lesson-fixme :
	@grep --fixed-strings --word-regexp --line-number --no-messages FIXME ${MARKDOWN_SRC} || true

##
## IV. Auxililary (plumbing) commands
## =================================================

.PHONY : commands python

## * commands         : show all commands.
commands :
	@sed -n -e '/^##/s|^##[[:space:]]*||p' $(MAKEFILE_LIST)

python :
ifeq (, $(PYTHON))
	$(error $(PYTHON_NOTE))
else
	@:
endif

index.md :
ifeq (, $(wildcard index.md))
	$(error index.md not found)
else
	@:
endif
