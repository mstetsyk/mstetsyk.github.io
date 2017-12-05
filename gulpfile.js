var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('./css/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./css/sass/**/*.sass', ['sass']);
})