var http =require("http")

var server = http.createServer((request,response)=>
{
response.end("<h1>this is server</h1>");
})

server.listen(8080,()=>{console.log("server is running or port 8080")})

//  http://localhost:8080/