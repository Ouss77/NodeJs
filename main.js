var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end("hello word  \n")

}).listen(8081)
console.log("server running into htttp://127.0.0.1:8081/");
//console.log("hello word")
const st = require("./students")
//console.log(st.StudentInfo.Getname("Oussama"))
//console.log(st.StudentInfo.GetAge())
//console.log(st.age())
//console.log(st.name("hamid"))
const wei = require("./triangle")
const hei = require("./square")
