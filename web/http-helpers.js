var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var $ = require('jquery');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  fs.readFile(asset, function(err, contents) {
    if (err) {
      res.writeHead(404, exports.headers);
    }
    res.end(contents);
  });
};
