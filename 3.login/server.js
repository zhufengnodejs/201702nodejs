let express = require('express');
//express只自带一个中间件叫 express.static 静态文件服务中文件。其它的都需要单独安装 npm install
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let app = express();
//输入的用户名和密码都是admin就认为登录成功
//设置模板引擎
app.set('view engine', 'html');
//设置html模板用ejs语法进行渲染
app.engine('html', require('ejs').__express);
//当客户端以GET方式访问/user/signup的时候由回调函数进行处理
// req.body
app.use(bodyParser.urlencoded({extended: true}));
//req.cookies = querystring.parse(req.header.cookie,'; ')
app.use(cookieParser());
app.get('/user/signin', function (req, res) {
    res.render('signin', {title: '登录'});
});
app.post('/user/signin', function (req, res) {
    let user = req.body;
    if (user.username == 'admin' && user.password == 'admin') {
        //如果登录成功，向客户端写入cookie
        //res.setHeader('Set-Cookie','username=admin');
        res.cookie('username',user.username);
        res.redirect('/welcome');
    } else {
        res.redirect('back');
    }
});
app.get('/welcome',function(req,res){
//req.cookies = querystring.parse(req.header.cookie,'; ')
    res.send(`欢迎${req.cookies.username}光临`);
});
// action是提交的路径 如果不指定默认就是当前路径
// method提交的方法
//请求行 method url

app.listen(8080);