require 'sass-media_query_combiner'
require 'autoprefixer-rails'
require "./remove-all-comments-monkey-patch"

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css, browsers: ["last 2 version", "> 1%"])
  end
end

http_path = "/" 
sass_dir = "./" 
css_dir = "../css" 
images_dir = "../img" 
javascripts_dir = "../js" 

line_comments = false
relative_assets = true 
output_style = :compressed

# Remove multiline comments - monkey patch
class Sass::Tree::Visitors::Perform < Sass::Tree::Visitors::Base
#   # Removes all comments completely
  def visit_comment(node)
    return []
  end
end