// express是一个函数
let express = require('express');
//调用此函数再返回一个函数 app就是监听函数
let app = express();
//app.use表示使用一个中间件
//1.进行一些业务处理 2 决定是否继续执行
app.use(function(req,res,next){
    //中间件用来编写公用的逻辑
    res.out = function(data,charset){
        res.setHeader('Content-Type','text/html;charset='+(charset||'utf-8'));
        res.end(data);
    }
    //表示继续执行下一个中间件或者路由
    next();
});
/**
 * 1.编写公共处理逻辑
 * 2.添加一些公用的方法
 * 3.进行一些业务逻辑判断
 */
app.use(function(req,res,next){
    next();
});
//当客户端以GET方法访问/signup路径的时候会调用后面的监听函数进行响应
app.get('/signup',function(req,res){
  //res.end('注册');
    res.out('注册');
});
app.get('/signin',function(req,res){
    res.out('登录','utf-8');
});
// post put delete options head
app.listen(8080);
