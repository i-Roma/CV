var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    spritesmith = require('gulp.spritesmith');

gulp.task('sass', function() {
    return sass('./sass/import.sass')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
    gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);



gulp.task('sprite', function () {
    var spriteData = gulp.src('img/sprites/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('img/'));
});