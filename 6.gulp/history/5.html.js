let gulp = require('gulp');
let $ = require('gulp-load-plugins')();
gulp.task('html',function(){
  gulp.src('./src/*.html')
      .pipe($.minifyHtml())
      .pipe(gulp.dest('./build'))
});