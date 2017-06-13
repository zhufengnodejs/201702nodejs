let gulp = require('gulp');
//合并JS文件插件
//gulp插件有个特点，导出的都是一个函数，需要调用一下,是为了传参数
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let babel = require('gulp-babel');
// * 匹配任意字符，除了路径分隔符
// ** 匹配任意字符，包括路径分隔符
gulp.task('js',function(){
    // [{filename:'a.js'},{filename:'b.js'}]
    gulp.src('./src/**/*.js')
        //babel可以把es6转成es5
        .pipe(babel())
    //[{filename:'all.js',content:''}]
        .pipe(concat('all.js'))//参数指的的是合并后的文件名
        .pipe(gulp.dest('./build/js'))
        .pipe(uglify())//丑化 压缩
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('./build/js'))
});