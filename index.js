
// ASSIGNMENT 2 

// 1 . Node.js program to demonstrate callback function

// Function that performs an operation
// function processData(name, callback) {
//     console.log("Processing data for: " + name);

//     setTimeout(function () {
//         console.log("Data processed successfully.");

//         callback();
//     }, 2000);
// }

// function displayMessage() {
//     console.log("Callback function executed after processing.");
// }

// // Calling function with callback
// processData("Vikash", displayMessage);



// 2.  Write a program to demonstrate synchronous programming in Node JS or to import file system module(built in fs module)
// const fs = require("fs");
// console.log("Start of Program");
// fs.writeFileSync("test.txt","Hello vikash. You are genious.")
// console.log("File created and write successfull.");
// const data = fs.readFileSync("test.txt", "utf8")
// console.log("File Content:");
// console.log(data);
// console.log("End of Program");



// 3. Node.js program to demonstrate asynchronous programming

// const fs = require("fs");
// console.log("Start of Program");
// fs.readFile("test.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("Error reading file");
//         return;
//     }
//     console.log("File Content:");
//     console.log(data);
// });
// console.log("End of Program");

          // OR

// console.log("Start....")
// setTimeout(() => {
//     console.log("Task completed");
// },3000);
// console.log("End....")



// 4. Node.js program to demonstrate HTTP core module

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.write("Hello! Welcome to Node.js HTTP Server.");
//     res.end();
// });

// server.listen(3000, () => {
//     console.log("Server is running at http://localhost:3000/");
// });




// 5.  Creating a custome module and importing it into another.

// const math = require('./math');
// console.log("Addition of 10 and 5 is : ",math.add(10,5))
// console.log("Sustraction of 10 and 5 is : ",math.sub(10,5))
// console.log("Multiplication of 10 and 5 is : ",math.mul(10,5))



// 7. Node.js program to create an HTTP server and display message

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.write("Hello! My name is Vikash chaurasiya and i am creating a simple HTTP server in Node.js.");
//     res.end();
// });
// server.listen(3000, () => {
//     console.log("Server is running at http://localhost:3000/");
// });



// 8. Write a program to create separate index.html page and display the same using node.js 
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     fs.readFile("index.html", (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//     });
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });


 

// 9.  Node.js program to handle 3 different HTTP requests

// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.url === "/") {
//         res.write("Welcome to the Home Page");
//         res.end();
//     }
//     else if (req.url === "/about") {
//         res.write("Welcome to the About Page");
//         res.end();
//     }
//     else if (req.url === "/contact") {
//         res.write("Welcome to the Contact Page");
//         res.end();
//     }
//     else {
//         res.write("404 Page Not Found");
//         res.end();
//     }

// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });



// 10.Create a website that displays at least 3 html pages. Also create a navigation menu and perform a routing process.

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//     if (req.url === "/") {
//         fs.readFile("index.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     }

//     else if (req.url === "/about") {
//         fs.readFile("about.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     }

//     else if (req.url === "/contact") {
//         fs.readFile("contact.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     }

//     else {
//         res.writeHead(404, {"Content-Type": "text/plain"});
//         res.end("Page Not Found");
//     }

// });

// server.listen(3000, () => {
//     console.log("Server is running at http://localhost:3000/");
// });



// 11. Write a program to create a form and display the submitted information on the same page. 

// const http = require("http");
// const fs = require("fs");
// const querystring = require("querystring");

// const server = http.createServer((req, res) => {

//     if (req.method === "GET") {
//         fs.readFile("form.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     }

//     else if (req.method === "POST") {
//         let body = "";

//         req.on("data", chunk => {
//             body += chunk.toString();
//         });

//         req.on("end", () => {
//             const formData = querystring.parse(body);

//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write("<h2>Submitted Information</h2>");
//             res.write("Name: " + formData.name + "<br>");
//             res.write("Email: " + formData.email);
//             res.end();
//         });
//     }

// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });



// 12. Write a program to create a registration form and display the submitted information on the next page. 

// const http = require("http");
// const fs = require("fs");
// const querystring = require("querystring");

// let submittedData = {};

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/") {
//         fs.readFile("register.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     }

//     else if (req.method === "POST" && req.url === "/submit") {
//         let body = "";

//         req.on("data", chunk => {
//             body += chunk.toString();
//         });

//         req.on("end", () => {
//             submittedData = querystring.parse(body);

//             res.writeHead(302, { Location: "/result" });
//             res.end();
//         });
//     }

//     else if (req.url === "/result") {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.write("<h2>Registration Details</h2>");
//         res.write("Name: " + submittedData.name + "<br>");
//         res.write("Email: " + submittedData.email + "<br>");
//         res.write("Course: " + submittedData.course);
//         res.end();
//     }

// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });



// 13.Write a program to demonstrate a third party module (express). 

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Welcome to the Home Page");
// });

// app.get("/about", (req, res) => {
//     res.send("This is the About Page");
// });

// app.get("/contact", (req, res) => {
//     res.send("This is the Contact Page");
// });

// app.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });





// 14.Create a website that displays at least 3 html pages. Also create a navigation menu and perform a routing process using express. 

// const express = require("express");
// const path = require("path");

// const app = express();

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/about", (req, res) => {
//     res.sendFile(path.join(__dirname, "about.html"));
// });

// app.get("/contact", (req, res) => {
//     res.sendFile(path.join(__dirname, "contact.html"));
// });

// app.listen(3000, () => {
//     console.log("Vikash! Server is running at http://localhost:3000/");
// });



// 15.Write a program to create a registration form and display the submitted information on the page using express.. 
const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const course = req.body.course;

    res.send(`
        <h2>Registration Details</h2>
        Name: ${name} <br>
        Email: ${email} <br>
        Course: ${course}
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
















// const express = require('express');
// const cors = require('cors');

// const app = express();

// const tasks = [
//     {id:1,task: "Study react introduction"},
//     {id:2,task: "Study react module1"},
//     {id:3,task: "Study react module2"},
//     {id:4,task: "Study react module3"},
// ]

// app.get('/tasks',(req,res)=>{
//     res.json(tasks);
// });

// app.listen(5000,()=>{
//     console.log("Server running on port 5000");
// });