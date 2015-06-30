PANDOC ?= pandoc
PANDOC_FLAGS = --smart

# R Markdown files.
SRC_RMD = $(wildcard ??-*.Rmd)
DST_RMD = $(patsubst %.Rmd,%.md,$(SRC_RMD))

# All Markdown files (hand-written and generated).
ALL_MD = $(wildcard *.md) $(DST_RMD)
EXCLUDE_MD = README.md LAYOUT.md FAQ.md DESIGN.md CONTRIBUTING.md CONDUCT.md
SRC_MD = $(filter-out $(EXCLUDE_MD),$(ALL_MD))
DST_HTML = $(patsubst %.md,%.html,$(SRC_MD))

# All outputs.
DST_ALL = $(DST_HTML)

# Pandoc filters.
FILTERS = $(wildcard tools/filters/*.py)

# Inclusions.
INCLUDES = \
	-Vheader="$$(cat _includes/header.html)" \
	-Vbanner="$$(cat _includes/banner.html)" \
	-Vfooter="$$(cat _includes/footer.html)" \
	-Vjavascript="$$(cat _includes/javascript.html)"

# Chunk options for knitr (used in R conversion).
R_CHUNK_OPTS = tools/chunk-options.R

# Ensure that intermediate (generated) Markdown files from R are kept.
.SECONDARY: $(DST_RMD)

# Default action is to show what commands are available.
all : commands

## check    : Validate all lesson content against the template.
check: $(ALL_MD)
	python tools/check.py .

## clean    : Clean up temporary and intermediate files.
clean :
	@rm -rf $$(find . -name '*~' -print)

## preview  : Build website locally for checking.
preview : $(DST_ALL)

# Pattern to build a generic page.
%.html : %.md _layouts/page.html $(FILTERS)
	${PANDOC} -s -t html \
	    ${PANDOC_FLAGS} \
	    --template=_layouts/page \
	    --filter=tools/filters/blockquote2div.py \
	    --filter=tools/filters/id4glossary.py \
	    $(INCLUDES) \
	    -o $@ $<

# Pattern to convert R Markdown to Markdown.
%.md: %.Rmd $(R_CHUNK_OPTS) tools/check_knitr_version.R
	Rscript -e "source('tools/check_knitr_version.R')"
	Rscript -e "knitr::knit('$$(basename $<)', output = '$$(basename $@)')"

## commands : Display available commands.
commands : Makefile
	@sed -n 's/^##//p' $<

## settings : Show variables and settings.
settings :
	@echo 'PANDOC:' $(PANDOC)
	@echo 'SRC_RMD:' $(SRC_RMD)
	@echo 'DST_RMD:' $(DST_RMD)
	@echo 'SRC_MD:' $(SRC_MD)
	@echo 'DST_HTML:' $(DST_HTML)

## unittest : Run internal tests to ensure the validator is working correctly (for Python 2 and 3).
unittest: tools/check.py tools/validation_helpers.py tools/test_check.py
	cd tools/ && python2 test_check.py
	cd tools/ && python3 test_check.py
