let http = require('http');
let url = require('url');
http.createServer(function(req,res){
  let urlObj = url.parse(req.url,true);
  let {pathname} = urlObj;
  if(pathname === '/write'){
      //通过响应头写入cookie
      res.setHeader('Set-Cookie','age=9');
      res.end('write ok');
  //客户端再次访问服务器的时候要把cookie带回给服务器
  }else if(pathname === '/read'){
      //取请求头中字段的时候都必须用小写字母来取
     let cookie = req.headers.cookie;
      res.end(cookie);
  }else{
      res.end('404');
  }
}).listen(8080);