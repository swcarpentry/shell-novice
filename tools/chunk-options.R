# These settings control the behavior of all chunks in the novice R materials.
# For example, to generate the lessons with all the output hidden, simply change
# `results` from "markup" to "hide".
# For more information on available chunk options, see
# http://yihui.name/knitr/options#chunk_options

library("knitr")
opts_chunk$set(tidy = FALSE, results = "markup", comment = NA,
               fig.align = "center", fig.path = "fig/")

# The hooks below add html tags to the code chunks and their output so that they
# are properly formatted when the site is built.
hook_in <- function(x, options) {
  stringr::str_c("\n\n~~~{.r}\n",
                 paste0(x, collapse="\n"),
                 "\n~~~\n\n")
}

hook_out <- function(x, options) {
  stringr::str_c("\n\n~~~{.output}\n",
                   paste0(x, collapse="\n"),
                 "\n~~~\n\n")
}

hook_error <- function(x, options) {
  stringr::str_c("\n\n~~~{.error}\n",
                 paste0(x, collapse="\n"),
                 "\n~~~\n\n")
}

knit_hooks$set(source = hook_in, output = hook_out, warning = hook_error,
               error = hook_error, message = hook_out)
