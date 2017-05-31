//Create resources object
var resources = {
    css: ['src/css/*.css'],
    js: ['src/scripts/*.js'],
    html: ['./index.html']
}
  var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});
 

 
gulp.task('watch', function () {
  gulp.watch('resources.html').on('change', connect.reload);
});
 
gulp.task('default', ['connect','watch']);