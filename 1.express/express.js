let url = require('url');
function createApplication(){
  //当http服务器收到请求后会交由app函数处理，并把最原始的req,res给它
  let app = function(req,res){
      //取出的是当前请求的路径名
    let pathname = url.parse(req.url).pathname;
    for(let i=0;i<app.routes.length;i++){
        let route = app.routes[i];
        //如果本次请求的方法名和路径名都和此条规则的方法和路径名相匹配，那么此规则的监听 函数就是我们需要的处理函数
        if(route.method == req.method && route.pathname == pathname){
            return route.listener(req,res);
        }
    }
      res.end('Not Found');
  }
  //在app内部缓存一个路由的数组
  app.routes = [];
  // pathname == req.url   /user/signup?name=zfpx
  app.get = function(pathname,listener){
     app.routes.push({method:'GET',pathname,listener});
  }
  app.post = function(pathname,listener){
        app.routes.push({method:'POST',pathname,listener});
  }
  app.listen = function(port){
    //app其实是一个监听函数
    require('http').createServer(app).listen(port);
  }
  return app;
}

module.exports = createApplication;