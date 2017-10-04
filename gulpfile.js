'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var sourceMaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');

var resources = {
    html: [
        'src/**/*.html'
    ],
    css: [
        'lib/**/*.css',
        'src/**/*.css'
    ],
    js: [
        'lib/*.js',
        'src/**/*.js'
    ],
    dev: [
        'lib/dev/**/*.js'
    ]
};

// Must copy HTML to /dist for our Express server.
gulp.task('copy-html', function () {
    return gulp.src(resources.html)
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('bundle-css', function () {
    return gulp.src(resources.css)
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('bundle-js', function () {
    return gulp.src(resources.js)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('development-js', function () {
    return gulp.src(resources.js.concat(resources.dev))
        .pipe(sourceMaps.init())
        .pipe(concat('bundle.js'))
        .pipe(sourceMaps.write(''))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('reload-server', function () {
    nodemon({
        script: 'server.js',
        ext: 'js'
    });
});

gulp.task('dev', ['copy-html', 'bundle-css', 'development-js', 'reload-server'], function () {
    livereload.listen();
    gulp.watch(resources.html, ['copy-html']);
    gulp.watch(resources.css, ['bundle-css']);
    gulp.watch(resources.js, ['development-js']);
});

gulp.task('bundle', ['bundle-css', 'bundle-js']);
