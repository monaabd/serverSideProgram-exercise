/*Following is a very basic Express app which starts a server and listens on port 8081 for connection. This app responds with Hello World! for requests to the homepage. For every other path, it will respond with a 404 Not Found.*/

var express = require('express');
var app = express();


app.use(express.static(__dirname+'/public'));

//to use for pug Marhale 1
app.set('view engine','pug');
app.set('views','./views');
 
//Marhale 3 baraye render kardan file view.pug
app.get('/',function(req,res){
   res.render('index'); 
    
});
// age layout o nanevisi paino va koli safe ra run koni va age dar index chizi nakhai avaz koni block paino bardar dar index.pug va run koni kole chiza ke dar layout vojod dare neshon mide
app.get('/layout',function(req,res){
   res.render('layout'); 
    
});
//app.use(express.static(__dirname //+'/public'));




app.listen(3000,()=> {
     console.log("Nu lyssnar vi på 3000.");

});