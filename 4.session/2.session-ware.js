let express = require('express');
//会话中间件
let session = require('express-session');
let app = express();
//就会在req.session
app.use(session({
    secret:'zfpx',//加密的秘钥
    resave:true,//每次响应的时候都 重新保存session
    saveUninitialized:true//保存未初始化的session
}));
//req.session就是会话对象，也就是客户端在服务器端的对应记录对象
app.get('/write',function(req,res){
    req.session.username = 'admin';
    res.end('write ok');
});
app.get('/read',function(req,res){
   console.log(req.session.username);
   res.send(req.session.username);
});
app.listen(8080);