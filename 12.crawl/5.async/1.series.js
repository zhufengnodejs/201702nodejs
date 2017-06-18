let async = require('async');
console.time('cost');
// 串行的时候，任务执行总时间等于每个时间任务的总和
async.series([
    function(cb){
       setTimeout(function(){
           console.log('1');
           cb(null,'1');
       },3000);
    },
    function(cb){
        setTimeout(function(){
            console.log('2');
            //如果执行出错了，会跳过后续的所有任务
            cb('出错了','2');
        },2000);
    },
    function(cb){
        setTimeout(function(){
            console.log('3');
            cb(null,'3');
        },1000);
    }
],function(err,result){
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
});