var gulp = require('gulp'),
livereload = require('gulp-livereload'),
connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('app/*.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
});

gulp.task('start',['connect','html']);