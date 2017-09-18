var http = require('http');
var fs = require('fs');


http.createServer((req,res)=> {
   //utf8 yani faghat text hara o bekhon
    fs.readFile('./file.txt','utf8',function(err,data){
    if(err) throw err;
    var myArrey = data.split(""); 
    //element /item är each ord in arrey 
  var item = myArrey[Math.floor(Math.random()*myArrey.length)];
   console.log(item);
    
      res.write(item);
       
      res.end();    
  }); 
 
}).listen(3000);
console.log("Server active at 3000");