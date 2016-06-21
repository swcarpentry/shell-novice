if (require("knitr")) {
    if (packageVersion("knitr") < '1.9.19') {
        stop("knitr must be version 1.9.20 or higher")
    }
} else stop("knitr 1.9.20 or above is needed to build the lessons.")

if (!require("stringr"))
    stop("The package stringr is required for generating the lessons.")

src_rmd <- list.files(pattern = "??-*.Rmd$", path = "_episodes_rmd", full.names = TRUE)
dest_md <- file.path("_episodes", gsub("Rmd$", "md", basename(src_rmd)))

for (i in seq_along(src_rmd)) {
    knitr::knit(src_rmd[i], output = dest_md[i])
}
