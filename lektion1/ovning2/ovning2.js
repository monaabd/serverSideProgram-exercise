var http = require('http');

var server = http.createServer((req, res) => {
    res.write("Hello. You used " + req.method + " to see this.");
    res.write("\nHow much do you know?");    
    res.end();  // Glöm denna och servern snurrar utan att skriva ut.
});
console.log ("Server now listening at port 3000");
server.listen(3000);