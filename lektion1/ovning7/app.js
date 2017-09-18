const https = require('https');


 var data= '';
 https.get('https://yhjust16.herokuapp.com/lorem',(res)=> {
     //chunk means a part of information in response because it might be lots of data so we say take bit by bit 
   res.on('data',(chunk)=>{
     data += chunk; 

     res.on('end',()=>{
         console.log(data);
     }); 
     
   }); 
    
 })
 