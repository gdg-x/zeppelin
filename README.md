# Project Zeppelin / GDG DevFest 2014 site template

### About 
Project Zeppelin allows you to setup awesome GDG DevFest site in 5 minutes. 

Project is builded on top of [Jekyll](http://jekyllrb.com/) - simple, blog-aware, static site generator. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your website from GitHub’s servers for free. [Learn more about Jekyll](http://jekyllrb.com/).

Template is brought by [GDG Lviv](http://lviv.gdg.org.ua/) team.

### Live demo http://gdg-ukraine.github.io/devfest-2014/

### Features
* Easy to setup
* Simple and responsive design
* Inegrated speakers and sessions management
* SVG icons
* SEO friendly


### Quick-start guide
1. [Fork](https://github.com/GDG-Ukraine/devfest-2014/fork) this repo
2. Clone locally
3. Update ```_config.yml``` 
4. Select what content blocks do you need
5. Push changes to ```gh-pages``` branch
6. Enjoy your awesome DevFest site at ```http://[your github name].github.io/devfest-2014/```


## Local development

Check if you have [all requirments for local environment](http://jekyllrb.com/docs/installation/), install [Jekyll server](http://jekyllrb.com/docs/quickstart/) gem and run this command from project root folder:

```bash
    jekyll serve -w
```
Site will be available at http://127.0.0.1:4000/devfest-2014/

**NOTE:** in this mode all changes to html and data files will be automatically regenerated, but after changing ```_config.yml``` you have to restart server.


### Resource optimizations (optional)

You can optimize images and minify css and javascript automaticaly (for now only on Windows).
Optimize all images by running this script from `/automation/images/` folder:
```bash
    all_image_optimization.bat -d -jtran -pout -pquant -optip -gsicle -svgo
```

To minify CSS and JS run `minify_all.bat` from `/automation/minifying/` folder:
```bash
    minify_all.bat
```

Learn more about available optimization options from [documentation](https://github.com/GDG-Ukraine/devfest-2014/wiki/Resources-optimizations).

### Documentation
Quick-start guide is not enough? Checkout [full documentation](https://github.com/GDG-Ukraine/devfest-2014/wiki).


### TODO List
* Schedule page template
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

### Who is using template?
Going to use template? Go on! The only thing we ask - let us know at [*lviv@gdg.org.ua*](mailto:lviv@gdg.org.ua) so we can include you to this list, or make a pull request.

* [GDG DevFest Ukraine 2014](http://devfest.gdg.org.ua/)
* [GDG DevFest Instanbul 2014](http://devfesttr.com/)

### Contributors
* Design and markup: [Oleh Zasadnyy](https://github.com/ozasadnyy)
* Idea and Jekyll integration: [Vitaliy Zasadnyy](https://github.com/zasadnyy)

### Licence
Project is published under the [MIT licence](https://github.com/GDG-Ukraine/devfest-2014/blob/gh-pages/LICENSE.txt). Feel free to clone and modify repo as you want, but don'y forget to add reference to authors :)


