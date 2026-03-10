// console.log("Start....")
// setTimeout(() => {
//     console.log("Task completed");
// },3000);
// console.log("End....")



// to import file system module(built in fs module)
// const fs = require("fs");
// fs.writeFileSync("test.txt","Hello vikash. You are genious.")
// console.log("File created and write successfull.")


// Creating a custome module and importing it into another.

// const math = require('./math');
// console.log("Addition of 10 and 5 is : ",math.add(10,5))
// console.log("Sustraction of 10 and 5 is : ",math.sub(10,5))
// console.log("Multiplication of 10 and 5 is : ",math.mul(10,5))



const express = require('express');
const cors = require('cors');

const app = express();

const tasks = [
    {id:1,task: "Study react introduction"},
    {id:2,task: "Study react module1"},
    {id:3,task: "Study react module2"},
    {id:4,task: "Study react module3"},
]

app.get('/tasks',(req,res)=>{
    res.json(tasks);
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});