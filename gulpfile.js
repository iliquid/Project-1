var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync({
    	port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('watch', function () {
gulp.watch([
	'app/*.html',
	'app/js/**/*.js',
	'app/css/**/*.css'
]).on('change', browserSync.reload)
});

gulp.task('default', ['browser-sync', 'watch']);