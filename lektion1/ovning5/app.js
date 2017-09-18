var http = require('http');
var fs = require('fs');

http.createServer((req,res)=> {
  fs.readFile('./file.txt',(err,data)=>{
    res.write(data);
      res.end();
  
  });
}).listen(3000);
console.log("Server active at 3000");
              