//reading file in node practise
const fs = require('fs')

fs.readFile('./Isaac.txt',(err,data)=>{
    if(err){
        console.log('errooo')
    }
    console.log(data.toString());

});