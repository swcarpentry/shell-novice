find_root <- function() {
  if (!requireNamespace("rprojroot", quietly = TRUE)) {
    install.packages("rprojroot", lib = lib, repos = repos)
  }

  cfg  <- rprojroot::has_file_pattern("^_config.y*ml$")
  root <- rprojroot::find_root(cfg)

  root
}

identify_dependencies <- function(lib = NULL, repos = getOption("repos")) {

  if (is.null(lib)) {
    lib <- .libPaths()
  }

  if (!requireNamespace("renv", quietly = TRUE)) {
    install.packages("renv", lib = lib, repos = repos)
  }

  root <- find_root()

  required_pkgs <- unique(c(
    ## Packages for episodes
    renv::dependencies(file.path(root, "_episodes_rmd"), progress = FALSE, error = "ignore")$Package,
    ## Packages for tools
    renv::dependencies(file.path(root, "bin"), progress = FALSE, error = "ignore")$Package
  ))

  required_pkgs
}

install_dependencies <- function(required_pkgs,
                                 lib = NULL, repos = getOption("repos"),
                                 update = FALSE, ...) {

  if (missing(lib))  {
    lib <- .libPaths()
  }

  missing_pkgs <- setdiff(required_pkgs, rownames(installed.packages()))

  if (length(missing_pkgs)) {
    message("Installing missing required packages: ",
      paste(missing_pkgs, collapse=", "))
    install.packages(missing_pkgs, lib = lib, repos = repos)
  }

  if (update) {
    update.packages(
      lib.loc = lib, repos = repos,
      ask = FALSE, checkBuilt = TRUE, ...
    )
  }

  if (require("knitr") && packageVersion("knitr") < '1.9.19') {
    stop("knitr must be version 1.9.20 or higher")
  }

}

create_description <- function(required_pkgs) {
  require("desc")
  d <- description$new("!new")
  lapply(required_pkgs, function(x) d$set_dep(x))
  d$write("DESCRIPTION")
}
