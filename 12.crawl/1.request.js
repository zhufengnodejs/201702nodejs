let request = require('request');
let iconv = require('iconv-lite');
let url = 'http://top.baidu.com/category?c=1&fr=topindex';
/**
 * err 错误对象
 * response 响应对象
 * body 响应体
 */
request({url,encoding:null},function(err,response,body){
    console.log(response.statusCode);
    body = iconv.decode(body,'gbk');
    console.log(body);
})