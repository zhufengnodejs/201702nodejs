// express是一个函数
let express = require('express');
//调用此函数再返回一个函数 app就是监听函数
let app = express();
//当客户端以GET方法访问/signup路径的时候会调用后面的监听函数进行响应
app.get('/signup',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
  res.end('注册');
});
app.get('/signin',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('登录');
});
// post put delete options head
app.listen(8080);
