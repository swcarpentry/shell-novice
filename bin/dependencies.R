install_required_packages <- function(lib = NULL, repos = getOption("repos")) {

  if (is.null(lib)) {
    lib <- .libPaths()
  }

  message("lib paths: ", paste(lib, collapse = ", "))
  missing_pkgs <- setdiff(
    c("rprojroot", "desc", "remotes", "renv"),
    rownames(installed.packages(lib.loc = lib))
  )

  install.packages(missing_pkgs, lib = lib, repos = repos)

}

find_root <- function() {

  cfg  <- rprojroot::has_file_pattern("^_config.y*ml$")
  root <- rprojroot::find_root(cfg)

  root
}

identify_dependencies <- function() {

  root <- find_root()

  required_pkgs <- unique(c(
    ## Packages for episodes
    renv::dependencies(file.path(root, "_episodes_rmd"), progress = FALSE, error = "ignore")$Package,
    ## Packages for tools
    renv::dependencies(file.path(root, "bin"), progress = FALSE, error = "ignore")$Package
  ))

  required_pkgs
}

create_description <- function(required_pkgs) {
  d <- desc::description$new("!new")
  lapply(required_pkgs, function(x) d$set_dep(x))
  d$write("DESCRIPTION")
}

install_dependencies <- function(required_pkgs, ...) {

  create_description(required_pkgs)
  on.exit(file.remove("DESCRIPTION"))
  remotes::install_deps(dependencies = TRUE, ...)

  if (require("knitr") && packageVersion("knitr") < '1.9.19') {
    stop("knitr must be version 1.9.20 or higher")
  }

}
