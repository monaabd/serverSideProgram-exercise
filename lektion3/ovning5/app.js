/*Following is a very basic Express app which starts a server and listens on port 8081 for connection. This app responds with Hello World! for requests to the homepage. For every other path, it will respond with a 404 Not Found.*/

var express = require('express');
var app = express();


app.use(express.static(__dirname+'/public'));

//to use for pug Marhale 1
app.set('view engine','pug');
app.set('views','./views');
 
//Marhale 3 baraye render kardan file view.pug
app.get('/first_template',function(req,res){
   res.render('first_view'); 
});
//app.use(express.static(__dirname //+'/public'));




app.listen(3000,()=> {
     console.log("Nu lyssnar vi på 3000.");

});