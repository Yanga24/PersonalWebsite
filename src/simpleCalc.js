function add(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
};


function multiply(){
    let product = 1;
    for(let i=0; i<arguments.length; i++){
        product *= arguments[i];
    }
    return product;
};


console.log(add(1,2))
console.log(add(-1,-1))
console.log(add(1,2,3,4,5))
console.log(multiply(1,3))
console.log(multiply(-1,3))
console.log(multiply(1,2,3,4,5))

module.exports = { add, multiply}