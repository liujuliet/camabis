var gulp = require ('gulp'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    connect = require('gulp-connect'),
    del = require('del'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

var paths = {
    css: 'src/**/*.css',
    dist: 'dist',
    img: 'src/**/*.png',
    jade: 'views/**/*.jade',
    js: ['src/**/*.js', '!src/**/*.min.js', '!index.js'],
    json: 'src/**/*.json',
    lib: ['src/**/*.min.js', 'index.js'],
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

gulp.task('copy:img', function() {
    gulp.src(paths.img)
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

gulp.task('jade', function () {
    gulp.src(paths.jade)
        .pipe(jade())
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
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.less, ['styles']);
    gulp.watch(paths.js, ['scripts']);
});

gulp.task('build', ['clean', 'copy:css', 'copy:img', 'copy:js', 'copy:json', 'jade', 'styles', 'scripts']);
gulp.task('dev', ['build', 'connect', 'watch'])
gulp.task('default', ['dev']);
