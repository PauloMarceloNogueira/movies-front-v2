'use strict'

import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';

const scssFiles = './src/stylesheet/main.scss'
const cssDest = './public/css';
const sassDevOptions = {
  outputStyle: 'expanded',
};
const sassProdOptions = {
  outputStyle: 'compressed',
};

// Tasks
gulp.task('default', ['sassdev', 'sassprod', 'watch'])

gulp.task('sassdev', () => {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('sassprod', () => {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', () => {
  gulp.watch('./src/stylesheet/**/**.scss', ['sassdev', 'sassprod']);
});
