/**
 * 项目中会把express + socket.io配合使用
 * express用来返回静态文件和动态路由
 * socket.io用来发送和接收消息
 **/
let express = require('express');
let Message = require('./model').Message;
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
//在全局下声明一个对象，key是用户名 值是对应的socket对象
let sockets =  {};
//当客户端连接到服务器之后，执行对应的回调函数
io.on('connection',function(socket){
    //连接成功之后服务器向客户端发送一条消息
    //用来存放此用户的用户名,必须 放在函数里面
    let username;
    /*socket.emit('message','欢迎光临聊天室');*/
    //当服务器收到客户端发过来的消息之后回复给客户端一条消息
    socket.on('message',function(msg){
         if(username){//如果username有值，则意味着设置过呢称
             //@a   @b我 xxx
             let reg = /@([^ ]+) (.+)/;
             let result = msg.match(reg);
             if(result){
                let toUser = result[1];
                let content = result[2];
                sockets[toUser].send({
                    username,
                    content,
                    createAt:new Date().toLocaleString()
                });
             }else{//公共聊天
                 Message.create({username, content:msg},function(err,doc){//doc是保存之后的文档对象
                     io.emit('message',doc);
                 })
             }
         }else{//如果没有值，则意味着这是此客户端发送的第一条消息，那么会把这个消息的内容作为呢称
            username = msg;
            //当第一次设置完呢称后可以把呢称和当前的socket对象的关联存放在全局变量中
            sockets[username]= socket;
            io.emit('message',{
                username:'系统',
                content:`欢迎${username}加入聊天室`,
                createAt:new Date().toLocaleString()
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
     1. 让用户名可以点击
     2. 当用户点击用户名的时候会在输入框里插入字符 @用户名 xxx
     3. 然后你可以输入你想说的话
     4. 然后点击发送，发送给服务器
     5. 服务器会向对应的用户单个发送消息
 4. 数据持久化

 5. 在系统加载时自动加载最近的20条数据
 6. 分房间聊天
 7. 消息的撤消和删除
 **/