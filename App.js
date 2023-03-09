// // var fs = require("fs")

// // //var data = fs.readFileSync("info.txt")
// // fs.readFile("info.txt", function(err, data){
// //     if(err) return console.log(err);
// //     console.log(data)
// // })

// var http = require("http")
// var xx = "<!DOCTYPE html> <html> <head> <meta charset='utf-8'> <title>Page Title</title> </head> <h1> hello word yass </h1> <input type='text' placeholder='enter your name here'> <body> </body></html>"
// var info = {
//     'age' : 26,
//     'name': 'oussama',
//     'surname': 'sassour'
// }

// http.createServer(function(request, response){
//     //response.write("Welcome to the first http server Mr" + JSON.stringify(info))
//     response.write(xx)
//     response.end()
// }).listen(8088)

// console.log(" we listen to the http 8088 right now")
var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile("."+pathname, function (err, data) {
      if (err) {
         console.log(err);
         
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      } else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Write the content of the file to response body
         response.write(data);		
      }
      
      // Send the response body 
      response.end();
   });   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
