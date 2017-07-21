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
var browserSync = require('browser-sync').create();

// Copy HTML files from SRC to DIST 
gulp.task('copyHtml', function() {
    gulp.src('./*.html')
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

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});


// Tasks. C/P into default tasks as desired
// Default tasks
gulp.task('default', ['sass', 'serve']);