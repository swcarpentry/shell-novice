generate_md_episodes <- function() {

    if (require("knitr")) {
        if (packageVersion("knitr") < '1.9.19') {
            stop("knitr must be version 1.9.20 or higher")
        }
    } else stop("knitr 1.9.20 or above is needed to build the lessons.")

    if (!require("stringr"))
        stop("The package stringr is required for generating the lessons.")

    ## where the Rmd files and the datasets are located
    rmd_path <- "_episodes_rmd"
    rmd_data <- file.path(rmd_path, "data")

    ## where the markdown files and the datasets will end up
    dest_path <- "_episodes"
    dest_data <- file.path(dest_path, "data")

    ## find all the Rmd files, and generates the paths for their respective outputs
    src_rmd <- list.files(pattern = "??-*.Rmd$", path = rmd_path, full.names = TRUE)
    dest_md <- file.path(dest_path, gsub("Rmd$", "md", basename(src_rmd)))

    ## knit the Rmd into markdown
    mapply(function(x, y) {
        knitr::knit(x, output = y)
    }, src_rmd, dest_md)


    ## copy the datasets from _episodes_rmd/data to _episodes/data
    rmd_data_files <- list.files(path = rmd_data, full.names = TRUE)
    dest_data_files <- file.path(dest_data, basename(rmd_data_files))

    if (!dir.exists(file.path(dest_data)))
        dir.create(file.path(dest_data))

    apply(cbind(rmd_data_files, dest_data_files), 1,
          function(x) file.copy(x[1], x[2]))
}

generate_md_episodes()
