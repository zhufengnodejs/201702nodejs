//引入debug模块
let debug = require('debug');
//传入一个名称，返回一个debug的实例
let loggerA = debug('loggerAName');
//调用此函数会向控制台输出一条日志
//输出的时候会进行判断此日志记录器的名称与环境变量中DEBUG的值是否匹配，如果匹配则输出日志，如果不匹配则不输出日志
// set DEBUG=loggerA 是window下设置环境变量的方式
// export DEBUG=loggerA 是linux下和mac下设置环境变量的方式
loggerA('loggerA');

let loggerB = debug('loggerBName');
loggerB('loggerB');


