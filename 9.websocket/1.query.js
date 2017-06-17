let express = require('express');
let app = express();
app.get('/clock',function(req,res){
    /**
     * 跨域的响应头 都是以Access-Control-Allow-开头的
     * Access-Control-Allow-
     * Origin 来源
     * Headers 允许的请求头
     * Methods 允许客户端发送的方法
     */
 res.setHeader('Access-Control-Allow-Origin','*');
 res.send(new Date().toLocaleString());
});
app.listen(3000);