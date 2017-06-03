let express = require('express');
let url = require('url');
let app = express();
/**
 * 访问 /signin?username=zfpx 的时候把 username的值取出来赋给 username;
 * 当访问 /user的时候，在中间里判断此用户是否登录，如果未登录，提示没有权限访问，如果已经登录，正常访问
 */
let username;
app.use(function(req,res,next){
    let urlObj = url.parse(req.url,true);//
    let {query,pathname} = urlObj;
    if(pathname == '/user'){
        if(username){
            next();
        }else{
            res.end('Not Allowed');
        }
    }else{
        next();
    }
});
//登录
// /signin?username=zfpx
app.get('/signin',function(req,res){
    ///signin?username=zfpx  {query:{username:'zfpx'},path:'/signin'}
    let urlObj = url.parse(req.url,true);//
    let {query,pathname} = urlObj;
    username = query.username;
    res.end('login successfully');
});
app.get('/user',function(req,res){
    res.end('welcome '+username);
});
app.listen('8080');