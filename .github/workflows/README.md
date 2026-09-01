# Workbench Workflows Documentation

These GitHub Actions workflows manage and maintain the build processes for lessons using the Carpentries Workbench on GitHub.


## Managing Workflow Updates

By using prebuilt Docker containers that are managed by the Carpentries core Workbench maintainers, these workflows are designed to be rarely updated.

However, is important to be able to keep them up-to-date when appropriate.
You can do this locally using your own R and Workbench installation, or via the "04 Maintain: Update Workflow Files" (`update-workflows.yaml`) GitHub Action.

### Updating locally

In a terminal/git bash, navigate to the lesson folder where you want to update the workflows, e.g.:

```bash
cd ~/lessons/shell-novice
```

Then, start an R session and:

```r
# Install/Update sandpaper
options(repos = c(carpentries = "https://carpentries.r-universe.dev/", CRAN = "https://cloud.r-project.org"))
install.packages("sandpaper")

# update the workflows in your lesson
library("sandpaper")
sandpaper::update_github_workflows()
quit()
```

And then in a bash prompt/git bash terminal:

```bash
$ git add .github/workflows
$ git commit -m "Manual update to docker workflows"
$ git push origin main
```

> [!NOTE]
> For non-renv lessons, this is all the setup you need!
> 
> For renv-enabled lessons:
> - Cancel any "01 Maintain: Build and Deploy Site" workflow currently running
> - Run the "02 Maintain: Check for Updated Packages" workflow and merge any PR opened to update the renv lockfile
> - This should automatically run the "03 Maintain: Apply Package Cache" workflow to install packages and build the cache
> - A successful cache build should then trigger the "01 Maintain: Build and Deploy Site" workflow

#### Updating to a specific workflow release or branch

To test new Workbench workflow features or branches, or to pin to a specific release, the `branch` option can be supplied to `update_github_workflows()`.

For a given branch:

```r
sandpaper::update_github_workflows(branch="develop")
```

Or for a given release version:
```r
sandpaper::update_github_workflows(branch="1.0.1")
```

### Updating using GitHub

#### Official lessons

"Official" lessons are those in the lesson program repositories, Incubator, or Lab.
They need no extra setup as this is all managed for you as part of the Carpentries GitHub organisations.

To update the workflows, either:
- wait for the scheduled run of the "04 Maintain: Update Workflow Files" at approximately midnight every Tuesday
- go to the Actions tab on GitHub, click "04 Maintain: Update Workflow Files" on the left, then "Run Workflow" on the right

Once complete, this will raise a PR with any changes to the workflows that are needed.
If you are happy with the changes made, you can merge the PR into your lesson repository.

#### Your own lessons

This presumes you:
  - already have a lesson repository available on GitHub
  - have enabled workflows in the lesson repo
  - have set up a SANDPAPER_WORKFLOW personal access token (PAT) in the lesson repo

