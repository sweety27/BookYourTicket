var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('watch', function() {
    gulp.watch('**/*.js');
    gulp.watch('**/*.html');
});

gulp.task('connect', function() {
    connect.server({
        root: ''
    });
});

gulp.task('default', ['connect', 'watch']);