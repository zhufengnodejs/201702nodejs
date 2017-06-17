let Server = require('ws').Server;
//指定一个端口号
let server = new Server({port:8080});
//监听客户端的连接,当客户端连接上服务器之后执行对应的回调函数
//socket对象是一个连接对象,服务器端为每个客户端创建一个对应socket对象
server.on('connection',function(socket){
    //监听客户端发过来的消息
  socket.on('message',function(msg){
        console.log(msg);
        socket.send('服务器:'+msg);
  });
});

