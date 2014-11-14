# Directories.
SRC_DIR = .
DST_DIR = ..

# Files.
SRC_PAGES = $(wildcard *.md)
DST_PAGES = $(patsubst %.md,$(DST_DIR)/%.html,$(SRC_PAGES))

# Inclusions.
INCLUDES = \
	-Vheader="$$(cat ../_includes/header.html)" \
	-Vbanner="$$(cat ../_includes/banner.html)" \
	-Vfooter="$$(cat ../_includes/footer.html)" \
	-Vjavascript="$$(cat ../_includes/javascript.html)"

# Default action is to show what commands are available.
all : commands

## preview  : Build website locally for checking.
preview : $(DST_PAGES)

# Pattern for slides (different parameters and template).
$(DST_DIR)/motivation.html : $(SRC_DIR)/motivation.md ../_layouts/slides.html
	pandoc -s -t html \
	--template=../_layouts/slides \
	-o $@ $<

# Pattern to build a generic page.
$(DST_DIR)/%.html : $(SRC_DIR)/%.md ../_layouts/page.html
	pandoc -s -t html \
	--template=../_layouts/page \
	--filter=../tools/blockquote2div.py \
	$(INCLUDES) \
	-o $@ $<

## commands : Display available commands.
commands : Makefile
	@sed -n 's/^## //p' $<

## check    : Check consistency.
# FIXME: should run a Python script to do the checking.
# Note: the line below breaks the keyword into two strings to avoid a false match on the command.
check :
	@tools/check Makefile $(SRC_PAGES)

## update   : Update the shared files from the GitHub repo holding them.
# FIXME: need to create that repo.
update :
	git pull --rebase=false https://github.com/swcarpentry/lesson-template-shared.git master

## settings : Show variables and settings.
settings :
	@echo 'SRC_DIR:' $(SRC_DIR)
	@echo 'DST_DIR:' $(DST_DIR)
	@echo 'SRC_PAGES:' $(SRC_PAGES)
	@echo 'DST_PAGES:' $(DST_PAGES)

## clean    : Clean up temporary and intermediate files.
clean :
	@rm -rf $$(find .. -name '*~' -print)

# very-clean : Remove generated HTML.
very-clean :
	@rm -f $(DST_PAGES)
