let pattern = '/users/<%=id%>/<%=name%>';
// '/users/\w+/\w+';
let request = '/users/1/zfpx';
// req.params = {id:1,name:'zfpx'}
let params = {};
let paramNames = [];
// :(id) :(name)
pattern = pattern.replace(/<%=(\w+)%>/g,function(){
    paramNames.push(arguments[1]);
    return '(\\w+)';
});
console.log(pattern);//  /users/(\w+)/(\w+)
console.log(paramNames); // [ 'id', 'name' ]
// '/users/1/zfpx';
let result = request.match(new RegExp(pattern));
console.log(result);
//[ '/users/1/zfpx', '1', 'zfpx', index: 0, input: '/users/1/zfpx' ]
for(let i=0;i<paramNames.length;i++){
    params[paramNames[i]] = result[i+1];
}
console.log(params);