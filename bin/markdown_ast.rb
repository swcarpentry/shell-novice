#!/usr/bin/env ruby
# frozen_string_literal: true

# Use Kramdown parser to produce AST for Markdown document.

require 'kramdown'
require 'kramdown-parser-gfm'
require 'json'

markdown = $stdin.read
doc = Kramdown::Document.new(markdown, input: 'GFM', hard_wrap: false)
tree = doc.to_hash_a_s_t
puts JSON.pretty_generate(tree)
