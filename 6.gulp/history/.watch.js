let gulp = require('gulp');
gulp.task('copy',function(){
//可读流里有两个文件对象
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./build'));
    //dest 里参数是目录名
});
gulp.task('watch',function(){
    //监控src目录下所有的html文件的变化，当它们变化之后执行对应的回调函数
    /*gulp.watch('./src/!*.html',function(event){
        console.log(event);
        /!**
         * type 变化类型 新增 修改 删除
         * path 变化的文件路径
         * { type: 'changed',
  path: 'E:\\201702nodejs\\6.gulp\\src\\base.html' }
         *!/
    })*/
    gulp.watch('./src/*.html',['copy'])
});