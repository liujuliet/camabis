var gulp = require ('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        port: 8000,
        livereload:true,
        root: ['src']
    });
});

gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);
