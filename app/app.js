const http = require("http");

const server = http.createServer((req,res)=>{
res.end("Hello from Kubernetes v1");
});

server.listen(3000);