## mongodb命令
查看当前数据库
```
db
```
向当前数据库中的stu集合中插入一个文档
```
db.stu.insert({name:'zfpx1'});
```
删除当前数据库
```
db.dropDatabase();
```
删除某个集合
```
db.stu.drop()
```
## 主键
就是一个文档最主要的键，当你向数据库的某个集合中插入一个文档的时候，mongodb会自动帮你补一个主键 _id
- 唯一性 每个文档的主键不会相同
- 业务无关性

```
db.stu.find();
```

