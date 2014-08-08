require 'sass-media_query_combiner'
require 'autoprefixer-rails'

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
output_style = :expanded
relative_assets = true 
line_comments = false
sourcemap = true