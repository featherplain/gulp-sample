gulp-sample
============

## Outline

This gulpfile.js is for :

* compile sass to css (+ sass-globbing option)
* combine js files and minify
* generate css sprite
* Browser-Sync support

## Require

* Node.js
* npm
* Ruby
* Sass over3.1
* sass-globbing

## File structure

~~~~
.
├── README.md
├── dist
│   ├── css
│   │   └── style.css
│   ├── img
│   │   └── sprite.png
│   └── js
│       └── lib.min.js
├── gulpfile.js
├── index.html
├── node_modules
├── package.json
└── src
    ├── img
    │   └── sprite
    │       ├── icon_star-red.png
    │       ├── icon_star-yellow.png
    │       └── icon_star_blue.png
    ├── js
    │   └── lib
    │       ├── jquery.bxslider.js
    │       └── jquery.magnific-popup.js
    └── scss
        ├── core
        │   ├── _config.scss
        │   ├── _mixins.scss
        │   └── _normalize.scss
        ├── layout
        │   ├── _layout-common.scss
        │   ├── _layout-footer.scss
        │   └── _layout-header.scss
        ├── module
        │   ├── _module-buttons.scss
        │   └── _module-sprite.scss
        └── style.scss

~~~~

## Usage

1.  Install gulp.

		$ npm install -g gulp

2.  Install some dependencies.

		$ cd path/to/directory ; npm install
	
3.  Install sass-globbing.

		$ gem install sass-globbing

4.  Run gulp.

		$ gulp

    or

		$ npm start


### autoprefix

You'd like to autoprefix specific browsers, open gulpfile and edit `.pipe(autoprefixer())` line.

>
	.pipe($.autoprefixer("last 2 version"))


reference : [https://github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)


### for WordPress

If you'd like to use for WordPress development :

1. Set proxy url on line 23.

>
	'vhost': 'example.dev'

2. Uncomment below these lines in gulpfile.

>
	// gulp.task('browser-sync', function() {
	// 		browserSync({
	// 			proxy: paths.vhost,
	// 			open: 'external'
	// 		});
	// });
