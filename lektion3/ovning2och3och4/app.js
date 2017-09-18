var express= require('express');

var app= express();

//ovning 3 jason parameter ta emot parametrar i requesten (exempelvis userID
var users = require('./users.json');

 var findUser = function(userName,callback){
 // Perform database query that calls callback when it's done
  //if we do not find user which has properties user name then return callback
  if (!users[userName])
    throw error;
  
     //else
     //user[userName]> object[Object].property 
     //return callback(null,users[userName].userID) this gives u just user id;
   return callback(null,users[userName]);
 
 };

//för att vissa css and bilds we använda app.use and we just make a public mag and put bild and css inside that 
app.use(express.static(__dirname + '/public'));

//for att visa html
app.get('/',(req,res)=> {
    
   res.sendFile(__dirname +'/indext.html'); 
});

//få värden genom params ovning3
app.get('/user/:userName',function(req,res){
   var userName = req.params.userName;
    
        //callback ke bala dashtim hamin function paine
     findUser(userName,function(error,user
     ){
         if(error)
             throw error;
         return res.json(user);
     
     });
    });
  // ovning 4 in kar nemikone bad bebin  
app.get('/user',function(req,res){
 var userName = req.query.userName;
    
    findUser(userName,function(error,user
     ){
         if(error)
             throw error;
         return res.json(user);
     
     });
});    


app.listen(3000,()=> {
     console.log("Nu lyssnar vi på 3000.");

});