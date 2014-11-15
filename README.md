# Project Zeppelin / GDG DevFest 2014 site template

### About 
Project Zeppelin allows you to setup awesome GDG DevFest site in 5 minutes. 

Project is builded on top of [Jekyll](http://jekyllrb.com/) - simple, blog-aware, static site generator. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your website from GitHub’s servers for free. [Learn more about Jekyll](http://jekyllrb.com/).

Template is brought by [GDG Lviv](http://lviv.gdg.org.ua/) team.

### Live demo http://gdg-x.github.io/zeppelin/

### Features
* Easy to setup
* Simple and responsive design
* Integrated speakers and sessions management
* SVG icons
* SEO friendly


### Quick-start guide
1. [Fork](https://github.com/gdg-x/zeppelin/fork) this repo
2. Clone locally
3. Update ```_config.yml``` 
4. Select what content blocks do you need
5. Push changes to ```gh-pages``` branch
6. Enjoy your awesome DevFest site at ```http://[your github name].github.io/zeppelin/```

Or watch project presentation from [GDG[x] Townhall meeting](http://www.youtube.com/watch?v=xYmhheoLjcI). Slides available [here](https://docs.google.com/presentation/d/19aM7yNl_orDaCNND5LpCY3fShb6PyMltnzYfKvV8R_8/edit?usp=sharing)


## Local development

Check if you have [all requirments for local environment](http://jekyllrb.com/docs/installation/), install [Jekyll server](http://jekyllrb.com/docs/quickstart/) gem.
Install GitHub pages
```bash
	gem install github-pages
``` 

Run this command from project root folder:
```bash
    jekyll serve -w
```
Site will be available at http://127.0.0.1:4000/zeppelin/ or http://localhost:4000/zeppelin/ (on Windows)

**NOTE:** in this mode all changes to html and data files will be automatically regenerated, but after changing ```_config.yml``` you have to restart server.

### Sass(Compass) support
Install the latest version of [Compass](http://compass-style.org/). Ruby uses Gems to manage its various packages of code like Sass. In your open terminal window type:
```bash
	gem install compass --pre
```

Then for combining media queries you can use [Sass::MediaQueryCombiner](https://github.com/aaronjensen/sass-media_query_combiner) plugin. Install with command
```bash
	gem install sass-media_query_combiner
```

And for prefixing css3 properties use [Autoprefixer](https://github.com/ai/autoprefixer)
```bash
	gem install autoprefixer-rails
```

**Note:** Also you need to install [Node.js](http://nodejs.org/download/)

To watch changes of `.sass` files and compile it to the `.css` on a fly change property `safe: true` to `safe: false` in `_config.yml`.
**Note: It works only on local machine, because GitHub runs Jekyll in `--save` [mode](https://help.github.com/articles/using-jekyll-with-pages/#configuration-overrides)**

Learn more about Sass development from [documentation](https://github.com/gdg-x/zeppelin/wiki/Sass-development).


### Resource optimizations (optional)

You can optimize images and minify css and javascript automaticaly (for now only on Windows).
But for Mac OS users available amazing tool - [imageoptim](https://imageoptim.com/). Thanks [@raphaelsavina](https://github.com/raphaelsavina) for link.
Optimize all images by running this script from `/automation/images/` folder:
```bash
    all_image_optimization.bat -d -jtran -pout -pquant -optip -gsicle -svgo
```

To minify CSS and JS run `minify_all.bat` from `/automation/minifying/` folder:
```bash
    minify_all.bat
```

Learn more about available optimization options from [documentation](https://github.com/gdg-x/zeppelin/wiki/Resources-optimizations).

### Documentation
Quick-start guide is not enough? Checkout [full documentation](https://github.com/gdg-x/zeppelin/wiki).


### TODO List
* Optimization scripts for mac and linux

### Known issues
* Scrolling on open navbar

### Used libraries
* [Bootstrap](https://github.com/twbs/bootstrap)
* [Animate.css](https://github.com/daneden/animate.css)
* [Waves](https://github.com/publicis-indonesia/Waves)
* [jquery.appear](https://github.com/bas2k/jquery.appear)
* [jQuery countTo Plugin](https://github.com/mhuggins/jquery-countTo)
* [Typed.js](https://github.com/mattboldt/typed.js)
* [Sticky-kit](https://github.com/leafo/sticky-kit)

### Who is using template?
Going to use template? Go on! The only thing we ask - let us know at [*lviv@gdg.org.ua*](mailto:lviv@gdg.org.ua) so we can include you to this list, or make a pull request.

* [GDG DevFest Ukraine 2014](http://devfest.gdg.org.ua/)
* [GDG DevFest Istanbul 2014](http://devfesttr.com/)
* [GDG DevFest Omsk 2014](http://gdg-devfest-omsk.org/)
* [GDG Bangalore Site](http://gdgbangalore.github.io/)
* [2014 南阳 GDG Devfest 大会](http://devfest.gdgny.org)
* [DevFest Nordeste 2014](http://2014.devfestne.com.br/)
* [GDG DevFest The Netherlands](http://www.devfest.nl/)
* [DevFest Centro-Oeste 2014](http://www.devfestcentrooeste.com.br/)
* [DevFest SP 2014](http://sp.devfest.com.br/)
* [Android DevFest Space Coast](http://gdg-space-coast.github.io/zeppelin/)
* [DevFest in Baroda](devfest.gdgbaroda.com)
* [GDG Hi Pic (France)](http://maximemularz.github.io/zeppelin/)
* [GDG DevFest Córdoba 2014](http://gdgcordoba.github.io/zeppelin/)
* [GDG DevFest Düsseldorf 2014](http://www.gdg-dus.de/DevFest2014/)
* [GDG Dublin DevFest 2014](http://gdg-dublin.appspot.com/)
* [GDG Makerere DevFest 2014](http://gdgmakerere.github.io/)
* [GDG Busitema DevFest 2014](http://gdgbusitema.github.io/)
* [DevFest Vienna 2014](http://www.devfest.at/)
* [Android Wear DevFest](http://devfest.gdgnorthjersey.com/wear2014/)
* [GDG SLAU DevFest 2014](http://gdgslau.github.io/)
* [GDG Korea DevFair 2014](http://devfair2014.gdg.kr/)
* [Lima DevFest](http://limadevfest.com/)
* [GDG DevFest Kota Kinabalu 2014](http://devfest.gdgkk.info/)
* [GDG DevFest Belgium](http://gdg-brussels.org/DevFest2014/)
* [DevFest Praha 2014](http://devfest.cz/)
* [GDG DevFest Kosice](http://devfest.sk/)
* [DevFest Birgunj](gdgbirgunj.github.io/DevFest2014/)
* [DevFest Lima 2014](http://limadevfest.com/)
* [DevFest Chennai 2014](http://devfest.gdgchennai.com/)

### Contributors
* Design and web development: [Oleh Zasadnyy](https://github.com/ozasadnyy)
* Idea: [Vitaliy Zasadnyy](https://github.com/zasadnyy)

### Licence
Project is published under the [MIT licence](https://github.com/gdg-x/zeppelin/blob/master/LICENSE.txt). Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)


