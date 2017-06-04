//引入数据库
let mongoose = require('mongoose');
mongoose.Promise = Promise;
//连接数据库
mongoose.connect('mongodb://127.0.0.1/201702node');

let UserSchema = new mongoose.Schema({
    name:String,
    age:Number
});
let User = mongoose.model('User',UserSchema);
let users = [];
for(let i=1;i<=10;i++){
    users.push({name:`zfpx${i}`,age:i});
}
/*User.create(users);*/
/**
 * 1.根据ID查询文档 第一个参数是ID
 */
User.findById('5933ca3269f884191c1ec13a',function(err,doc){
   /* console.log(err);
    console.log(doc);*/
})
/**
 * 登录 username password
 * name=zfpx1 age=1
 * findOne 如果找到一条则立即返回，不再继续往下找了
 */
/*User.findOne({name:'zfpx1',age:1},function(err,docs){
    console.log(docs);
});*/
//projection 投影 指定显示的返回的字段
// name:1 include 表示只要显示name，其它字段不显示
// name:0 exclude 排除 表示不显示name字段，其它字段都要显示
// home
//Can't canonicalize query: BadValue Projection cannot have a mix of inclusion and exclusion.
/*User.find({age:{$gt:5}},{name:0,age:1},function(err,docs){
    console.log(err);
    console.log(docs);
});*/
// 分页查询
let pageNum=2; //查询第几页的数据
let pageSize = 3; //每页多少条数据
// sort 按年龄先排序 age:1 升序排列 age:-1 倒序排列
// skip 跳过指定的条数
// limit 限制返回的最大条数
// exec 执行查询

User.find({}).limit(pageSize).skip((pageNum-1)*pageSize).sort({age:-1}).exec(function(err,docs){
    console.log(err);
    console.log(docs);//
});

//
// User.find({}).sort({age:-1}).skip((pageNum-1)*pageSize).limit(pageSize).then(function(docs){
//     console.log(docs);
// });



