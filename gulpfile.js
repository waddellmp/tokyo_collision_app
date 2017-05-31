var gulp = require('gulp'),
livereload = require('gulp-livereload');
livereload({ start: true })

gulp.task('html', function(){
  return gulp.src(['./index.html'])
  .pipe(livereload());
});

