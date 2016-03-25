var gulp = require ('gulp'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    connect = require('gulp-connect'),
    del = require('del'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

var paths = {
    css: 'src/**/*.css',
    dist: 'dist',
    html: 'src/**/*.html',
    js: ['src/**/*.js', '!src/**/*.min.js'],
    json: 'src/**/*.json',
    lib: 'src/**/*.min.js',
    less: 'src/**/*.less'
}

gulp.task('clean', function() {
    del.sync(paths.dist);
});

gulp.task('connect', function() {
    connect.server({
        port: 8000,
        livereload:true,
        root: [paths.dist]
    });
});

gulp.task('copy:css', function() {
    gulp.src(paths.css)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('copy:js', function() {
    gulp.src(paths.lib)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('copy:json', function() {
    gulp.src(paths.json)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('html', function () {
    gulp.src(paths.html)
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
    gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('styles', function() {
    gulp.src(paths.less)
        .pipe(less())
        .pipe(concatCss("styles/styles.css"))
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.less, ['styles']);
    gulp.watch(paths.js, ['scripts']);
});

gulp.task('build', ['clean', 'copy:css', 'copy:js', 'copy:json', 'html', 'styles', 'scripts']);
gulp.task('dev', ['build', 'connect', 'watch'])
gulp.task('default', ['dev']);
