var http = require("http");
var fs = require("fs");
var querystring = require("querystring");

http.createServer(function (req, res) {
    console.log("connect");

    if (req.url == "/demo1") {
        console.log("1");
        fs.readFile("./use/index.html", function (err, data) {
            res.writeHead(200, { "Content-type": "text/html;charset=UTF8" });

            res.end(data);
        });
    }
    else if (req.url == "/demo2") {
        console.log("2");
        console.log(req.url);

        res.writeHead(200, { "Content-type": "text/html;charset=UTF8" });
        res.write("<h1>demo2<h1>");

        res.end();
    }
    else {
        console.log("3");
        console.log(req.url);
    }

}).listen(5000, "localhost");

console.log("end here");