let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();
app.use(cookieParser());
const SESSION_KEY = 'xxx';
//这里放着所有的会话数据
let sessions = {};
/**
 * 1. 第一次访问的时候，咖啡厅会送给1000元的余额
 * 2. 以后每次访问的时候，都会扣掉100元.
 */
app.get('/visit',function(req,res){
    //看看客户端有没有带sessionId到服务器
   let sessionId = req.cookies[SESSION_KEY];//899
   if(sessionId){
       let sessionObj = sessions[sessionId];
       if(sessionObj){
           sessionObj.balance -= 100;
           res.send(`亲爱的顾客，欢迎你的再次光临,卡上余额${sessionObj.balance}元`);
       }else{
           newCard();
       }
   }else{//第一次的时候肯定是没有sessionId的
       //sessionId第一保证唯一 第二要保证不容易被猜出来
       newCard();
   }

   function newCard(){
       let newSessionId = Date.now()+''+Math.random();//899
       //在服务器端开辟一块内存，记录此卡号的数据
       sessions[newSessionId] = {balance:1000};//899
       res.cookie(SESSION_KEY,newSessionId);
       res.send(`亲爱的顾客，欢迎你的第一次光临,送你一张会员卡，卡上余额1000元`);
   }
});

app.listen(8080);