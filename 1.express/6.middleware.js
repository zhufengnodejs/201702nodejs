let ware1 = function(next){
  setTimeout(function(){
      console.log('ware1');
      next();
  },3000)

}
let ware2 = function(next){
    console.log('ware2');
    next();
}
let ware3 = function(next){
    console.log('ware3');
    next();
}
let wares = [ware1,ware2,ware3];
let index = 0;
function next(){
    let ware = wares[index++];
    ware&&ware(next);
}
next();
