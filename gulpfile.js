var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var util = require('gulp-util');
var imageop = require('gulp-image-optimization');

// Static Server + watching scss/jade files
gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: "./app"
  });
  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("scss/*.scss").on('change', browserSync.reload);
  gulp.watch("app/*.html").on('change', browserSync.reload);
  gulp.watch("app/*.php").on('change', browserSync.reload);
  gulp.watch("app/js/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("scss/style.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task('minify', function () {
  gulp.src([
    'app/css/style.css'
  ])
    .pipe(plumber())
    .pipe(minifyCSS({processImport: false}))
    .pipe(concat('style.min.css'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('app/css'));
});

gulp.task('images', function(cb) {
  gulp.src(['images/**/*.png','images/**/*.jpg','images/**/*.gif','images/**/*.jpeg','images/**/*.svg']).pipe(imageop({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  })).pipe(gulp.dest('app/images')).on('end', cb).on('error', cb);
});

gulp.task('default', ['serve']);