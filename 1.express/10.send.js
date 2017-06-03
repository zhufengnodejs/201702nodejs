let express = require('express');
let app = express();
let users = [];
app.use(function(req,res,next){
    res.send = function(){

    }
    next();
});
// /signup?username=zfpx
app.get('/signup',function(req,res){
  let username = req.query.username;
  users.push(username);
  //end只能接收字符串或者Buffer
  //res.end(JSON.stringify(users));
  // 可以接收任何类型 对象 JSON 数字 字符 Buffer
  res.send('中文');
});
app.listen(8080);