/**
 * 项目中会把express + socket.io配合使用
 * express用来返回静态文件和动态路由
 * socket.io用来发送和接收消息
 **/
let express = require('express');
let app = express();
app.get('/',function(req,res){
    res.sendFile('./index.html',{root:__dirname});
});
//创建一个HTTP服务器
let server = require('http').createServer(app);
//socket.io是依赖HTTP服务器的
let io  = require('socket.io')(server);
//当客户端连接到服务器之后，执行对应的回调函数
io.on('connection',function(socket){
    //连接成功之后服务器向客户端发送一条消息
    socket.send('欢迎光临聊天室');
    //当服务器收到客户端发过来的消息之后回复给客户端一条消息
    socket.on('message',function(msg){
        console.log(msg);
        socket.send('服务器:'+msg);
    });
});
server.listen(8080);
