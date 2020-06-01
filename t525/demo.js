var http = require("http");
var url = require("url")

http.createServer(function (req, res) {

    if (req.url == "/favicon.ico") {
        return;
    }

    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url).query;

    console.log("server receive the request: " + url);
    res.writeHead(200, { "Content-type": "text/html;charset=UTF8" });
    res.write("<h1>hello world<h1>");

    console.log("pathname= " + path);
    console.log("query= " + query);
    res.end();

}).listen(65431, "192.168.0.131");

console.log("end here");