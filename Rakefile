task default: %w[css jekyll]

task :css do
  Dir.chdir('_sass') do
    system "bundle exec compass compile -c config.rb -e production"
  end
end

task :jekyll do
  system "bundle exec jekyll build"
end
