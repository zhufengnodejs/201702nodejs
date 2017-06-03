let express = require('express');
let STATUS_CODES =  require('_http_server').STATUS_CODES;
let app = express();
let users = [];
app.use(function(req,res,next){
    res.send = function(params){
        res.setHeader('Content-Type','text/html;charset=utf-8')
        switch (typeof params){
            case 'object':
                params = JSON.stringify(params)
                break;
            case 'number':
                // 404 NotFound 200 OK
                res.statusCode = params;
                params = STATUS_CODES[params];
                break;
        }
        res.end(params);
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
  res.send(304+'');//res.end(字符串Buffer)
});
app.listen(8080);