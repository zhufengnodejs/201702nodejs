let gulp = require('gulp');
let $ = require('gulp-load-plugins')();

gulp.task('html',function(){
    //先得到要插入的目标
   let target = gulp.src('./src/index.html');
   //要插入到html中的源文件
   let source = gulp.src([
       './build/js/all.min.js',
       './build/css/all.min.css'
   ]);
   target.pipe($.inject(source,{
       ignorePath:'/build/',
       addRootSlash:false
   })).pipe(gulp.dest('./build'))
});