let express = require('express');
let bodyParser = require('body-parser');
let app = express();
//我们已经让bodyParser插件解析json格式的请求体了
//是根据请求头中的Content-Type
//app.use(bodyParser.json());
//如果没有指定请求头中的内容类型，那么格式就是纯文本的
app.use(bodyParser.text());
let messages = [];
app.use(function(req,res,next){
    //允许哪个来源
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
    //允许客户端发送的请求头字段
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
app.post('/message',function(req,res){
    console.log(req.body);
    messages.push(req.body);
    res.send(messages);
});
app.get('/message',function(req,res){
    /**
     * 跨域的响应头 都是以Access-Control-Allow-开头的
     * Access-Control-Allow-
     * Origin 来源
     * Headers 允许的请求头
     * Methods 允许客户端发送的方法
     */
    let {offset} = req.query;
 res.send(messages.slice(offset));
});
app.listen(3000);