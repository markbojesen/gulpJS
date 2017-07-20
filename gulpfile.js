/*
   ========================================================
                            Gulp JS
   ========================================================
*/ 

// Requirements
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Copy HTML files from SRC to DIST 
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('imageMin', () => {
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
})