var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var config = require('../config').browserify;

var bundler = browserify(config.src);
config.settings.transform.forEach(function(t) {
  bundler.transform(t);
});

gulp.task('scripts', bundle);

function bundle() {
  return bundler.bundle()
  // log errors if they happen
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source(config.outputName))
  .pipe(gulp.dest(config.dest));
}
