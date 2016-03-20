var gulp = require ('gulp'),
    connect = require('gulp-connect'),
    del = require('del'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify');

var paths = {
    dist: 'dist',
    html: ['src/**/*.html'],
    js: ['src/**/*.js'],
    less: ['src/**/*.less']
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

gulp.task('html', function () {
    gulp.src(paths.html)
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
    gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('styles', function() {
    gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.less, ['styles'])
});

gulp.task('default', ['html', 'styles', 'scripts', 'connect', 'watch']);
gulp.task('build', ['clean', 'html', 'styles', 'scripts']);
