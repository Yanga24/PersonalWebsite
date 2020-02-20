// let add =require("../src/simpleCalc")
const {add,multiply} = require("../src/simpleCalc")

describe("A simple calculator that adds", function(){  
    it("should be able add two numbers", function(){

    expect(add(1,2)).toEqual(3);
    expect(add(-1,-1)).toEqual(-2);
    }) 

})

describe("A simple calculator that adds", function(){
    it("should be able add more numbers", function(){

    expect(add(1,2,3,4,5)).toEqual(15);
    expect(add(1,2)).toEqual(3);
    expect(add(-1,-1)).toEqual(-2);
    }) 
})

describe("A simple calculator that multiply", function(){
 it("should be able multiply two numbers", function(){

    expect(multiply(1,3)).toEqual(3);
    expect(multiply(-1,3)).toEqual(-3);
    }) 
})

describe("A simple calculator that multiply", function(){
    it("should be able multiply more numbers", function(){

    expect(multiply(1,2,3,4,5)).toEqual(120);
    expect(multiply(1,3)).toEqual(3);
    expect(multiply(-1,3)).toEqual(-3);
})
})