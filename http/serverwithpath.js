var http = require("http")

var url = require("url")

var homepage = `<!DOCTYPE html>
<html lang = "en">
<head>
<meta charset="="UTF=-8">
<title>home</title>
</head>
<body>
<h1>
<a href="pnrstatus">pnr</a> | <a href="seatavailibility">seat</a> | <a href="schedule">schedule</a>
</h1>
</body>
</html>`
var server =http.createServer((request,response)=>{
    var urlinfo = url.parse(request.url);
    console.log(urlinfo);
    if(urlinfo.pathname != '/favicon.ico')
    {
        console.log(urlinfo.path);
        if(urlinfo.path=='/pnrstatus')
        {
            response.write("<h1>pnrstatus from the server</h1>")
        }
        else if (urlinfo.path=='/seatavailibility')
        {
            response.write("<h1>seatavailibility from the server</h1>")
        }
        else if(urlinfo.path = "/schedule")
        {
            response.write("<h1>schedule from the server</h1>")
        }
        else
        {
            response.write(homepage);
        }
    }

    response.end();
})

server.listen(8080,()=>{console.log("server is running on port 8080")})