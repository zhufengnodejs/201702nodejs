let async = require('async');
console.time('cost');
async.parallel([
   function(cb){
     setTimeout(function(){
         console.log('a');
         //: Callback was already called.
         cb(null,'a');
     },3000)
   },
    function(cb){
        setTimeout(function(){
            console.log('b');
            cb(null,'b');
        },2000)
    },
    function(cb){
        setTimeout(function(){
            console.log('c');
            cb(null,'c');
        },1000)
    }
//在结果数组中结果的排列顺序和任务的完成先后顺序无关
//跟任务在数组中的排列顺序有关
],function(err,result){
    console.log(err);
    console.log(result);//[a,b,c]
    console.timeEnd('cost');
});