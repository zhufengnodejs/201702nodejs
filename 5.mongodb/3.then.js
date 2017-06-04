let User = {
    // 10 9 8 (7 6 5) 4 3 2 1
    data:[{age:1},{age:2},{age:3},{age:4},{age:5},{age:6},{age:7},{age:8},{age:9},{age:10}],
    skip(skip){
      this._skip = skip;
      return this;
    },
    limit(limit){
        this._limit = limit;
        return this;
    },
    sort(sortObj){
        // ['age']
        let key = Object.keys(sortObj)[0];//age
        let order = sortObj[key];// 1 -1
        this._sort = function(a,b){
            return (a[key]-b[key])*order;
        }
        return this;
    },
    exec(callback){
        let result = this.data.sort(this._sort).slice(this._skip,this._skip+this._limit);
        callback(null,result);
        return this;
    }
}
User.limit(3).skip(3).sort({age:1}).exec(function(err,docs){
    console.log(err);
    console.log(docs);// 7 6 5
});