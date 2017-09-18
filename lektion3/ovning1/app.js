var express= require('express');

var app= express();

app.get('/',(req,res)=> {
    
   res.sendFile(__dirname +'/indext.html'); 
});

app.listen(3000,()=> {
     console.log("Nu lyssnar vi på 3000.");

});