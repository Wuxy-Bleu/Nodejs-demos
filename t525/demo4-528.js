var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var querystring = require("querystring");

http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;
    var extname = path.extname(pathname);
    console.log(extname);

    fs.readFile("./use" + pathname, function (err, data) {
        if (err) {
            fs.readFile("./use/404.html", function (err, data) {
                res.writeHead(404, { "Content-type": "text/html;charset=UTF8" });
                res.end(data);
            });
            return;
        };

        var mime = getmime(extname);
        console.log(mime);
        res.writeHead(200, { "Content-type": mime + ";cahrset=UTF8" });

        res.end(data);
    });

}).listen(5000, "localhost");

function getmime(extname) {
    switch (extname) {
        case ".html":
            return "text.html";
            break;
        case ".jpg":
            return "image/jpg";
            break;
        case ".css":
            return "text/css";
            break;
        case ".js":
            return "application/x-javascript";
            break;
    }
}

