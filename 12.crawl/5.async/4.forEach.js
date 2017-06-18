let fs = require('fs');
let async = require('async');
let data = [
    {filename:'1.txt',content:'1'},
    {filename:'2.txt',content:'2'},
    {filename:'3.txt',content:'3'}
]
/*let count =0;
data.forEach(function(item){
   fs.writeFile(item.filename,item.content,function(err){
       count++;
       if(count == data.length){
           console.log('全部写入完毕');
       }
   })
})*/
//第一个参数是要迭代的数组
//第二个参数是针对每个数组元素需要执行的方法
//第三个参数是最终的回调
async.forEach(data,function(item,cb){
  fs.writeFile(item.filename,item.content,cb);
},function(err){
    console.log('全部写入完毕');
});
