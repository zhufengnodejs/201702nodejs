//1.引入mongoose
let mongoose = require('mongoose');
mongoose.Promise = Promise;
//2. 连接数据
mongoose.connect('mongodb://127.0.0.1/201702crawl');
// 3.定义Schema
let MessageSchema = new mongoose.Schema({
    username:String,
    content:String,
    createAt:{type:Date,default:Date.now}
});
// 4. 定义模型
exports.Message = mongoose.model('Message',MessageSchema);
