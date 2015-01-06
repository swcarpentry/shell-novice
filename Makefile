# Files.
MARKDOWN = $(wildcard *.md)
EXCLUDES = README.md LAYOUT.md FAQ.md DESIGN.md
SRC_PAGES = $(filter-out $(EXCLUDES), $(MARKDOWN))
DST_PAGES = $(patsubst %.md,%.html,$(SRC_PAGES))

# Pandoc filters
FILTERS = $(wildcard tools/filters/*.py)

# Inclusions.
INCLUDES = \
	-Vheader="$$(cat _includes/header.html)" \
	-Vbanner="$$(cat _includes/banner.html)" \
	-Vfooter="$$(cat _includes/footer.html)" \
	-Vjavascript="$$(cat _includes/javascript.html)"

# Default action is to show what commands are available.
all : commands

## preview  : Build website locally for checking.
preview : $(DST_PAGES)

# Pattern for slides (different parameters and template).
motivation.html : motivation.md _layouts/slides.html
	pandoc -s -t html \
	--template=_layouts/slides \
	-o $@ $<

# Pattern to build a generic page.
%.html : %.md _layouts/page.html $(FILTERS)
	pandoc -s -t html \
	--template=_layouts/page \
	--filter=tools/filters/blockquote2div.py \
	--filter=tools/filters/id4glossary.py \
	$(INCLUDES) \
	-o $@ $<

# Pattern to convert R Markdown to Markdown.
%.md: %.Rmd $(R_CHUNK_OPTS)
	Rscript -e "knitr::knit('$$(basename $<)', output = '$$(basename $@)')"

## unittest : Run unit test (for Python 2 and 3)
unittest: tools/check.py tools/validation_helpers.py tools/test_check.py
	cd tools/ && python2 test_check.py
	cd tools/ && python3 test_check.py

## commands : Display available commands.
commands : Makefile
	@sed -n 's/^##//p' $<

## settings : Show variables and settings.
settings :
	@echo 'SRC_PAGES:' $(SRC_PAGES)
	@echo 'DST_PAGES:' $(DST_PAGES)

## clean    : Clean up temporary and intermediate files.
clean :
	@rm -rf $$(find . -name '*~' -print)

# very-clean : Remove generated HTML.
very-clean :
	@rm -f $(DST_PAGES)
