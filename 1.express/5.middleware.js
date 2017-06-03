let express = require('express');
let app = express();
// 中央给农民100块
app.use(function(req,res,next){
   req.money = 100;
   console.log(req.money);
   console.log('中央 ',req.money);
   next();
});
//省里
app.use(function(req,res,next){
    req.money -= 20;
    console.log('省里 ',req.money);
    next();
});
//市里
app.use(function(req,res,next){
    req.money -= 40;
    console.log('市里 ',req.money);
    // 如果next里传了参数，表示任务出错了，则会跳过后面所有的正常中间件和路由，交给错误处理中间件处理
    next('钱丢了');//next(error);
});
// 村里
app.use(function(req,res,next){
    req.money -= 30;
    console.log('村里 ',req.money);
    next();
});

app.get('/',function(req,res){
    console.log('农民 ',req.money);
    res.end('received '+req.money);
});
//错误处理中间件有四个参数
app.use(function(err,req,res,next){
    console.log(err);
    console.log('错误处理 ',req.money);
    res.end('error handler ');
});

app.listen(8080);