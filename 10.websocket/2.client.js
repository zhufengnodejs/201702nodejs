let Socket = require('ws');
//用客户端连接服务器
let socket = new Socket('ws://localhost:8080');
socket.on('open',function(){
    console.log('连接建立成功');
    socket.send('服务器你好!');
});
socket.on('message',function(msg){
    console.log(msg);
});