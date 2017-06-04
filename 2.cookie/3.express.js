let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();
//基本上所有的中间件都有特点，它们都是一个函数，所以调用一下才会返回真正的中间件函数
//使用此中间件之后，会在   req.cookies
app.use(cookieParser());
//写cookie
app.get('/write',function(req,res){
   //res.setHeader('Set-Cookie','name=zfpx');
    //cookie方法是由express提供的
    //domain 指的是当客户端再次向哪个域名发请求的时候才会带上此cookie
   //res.cookie('color','blue',{domain:'localhost'});
    //path主是指客户端再次向哪个路径发请求的时候才会带上cookie 默认是 / ,匹配是前缀
   // res.cookie('color','blue',{path:'/read2'});
  //  res.cookie('color','blue',{expires:new Date(Date.now()+10*1000)});
   res.cookie('color','blue',{httpOnly:true});
   res.send('ok');
});
//读cookie
app.get('/read',function(req,res){
  res.send(req.cookies);
});
app.get('/read2',function(req,res){
    res.send(req.cookies);
});
app.get('/read2/read3',function(req,res){
    res.send(req.cookies);
});

app.listen(8080);