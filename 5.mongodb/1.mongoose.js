let mongoose = require('mongoose');
//如何使用mongoose操作mongodb数据库
//1.先连接上数据库
//连接字符串的格式 mongodb://主机名或者IP:端口号/数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/201702node');
//2.定义集合的骨架模型 key就是文档的属性名 值是此属性的类型
//外键别人家的主键 别的集合的主键 {_id,name,age}
// 文章 {title,content,author-_id} 外键
let UserSchema = new mongoose.Schema({
    name:String,
    age:Number
},{collection:'user'});//通过collection参数强行指定集合的名称
//3. 定义模型 schema不能操作数据库 模型可以操作数据库
//默认集合的名称 模型名->小写user->复数users
let User = mongoose.model("User",UserSchema);
//向数据库的集合中插入一个文档 db.stu.insert({});
//Cast to Number failed for value "aa" at path "age"
//如果给的字段多于schema定义会被抛弃或忽略掉
//如果给的定义少于schema定义则只保存给定的字段
/*User.create([{name:'zfpx1',age:1},{name:'zfpx2',age:2},{name:'zfpx3',age:3},{name:'zfpx3',age:3}],function(err,doc){
    console.log(err);
    //doc是保存成功之后的文档对象
    //{ name: 'zfpx1', age: 1, _id: 5933bd4fff0f520bdccedb9e }
    console.log(doc);
});*/
/**
 * 1.指定更新范围 你要更新哪些文档
 * 2.是更新后的值 你要把这些文档更新成什么样子
 * multi:true表示匹配所有的记录
 */
// User.update({age:3},{name:'zfpx33'},{multi:true},function(err,result){
//     console.log(err);
//     //{ ok: 1, nModified: 1, n: 1 }
//     // ok=1表示操作成功   n表示匹配的条数 nModified实际更新的条数
//     //{ ok: 1, nModified: 0, n: 1 }
//     //只匹配第一条
//     //{ ok: 1, nModified: 1, n: 2 }
//     console.log(result);
// });
///result: { ok: 1, n: 2 },
//删除的时候默认会删除掉所有的匹配的记录
/*User.remove({age:3},function(err,result){
    console.log(err);
    console.log(result);
});*/
// 数据操作 1分插入 9分查询
//不管找到没有找到，不管找到多少条都会返回一个数组
User.find({age:1},function(err,docs){
    console.log(err);
    console.log(docs);
});





