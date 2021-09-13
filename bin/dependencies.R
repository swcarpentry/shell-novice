install_required_packages <- function(lib = NULL, repos = getOption("repos", default = c(CRAN = "https://cran.rstudio.com/"))) {

  if (is.null(lib)) {
    lib <- .libPaths()[[1]]
  }

  message("lib paths: ", paste(lib, collapse = ", "))
  # Note: RMarkdown is needed for renv to detect packages in Rmd documents.
  required_pkgs <- c("rprojroot", "desc", "remotes", "renv", "BiocManager", "rmarkdown")
  installed_pkgs <- rownames(installed.packages(lib.loc = lib))
  missing_pkgs <- setdiff(required_pkgs, installed_pkgs)

  # The default installation of R will have "@CRAN@" as the default repository,
  # which directs contrib.url() to either force the user to choose a mirror if
  # interactive or fail if not. Since we are not interactve, we need to force
  # the mirror here.
  if ("@CRAN@" %in% repos) {
    repos <- c(CRAN = "https://cran.rstudio.com/")
  }

  if (length(missing_pkgs) != 0) {
    install.packages(missing_pkgs, lib = lib, repos = repos)
  }
}

find_root <- function() {

  cfg  <- rprojroot::has_file_pattern("^_config.y*ml$")
  root <- rprojroot::find_root(cfg)

  root
}

# set the BiocManager repositories and return a function that resets the default
# repositories.
#
# @example
# bioc_repos_example <- function() {
#   message("User repos")
#   as.data.frame(getOption("repos"))
#   reset_repos <- use_bioc_repos()
#   on.exit(reset_repos())
#   message("Bioc repos")
#   as.data.frame(getOption("repos"))
# }
# bioc_repos_example()
# as.data.frame(getOption("repos")
use_bioc_repos <- function() {
  repos <- getOption("repos")
  suppressMessages(options(repos = BiocManager::repositories()))
  function() {
    options(repos = repos)
  }
}

identify_dependencies <- function() {

  root <- find_root()

  reset_repos <- use_bioc_repos()
  on.exit(reset_repos(), add = TRUE)
  eps <- file.path(root, "_episodes_rmd")
  bin <- file.path(root, "bin")

  required_pkgs <- unique(c(
    ## Packages for episodes
    renv::dependencies(eps, progress = FALSE, error = "ignored")$Package,
    ## Packages for tools
    renv::dependencies(bin, progress = FALSE, error = "ignored")$Package
  ))

  required_pkgs
}

create_description <- function(required_pkgs) {
  d <- desc::description$new("!new")
  d$set_deps(data.frame(type = "Imports", package = required_pkgs, version = "*"))
  d$write("DESCRIPTION")
  # We have to write the description twice to get the hidden dependencies
  # because renv only considers explicit dependencies.
  #
  # This is needed because some of the hidden dependencis will require system
  # libraries to be configured.
  suppressMessages(repo <- BiocManager::repositories())
  deps <- remotes::dev_package_deps(dependencies = TRUE, repos = repo)
  deps <- deps$package[deps$diff < 0]
  if (length(deps)) {
    # only create new DESCRIPTION file if there are dependencies to install
    d$set_deps(data.frame(type = "Imports", package = deps, version = "*"))
    d$write("DESCRIPTION")
  }
}

install_dependencies <- function(required_pkgs, ...) {

  reset_repos <- use_bioc_repos()
  on.exit(reset_repos(), add = TRUE)

  create_description(required_pkgs)
  on.exit(file.remove("DESCRIPTION"), add = TRUE)
  remotes::install_deps(dependencies = TRUE, ...)

  if (require("knitr") && packageVersion("knitr") < '1.9.19') {
    stop("knitr must be version 1.9.20 or higher")
  }

}
