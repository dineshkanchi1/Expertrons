const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("My first API response");
        res.end();
    }
});

console.log("Listening for client");    
server.listen(3000);
