if (require("knitr")) {
    if (packageVersion("knitr") < '1.9.19') {
        stop("knitr must be version 1.9.20 or higher")
    }
} else stop("knitr 1.9.20 or above is needed to build the lessons.")
