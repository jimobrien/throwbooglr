var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./routes/routes');

mongoose.connect('mongodb://throwback:7777@ds033679.mongolab.com:33679/throwback');

var port = process.env.PORT || 8080;
var ip = process.env.URL || "localhost";

app.use(express.static(__dirname + '/public'));
app.get('/', routes.index); // serves static index
app.get('/sites', routes.handler) // all search queries are handled as get

app.listen(port, ip);
console.log("Listening on http://" + ip + ":" + port);
