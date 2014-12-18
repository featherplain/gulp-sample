/***************************************************************************
* DEPENDENCIES
***************************************************************************/

var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    plumber      = require('gulp-plumber'),
    reload       = browserSync.reload,
    rename       = require('gulp-rename'),
    rubySass     = require('gulp-ruby-sass'),
    sprite       = require('gulp.spritesmith'),
    uglify       = require('gulp-uglify')
;

/***************************************************************************
* FILE DESTINATIONS
***************************************************************************/

var paths = {
  'dest'      : './',
  'vhost'     : 'example.dev',
  'port'      : 3000,
// html
  'htmlDest'  : './',
  'htmlFiles' : './*.html',
// images
  'imgDest'   : 'dist/img',
  'imgDir'    : 'src/img',
// js
  'jsFiles'   : 'src/js/**/*.js',
  'jsDest'    : 'dist/js',
// scss
  'scssDest'  : 'src/scss',
  'scssFiles' : 'src/scss/**/*.scss',
// css
  'cssDest'   : 'dist/css'
}

/***************************************************************************
* browser-sync
***************************************************************************/

// Local server
// gulp.task('browser-sync', function() {
//      browserSync({
//           proxy: paths.vhost,
//           open: 'external'
//      });
// });

// Static server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: paths.dest
    },
    startPath: paths.htmlDest
  });
});

// Reload all browsers
gulp.task('bs-reload', function() {
  browserSync.reload()
});

/***************************************************************************
* image tasks
***************************************************************************/

gulp.task('sprite', function() {
  var spriteData = gulp.src(paths.imgDir + '/sprite/*.png')
  .pipe(sprite({
    imgName: 'sprite.png',
    imgPath: '/' + paths.imgDest + '/sprite.png',
    cssName: '_module-sprite.scss'
  }));
  spriteData.img.pipe(gulp.dest(paths.imgDest));
  spriteData.css.pipe(gulp.dest(paths.scssDest + '/module'));
});

/***************************************************************************
* js tasks
***************************************************************************/

gulp.task('jsLib', function() {
  return gulp.src(paths.jsFiles)
    .pipe(concat('lib.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.jsDest))
    .pipe(browserSync.reload({ stream: true }));
});

/***************************************************************************
* Sass tasks
***************************************************************************/

gulp.task('rubySass', function () {
    gulp.src(paths.scssFiles)
        .pipe(plumber())
        .pipe(rubySass({
          r: 'sass-globbing',
          'sourcemap=none': true
        }))
        .pipe(autoprefixer("last 2 version"))
        .pipe(gulp.dest(paths.cssDest))
        .pipe(reload({ stream: true }));
});

/***************************************************************************
* gulp tasks
***************************************************************************/

gulp.task('watch', function() {
  gulp.watch([paths.imgDest + '/sprite/*.png'], ['sprite']);
  gulp.watch([paths.htmlFiles], ['bs-reload']);
  gulp.watch([paths.jsDest], ['jsLib']);
  gulp.watch([paths.scssFiles], ['rubySass']);
});

gulp.task('default', [
    'browser-sync',
    'bs-reload',
    'jsLib',
    'rubySass',
    'sprite',
    'watch'
]);
