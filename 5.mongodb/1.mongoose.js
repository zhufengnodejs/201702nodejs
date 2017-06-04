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
/*User.create({name:'zfpx1'},function(err,doc){
    console.log(err);
    //doc是保存成功之后的文档对象
    //{ name: 'zfpx1', age: 1, _id: 5933bd4fff0f520bdccedb9e }
    console.log(doc);
});*/





