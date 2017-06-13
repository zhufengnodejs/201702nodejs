let gulp = require('gulp');
let $ = require('gulp-load-plugins')();
/**
 启动一个HTTP服务器去预览我们的项目，并且当源码修改后自动刷新浏览器
 **/
gulp.task('serve',function(){
  $.connect.server({
      port:8080, //端口号
      root:'./build',//静态文件根目录
      //当源码发生修改后会自动刷新浏览器
      livereload:true
  });
});
gulp.task('html',function(){
   gulp.src('./src/*.html')
       .pipe(gulp.dest('./build'))
       //通知浏览器重启
       .pipe($.connect.reload())
});
gulp.task('watch',function(){
  gulp.watch('./src/*.html',['html']);
})
//组合任务 此数组是此依赖的任务，只有当依赖的任务全部执行完毕之后才会执行default任务
gulp.task('default',['serve','watch']);