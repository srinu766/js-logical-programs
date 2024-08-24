var a = 10
var b=20;
function addLogic(e,f){
    return e+f
}

function add(x,y){
    const total = addLogic(x,y)
    return total;
}

var sum = add(a,b);

console.log("sum",sum)