/**
 * 编写一个路由例子
 * GET  /signup 返回一个字符串 注册
 * GET  /signin 返回一个字符串 登录
 * GET /xxx     返回一个字符串 页面未找到
 **/
let http = require('http');
/**
 * 1. 所有的业务都耦合在一起，难以维护
 * 2. 容易引起误修改，不方便重构
 */
http.createServer(function(req,res){
  let method = req.method;///请求的方法
  let url = req.url;//请求的路径
  res.setHeader('Content-Type','text/html;charset=utf-8');
  if(method == 'GET'){
    if(url === '/signup'){
        res.end('注册');//写入响应体并且结束响应
    }else if(url === '/signin'){
        res.end('登录');
    }else{
        res.end('页面未找到');
    }
  }else{
      res.end('页面未找到');
  }
}).listen(8080);
