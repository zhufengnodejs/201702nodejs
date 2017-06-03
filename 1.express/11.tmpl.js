/**模板*/
let express = require('express');
let path = require('path');
let app = express();
//设置模板引擎，此项必须设置，不设置不能用
app.set('view engine','html');
//模板存放的根目录
app.set('views',path.resolve('tmpl'));
app.engine('html',require('ejs').__express);
app.use(function(req,res,next){
  //res.locals才是真正渲染模板的数据对象
  res.locals.website = '珠峰培训';
  // {website:'珠峰培训'}
  next();
});
app.get('/',function(req,res){
    //模板+数据对象
    //render负责把模板文件和数据对象进行混合并响应输出
    //1参数是模板的相对路径 2数据对象
    //在真正渲染之前会把 {website:'珠峰培训',title:'首页'}
    res.render('home',{title:'首页'});
});
app.get('/user',function(req,res){
   //模板+数据对象
    //render负责把模板文件和数据对象进行混合并响应输出
    //1参数是模板的相对路径 2数据对象
    res.render('user',{title:'用户主页'});
});
app.listen(8080);

