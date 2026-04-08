const http = require('http');
http.createServer((req,res)=>{
  res.end("Hello DevOps version2");
}).listen(3000);
