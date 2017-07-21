/*
   ========================================================
                            Gulp JS
   ========================================================
*/ 

// Require
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require ('gulp-concat');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

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

// Concatenate and Uglify JavaScript files
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


/*  
    ========================================================
    I have purposely left out the below gulp tasks to speed up
    the reload time of browser-sync. Simply copy/paste below tasks into
    the array when required for production.
    Dist folder will then be created automatically
    Tasks: 'copyHtml', 'imageMin', 'concat',
    ========================================================
*/

// Default tasks
gulp.task('default', ['sass', 'serve']);