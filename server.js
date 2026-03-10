const http = require("http")

const server = http.createServer((req,res) =>{
    res.write("Hello vikash, I am responsing through server.")
    res.end();
})

server.listen(5000,()=>{
    console.log("Server running on port 5000");
})