# Files.
SRC_PAGES = $(wildcard *.md)
DST_PAGES = $(patsubst %.md,%.html,$(SRC_PAGES))

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
%.html : %.md _layouts/page.html
	pandoc -s -t html \
	--template=_layouts/page \
	--filter=tools/blockquote2div.py \
	$(INCLUDES) \
	-o $@ $<

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
