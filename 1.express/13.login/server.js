let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
//设置模板引擎
app.set('view engine','html');
//设置模板存放的根目录
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
//Content-Type:application/x-www-form-urlencoded
//username=1&password=1=>{username:1,password:1} req.body
//querystring.parse()
app.use(bodyParser.urlencoded({extended:true}));
//Content-Type:application/json
app.use(bodyParser.json());
let users = [];
//当客户端以GET方式访问 /user/signup的时候,需要返回一个空白表单让用户填写
app.get('/user/signup',function(req,res){
  res.render('signup',{title:'注册'});
});
app.post('/user/signup',function(req,res){
  //得到请求体对象
    let user = req.body;
    users.push(user);
    //重定向 选择客户端向新的一个路径发请求
    res.redirect('/user/signin');
});
app.listen(8080);