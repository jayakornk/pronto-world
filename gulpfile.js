const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const LessAutoprefix = require('less-plugin-autoprefix');
const LessPluginCleanCSS = require('less-plugin-clean-css')

const autoprefix = new LessAutoprefix({ browsers: ['last 5 versions', 'ie 10'] })
// const cleancss = new LessPluginCleanCSS({ advanced: true });
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
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dstDir));
});

// gulp.task('less', function() {
//   gulp.src(`${srcDir}/*.less`)
//     .pipe(sourcemaps.init())
//     .pipe(less({
//       plugins: [autoprefix, cleancss],
//     }))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(dstDir));
// });

gulp.task('default', ['less'], function() {
  gulp.watch(`${srcDir}/*.less`, ['less']);
});