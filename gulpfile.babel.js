const gulp = require('gulp');
const del = require('del');
const $ = require('gulp-load-plugins')();

gulp.task('es6', function() {
  gulp.src('es6.js')
    .pipe($.plumber())
    .pipe($.newer('dist/es6/'))
    .pipe($.babel())
    .pipe(gulp.dest('dist/es6/'));
});

gulp.task('watch', ['es6'], function() {
  gulp.watch('es6.js', ['es6']);
});


gulp.task('cleans', function() {
  del.sync(['dist/es6/es6.js']);
});
