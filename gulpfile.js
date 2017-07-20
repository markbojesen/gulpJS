/*
   ========================================================
                            Gulp JS
   ========================================================
*/ 

// Require
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require ('gulp-concat');

// Copy HTML files from SRC to DIST 
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('imageMin', function() {
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Concatenate JS files
gulp.task('concat', function() {
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {

});

// Default tasks
gulp.task('default', ['copyHtml', 'imageMin', 'sass', 'concat']);