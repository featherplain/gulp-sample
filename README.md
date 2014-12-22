gulp-sample
============

## Outline

This gulpfile is sample of this article : [http://office7f.com/2014/12/19/megumi201412/](http://office7f.com/2014/12/19/megumi201412/)

* compile sass to css (+ sass-globbing option)
* combine js files and minify
* generate css sprite
* Browser-Sync support

## Requires

* Node.js
* npm
* Ruby
* Sass over3.1
* sass-globbing

## File structure

Basically source file placed in `src/`. It passed to `dist/` as destination through the "gulp".
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


### autoprefix

You'd like to autoprefix specific browsers, open gulpfile and edit `.pipe(autoprefixer())` line.

>
	.pipe($.autoprefixer("last 2 version"))


reference : [https://github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)


### Connect with local server

If you'd like to connect "brower-sync" with local server, edit `gulpfile.js`.

1. Set hostname on line 23.

	>
		'vhost': 'example.dev'

2. Uncomment below these lines.

	>
		// Local server
		// gulp.task('browser-sync', function() {
		// 		browserSync({
		// 			proxy: paths.vhost,
		// 			open: 'external'
		// 		});
		// });
