const http = require("http");

const server = http.createServer((req,res)=>{
res.end("Hello from Kubernetes v2");
});

server.listen(3000);