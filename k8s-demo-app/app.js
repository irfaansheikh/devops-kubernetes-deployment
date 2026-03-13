const http = require("http");

const server = http.createServer((req,res)=>{
res.end("Hello from Kubernetes DevOps Project, Hello from Kubernetes v2");
});

server.listen(3000);