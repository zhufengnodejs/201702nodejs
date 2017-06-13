let gulp = require('gulp');
// 这个插件可以帮你加载所有的gulp插件
let $ = require('gulp-load-plugins')();
//$.less = require('gulp-less');
// less编译css->合并->保存->压缩->重命名->保存
gulp.task('css',function(){
  gulp.src('./src/less/*.less')
      .pipe($.less())
      .pipe($.concat('all.css'))
      .pipe(gulp.dest('./build/css'))
      .pipe($.cleanCss())
      //{ '0': { dirname: '.', basename: 'total', extname: '.css' } }
      .pipe($.rename(function(obj){
        obj.basename+= '.min';
      }))
      .pipe(gulp.dest('./build/css'))
});