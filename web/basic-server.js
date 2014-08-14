var http = require("http");
var handler = require("./request-handler");

var port = process.env.PORT || 8080;
var ip = process.env.URL || "localhost";
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
