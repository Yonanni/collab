//reading file in node practise
const fs = require('fs')

fs.readFile('./Isaac.txt',(err,data)=>{
    if(err){
        console.log('errooo')
    }
    console.log(data.toString());

});

// js practise 

// function that takes augument and returns the augument
const identity = (a,b) => a,b;

// Binary function that adds two numbers and returns sum
const addb = (a,b) => a + b;

//  Binary function that subs two numbers and returns sum
const subb = (a,b) => a - b;

// Write a binary function that takes two numbers and returns their product
 const mulb = (a,b) => a*b;

//function that takes numbers and returns the smaller one
const minb = (a,b) => a > b ? a : b;

//function that takes numbers and returns the bigger one
const maxb = () => a < b ? a : b;

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((a, b)=>a+b) 

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((a, b)=>a-b) 

//Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((a, b)=>a*b , 1) 

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((a, b)=> Math.min(a, b)) 

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((a, b)=> Math.max(a, b)) 

// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    return nums.pop() + addRecurse(...nums);
}

module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
    max,
    addRecurse,
}