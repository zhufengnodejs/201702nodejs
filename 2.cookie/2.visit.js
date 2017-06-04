let http = require('http');
let url = require('url');
let querystring = require('querystring');
http.createServer(function(req,res){
    let urlObj = url.parse(req.url,true);
    let {pathname} = urlObj;
    if(pathname == '/visit'){
        // name=zfpx; age=9; visit=1
        // name=zfpx&age-9&visit=1
        //先取出请求头中的cookie字段
        let cookie = req.headers.cookie;
        //把字符串符转成对象
        let cookieObj = querystring.parse(cookie,'; ');
        // cookieObj {name:zfpx,age:9,visit:1}
        //取出老的visit值
        let visit = cookieObj.visit;
        //如果有visit值说明是老顾客，原来值加1
        if(visit){
            visit++;
        }else{//如果没有visit值说明是新顾客 ，默认值为1
            visit = 1;
        }
        //每次响应的时候都把最新的visit值发送给客户端
        res.setHeader('Set-Cookie',`visit=${visit}`);
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end(`欢迎你第${visit}次光临`);
    }else{
        res.end('404');
    }
}).listen(8080);