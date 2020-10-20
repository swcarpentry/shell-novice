#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset


bundle install
bundle update
exec bundle exec jekyll serve --host 0.0.0.0
