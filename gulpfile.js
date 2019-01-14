const gulp = require('gulp');
const connect = require('gulp-connect');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const LessAutoprefix = require('less-plugin-autoprefix');

const autoprefix = new LessAutoprefix({ browsers: ['last 5 versions', 'ie 10'] })
const cleanCSS = require('gulp-clean-css');

// Where your Less files are located
const srcDir = './styles/less';
// Where your CSS files will be generated
const dstDir = './styles/css';

gulp.task('less', function() {
  gulp.src(`${srcDir}/*.less`)
    .pipe(sourcemaps.init())
    .pipe(less({
      plugins: [autoprefix],
    }))
//    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dstDir));
});

gulp.task('default', ['less'], function() {
  gulp.watch(`${srcDir}/*.less`, ['less']);
});

gulp.task('connect', function() {
  gulp.watch(`${srcDir}/*.less`, ['less']);
  connect.server({
    root: '.',
    livereload: true
  })
});
