generate_md_episodes <- function() {

    library("methods")
    
    if (require("knitr") && packageVersion("knitr") < '1.9.19')
        stop("knitr must be version 1.9.20 or higher")

    if (!require("stringr"))
        stop("The package stringr is required for generating the lessons.")

    if (require("checkpoint") && packageVersion("checkpoint") >=  '0.4.0') {
        required_pkgs <-
             checkpoint:::scanForPackages(project = "_episodes_rmd",
                                          verbose=FALSE, use.knitr = TRUE)$pkgs
    } else {
        stop("The checkpoint package (>= 0.4.0) is required to build the lessons.")
    }

    missing_pkgs <- required_pkgs[!(required_pkgs %in% rownames(installed.packages()))]

    if (length(missing_pkgs)) {
        message("Installing missing required packages: ",
                paste(missing_pkgs, collapse=", "))
        install.packages(missing_pkgs)
    }

    ## find all the Rmd files, and generate the paths for their respective outputs
    src_rmd <- list.files(pattern = "??-*.Rmd$", path = "_episodes_rmd", full.names = TRUE)
    dest_md <- file.path("_episodes", gsub("Rmd$", "md", basename(src_rmd)))

    ## knit the Rmd into markdown
    mapply(function(x, y) {
        knitr::knit(x, output = y)
    }, src_rmd, dest_md)

}

generate_md_episodes()
