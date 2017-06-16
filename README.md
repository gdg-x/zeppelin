# Site Web Agile Pays Basque

**Fork** (https://github.com/gdg-x/zeppelin/fork) 

### Dépendances

* [Fork](https://github.com/gdg-x/zeppelin/fork) 
* Static CMS : [Jekyll](http://jekyllrb.com/)
* Termplate : [GDG Lviv](http://lviv.gdg.org.ua/) .

### Live demo https://agilepaysbasque.github.io/site-web/


# Docker

```
docker run --rm --label=jekyll --volume=$(pwd):/srv/jekyll --volume="$(pwd)/.gems:/usr/share/ruby/default-gems" -it -p 4000:4000 jekyll/jekyll bundle config local.jekyll /usr/srv/.gems && jekyll serve --watch --incremental 
```

## Dev en Local

Check if you have [all requirements for local environment](http://jekyllrb.com/docs/installation/).

### Gem

Vous pouvez utiliser Homebrew

```bash
    brew install gem
```

### Bundler

To install all development dependencies install [Bundler](http://bundler.io/).
```bash
    gem install bundler
```
and run next command from root folder:

```bash
    bundle install
```  

### Jekyll

```bash
    gem install jekyll
```

#### Site local

To start Jekyll run:

```bash
    jekyll serve -w
```
Site accessible sur : 

http://127.0.0.1:4000/zeppelin/ 

Sur Windows :

http://localhost:4000/zeppelin/ 

in this mode all changes to html and data files will be automatically regenerated, 

**NOTE:** Si vous modifiez ```_config.yml``` vous DEVEZ redémarrer le serveur.

### Licence

Project is published under the [MIT license](https://github.com/gdg-x/zeppelin/blob/master/LICENSE.txt). Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)

### Auteurs originaux

