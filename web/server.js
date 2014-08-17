var express = require('express');
var routes = require('./routes/routes');
var app = express();
var mongoose = require('mongoose');
var cron = require('./db/cron');

var port = process.env.PORT || 3000;
var ip = process.env.URL || "10.4.11.249";

app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', routes.index); // index.html
app.get('/sites', routes.handler); // search queries
app.options('*', function() {
  res.writeHead(200);
});

app.listen(port, ip);
console.log("Listening on http://" + ip + ":" + port);

// cron();