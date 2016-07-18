generate_md_episodes <- function() {

    if (require("knitr")) {
        if (packageVersion("knitr") < '1.9.19') {
            stop("knitr must be version 1.9.20 or higher")
        }
    } else stop("knitr 1.9.20 or above is needed to build the lessons.")

    if (!require("stringr"))
        stop("The package stringr is required for generating the lessons.")

    ## find all the Rmd files, and generates the paths for their respective outputs
    src_rmd <- list.files(pattern = "??-*.Rmd$", path = "_episodes_rmd", full.names = TRUE)
    dest_md <- file.path("_episodes", gsub("Rmd$", "md", basename(src_rmd)))

    ## knit the Rmd into markdown
    mapply(function(x, y) {
        knitr::knit(x, output = y)
    }, src_rmd, dest_md)

}

generate_md_episodes()
