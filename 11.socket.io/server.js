/**
 * 项目中会把express + socket.io配合使用
 * express用来返回静态文件和动态路由
 * socket.io用来发送和接收消息
 **/
let express = require('express');
let app = express();
let path = require('path');
app.use(express.static(path.resolve('../node_modules')));
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
    //用来存放此用户的用户名,必须 放在函数里面
    let username;
    /*socket.emit('message','欢迎光临聊天室');*/
    //当服务器收到客户端发过来的消息之后回复给客户端一条消息
    socket.on('message',function(msg){
         if(username){//如果username有值，则意味着设置过呢称
             io.emit('message',{
                 username,
                 content:msg,
                 createAt:new Date()
             });
         }else{//如果没有值，则意味着这是此客户端发送的第一条消息，那么会把这个消息的内容作为呢称
            username = msg;
            io.emit('message',{
                username:'系统',
                content:`欢迎${username}加入聊天室`,
                createAt:new Date()
            });
         }
    });
});
server.listen(8080)

/*
Socket.prototype.send = function(){
    var args = Array.prototype.slice.call(arguments);// ['hello']
    args.unshift('message');//['message','hello']
    this.emit.apply(this, args);
    this.emit('message','hello');
    this.on('message',function(){});
    return this;
};*/
/**
 1. 实现匿名聊天
 2. 实现具名聊名
 3. 实现私聊
 4. 数据持久化
 5. 在系统加载时自动加载最近的20条数据
 6. 分房间聊天
 7. 消息的撤消和删除
 **/