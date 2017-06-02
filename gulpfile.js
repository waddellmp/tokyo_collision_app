'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var sourceMaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var size = require('gulp-size');
var livereload = require('gulp-livereload');
var header = require('gulp-header');

var resources = {
    scripts: [
        'src/**/*.js',
        'lib/*.js'
    ],
    styles: [
        'lib/**/*.css',
        'src/**/*.css'
    ],
    dev: [
        'lib/dev/**/*.js'
    ]
};

gulp.task('bundle-css', function () {
    return gulp.src(resources.styles)
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle-js', function () {
    return gulp.src(resources.scripts)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('reload', function () {
    return gulp.src(resources.scripts.concat(resources.dev))
        .pipe(sourceMaps.init())
        .pipe(concat('bundle.js'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('print-size', function () {
    return gulp.src('dist/**/*.js')
        .pipe(size({
            showFiles: true
        }));
});

gulp.task('dev', ['bundle-css', 'dev-js'], function () {
    livereload.listen();
    gulp.watch(resources.styles, ['bundle-css']);
    gulp.watch(resources.scripts, ['dev-js']);
});

gulp.task('bundle', ['bundle-css', 'bundle-js', 'print-size']);