To go through these steps, please follow the [Forking a Workbench Lesson](https://docs.carpentries.org/resources/curriculum/lesson-forks.html#forking-a-workbench-lesson-repository)
documentation.

Once set up, run the "04 Maintain: Update Workflow Files" (`update-workflows.yaml`) action.

This will raise a PR with any changes to the workflows that are needed.
If you are happy with the changes made, you can merge the PR into your lesson repository.


## Dependency Images for RMarkdown Lessons

Lessons that use R packages and RMarkdown are built on GitHub using Docker images within these workflows.
These images are based on the [workbench-docker](https://github.com/carpentries/workbench-docker) image.
This base image only contains the Workbench packages to build lessons and not any extra R packages your lesson might need.

Therefore, there are two steps to perform to resolve the required R packages in a lesson, and then generate a Docker image layer comprising those packages.

The "02 Maintain: Check for Updated Packages" workflow checks for any used R packages and their versions, and if successful, opens a Pull Request to update your lesson's renv lockfile (`renv.lock`).
Once the PR is merged, the "03 Maintain: Apply Package Cache" workflow builds the dependency image layer with `docker build` and publishes it in your user or organisation account Packages area.

> [!NOTE]
> Caching is only relevant for lessons that use Rmd files and renv to manage R packages.
> If you are building basic markdown documents, caching will not apply to you, and the only
> workflow that needs to be run is "01 Maintain: Build and Deploy Site".

### Publishing dependency images

The two dependency workflows are separated to ensure that once you have a successful build with a working renv environment, the resulting dependency image is stored and will be reused by the Workbench Docker container.
This means that lesson builds will be faster and more consistent once a dependency image is created and reused. This is doubly important if you need very specific versions of R packages, i.e. "pinning".

This setup means that this dependency image layer is available indefinitely:
- to build your lesson, improving robustness and reproducibility
- for others to use as a complete environment in their local builds, teaching environments, or Codespaces

If and when you want to perform an update to the dependency image, you can re-run the "02 Maintain: Check for Updated Packages" workflow and verify that your lesson still builds with any new packages or changes.
The "03 Maintain: Apply Package Cache" workflow will publish a new repository- or organisation-local GHCR image for the lesson.

As such, the dependency image is invalidated by new versions of the `renv.lock` file.
This happens:
  - if you update your lockfile locally by using the `sandpaper::update_cache()` and `sandpaper::manage_deps()` functions, and then push it to the lesson repository
  - when you run the "02 Maintain: Check for Updated Packages" and there are new packages to install

More information on managing local renv-based lesson dependencies can be found in the [Sandpaper packages vignettes](https://carpentries.github.io/sandpaper/articles/building-with-renv.html).

#### Using different dependency image versions

There are times when you may want to go back to a previous dependency image:
  - if you run "02 Maintain: Check for Updated Packages" and "03 Maintain: Apply Package Cache" and the cache generation fails for some reason
  - if there is a new R package that produces incorrect or broken lesson output
  - a new R version is released and downstream packages fail to build and install, and need updating by the package maintainer(s)

Dependency images will have the following name format, where IMAGE is the workbench-docker image version, and HASHSUM is the `renv.lock` lockfile hash:

```
IMAGE                                HASHSUM
[ |  ]      [                           |                                  ]
v0.2.4_renv-2e499eb706112971b2cffceb49b55a6efe49f3ed75cd6579b10ff224489daca4
```

Copy the hashsum part of the desired image tag you want to use, e.g. `2e499eb706112971b2cffceb49b55a6efe49f3ed75cd6579b10ff224489daca4`.

Then either:
 1. Add a repository variable called CACHE_VERSION, and paste in the hash
 2. Run the "01 Maintain: Build and Deploy Site" manually, supplying the `Optional renv cache version override` input

If you have no images listed, make sure to run the "02 Maintain: Check for Updated Packages" and "03 Maintain: Apply Package Cache" workflows to publish a new dependency image.

> [!NOTE]
> If you are maintaining an official lesson, dependency images are saved to the Carpentries lesson program organisation, e.g. `datacarpentry`, GHCR package namespace.
> Once a successful dependency image has been published, the build workflows will use it automatically when the matching Docker version tag exists, e.g. 'latest' or a specific version.
> 
> If you are developing a lesson in your own repository, the dependency images are stored in your repository's GHCR package namespace.
> You can see available images by going to your user or organisation's Packages tab, e.g. `https://github.com/<your_github_username>?tab=packages`.

#### Pruning dependency image layers

Through the lifetime of a lesson, an increasing number of dependency images will be generated.
As the images are public, GitHub currently charges no storage, or network ingress or egress fees to upload or download them.

The "03 Maintain: Apply Package Cache" workflow will automatically check the number of published dependency images and keep each version published plus one underlying untagged digest (if any) for each version.
This means it is possible to roll back easily to a previous version or digest, but not end up with a huge number of dependency images to manage.

In any case, you can manually delete any versions you wish by:
- going to your user or organisation's Packages tab, e.g. `https://github.com/<your_github_username>?tab=packages`.
- selecting the dependency image you want to manage, e.g. `<lesson_repo_name>-deps`
- selecting `Package settings` on the right hand side
- deleting any images

> [!NOTE]
> Deleting these images manually may break your builds.
> Only perform this action if you are sure you want to delete the generated dependency images.
>
> If you mistakenly delete an image, you can rebuild it by rerunning the "03 Maintain: Apply Package Cache" workflow.


## User Settings

Input level variables are documented in the `carpentries/actions` repository READMEs for each composite action.

Specific repository level variables can be set that will force particular options across all workflow runs.

### 01 Maintain: Build and Deploy Site (docker_build_deploy.yaml)

Repository-level variables for this workflow are:
- WORKBENCH_TAG
  - The workbench-docker release version to use for a given build
  - This can be set to a specific version number to force all builds to use a given container version
  - Default is unset or `latest`
- BUILD_RESET
  - Force a reset of previously build markdown files
  - Setting this variable value to `true` will force sandpaper to delete any previously build markdown files
  - Default is unset or `false`
- AUTO_MERGE_WORKBENCH_VERSION_UPDATE
  - Control merge behaviour of the workbench-docker version update PR
  - When a new workbench Docker image version is detected, usually after a sandpaper, varnish, or pegboard update, its version number will be incremented
  - If a newer version is available, a PR will be auto-generated that updates the `.github/workbench-docker-version.txt` file, and this PR will be auto-merged
  - To not auto-merge this PR and to choose when to update the Docker version used, set this to `false`.
  - Default is unset or `true`
- LANG_CODE
  - Two-letter language code that triggers the use of Joel Nitta's {dovetail} package for lesson translation
  - This is used in the internationalisation repos of the main Carpentry lesson programs
  - Default is unset or `''`

### 02 Maintain: Check for Updated Packages (update-cache.yaml)

Repository-level variables for this workflow are:
- LOCKFILE_CACHE_GEN
  - Passed to the `generate-cache` input of the [update-lockfile](https://github.com/carpentries/actions/tree/main/update-lockfile) action
  - A temporary renv cache is generated when this workflow runs
  - If this option is set to `false`, no temporary cache will be generated
  - Default is `true`
- FORCE_RENV_INIT
  - Passed to the `force-renv-init` input of the [update-lockfile](https://github.com/carpentries/actions/tree/main/update-lockfile) action
  - renv initialises a cache based on a given lockfile
  - If this lockfile is particularly old or packages have broken/unresolvable dependencies, then builds will fail
  - If this option is set to `true`, a full renv reinitialisation will occur, "wiping the slate clean"
  - This option is useful if you're using Bioconductor packages which often break when new Bioconductor releases happen
  - Default is `false`
- UPDATE_PACKAGES
  - Passed to the `update` input of the [update-lockfile](https://github.com/carpentries/actions/tree/main/update-lockfile) action
  - If set to `false` only package hydration will happen and no package update checks will occur
  - Default is `true`

### 03 Maintain: Apply Package Cache (docker_apply_cache.yaml)

Repository-level variables for this workflow are:
- WORKBENCH_TAG
  - The workbench-docker release version to use for a given build
  - This can be set to a specific version number to force all builds to use a given container version
  - Default is unset or `latest`

### 04 Maintain: Update Workflow Files (update-workflows.yaml)

There are no repository variables for this workflow.


## Pull Request and Review Management

Because our lessons execute code, pull requests are a security risk for any lesson and thus have security measures associated with them.
**Do not merge any pull requests that do not pass checks and do not have bots commented on them.**

This series of workflows all go together and are described in the following diagram and the below sections:

![Graph representation of a pull request](https://carpentries.github.io/sandpaper/articles/img/pr-flow.dot.svg)

### Pre Flight Pull Request Validation (pr-preflight.yaml)

This workflow runs every time a pull request is created and its purpose is to validate that the pull request is okay to run.
This means the following things:

1. The pull request does not contain modified workflow files
2. If the pull request contains modified workflow files, it does not contain modified content files
   (such as a situation where @carpentries-bot will make an automated pull request)
3. The pull request does not contain an invalid commit hash
   (e.g. from a fork that was made before a lesson was transitioned from styles to use the Workbench).

Once the checks are finished, a comment is issued to the pull request, which will allow maintainers to determine if it is safe to run the "Receive Pull Request" workflow from new contributors.

### Receive Pull Request (docker_pr_receive.yaml)

**Note of caution:** This workflow runs arbitrary code by anyone who creates a pull request.
GitHub has safeguarded the token used in this workflow to have no privileges in the repository, but we have taken precautions to protect against spoofing.

This workflow is triggered with every push to a pull request.
If this workflow is already running and a new push is sent to the pull request, the workflow running from the previous push will be cancelled and a new workflow run will be started.

The first step of this workflow is to check if it is valid (e.g. that no workflow files have been modified):
- If there are workflow files that have been modified, a comment is made that indicates that the workflow will not continue.
- If both a workflow file and lesson content is modified, an error will occur and the workflow will not continue.

The second step (if valid) is to build the generated content from the pull request.
This builds the content and uploads three artifacts:

1. The pull request number (pr)
2. A summary of changes after the rendering process (diff)
3. The rendered files (build)

The artifacts produced are used by the "Comment on Pull Request" workflow.

### Comment on Pull Request (pr-comment.yaml)

This workflow is triggered if the `docker_pr_receive.yaml` workflow is successful.
The steps in this workflow are:

1. Test if the workflow is valid and comment the validity of the workflow to the pull request.
2. If it is valid: create an orphan branch with two commits: the current state of the repository and the proposed changes.
3. If it is valid: update the pull request comment with the summary of changes

Importantly: if the pull request is invalid, the branch is not created so any malicious code is not published.

From here, the maintainer can request changes from the author and eventually either merge or reject the PR.
When this happens, if the PR was valid, the preview branch needs to be deleted. 

### Send Close PR Signal (pr-close-signal.yaml)

Triggered any time a pull request is closed.
This emits an artifact that is the pull request number for the next action.

### Remove Pull Request Branch (pr-post-remove-branch.yaml)

Triggered by `pr-close-signal.yaml`.
This removes the temporary branch associated with the pull request (if it was created).
