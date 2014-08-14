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
css_dir = "../css" 
sass_dir = "./" 
images_dir = "../img" 
javascripts_dir = "../js" 

if environment == :development
    line_comments = true
	relative_assets = true 
    output_style = :expanded
end

if environment == :production
    line_comments = false
	relative_assets = true 
    output_style = :compressed

    require 'fileutils'
        on_stylesheet_saved do |file|
            if File.exists?(file)
            filename = File.basename(file, File.extname(file))
            File.rename(file, "../css" + "/" + filename + ".min" + File.extname(file))
        end
    end
end 

# Remove multiline comments - monkey patch
class Sass::Tree::Visitors::Perform < Sass::Tree::Visitors::Base
  # Removes all comments completely
  def visit_comment(node)
    return []
  end
end