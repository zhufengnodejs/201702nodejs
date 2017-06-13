let gulp = require('gulp');
/**
 * src 用来获取可读流 参数是相对路径
 * dest 获得一个可写流 参数是相对路径
 * './src/*.html' glob 文件路径通配符
 */
gulp.task('copy',function(){
//可读流里有两个文件对象
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./build'));
    //dest 里参数是目录名
});