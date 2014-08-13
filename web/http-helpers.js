var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)

  // render the appropriate file based on the request and availability
  // render index on /, loader if asset not found in archive (callback to load asset on finish)
  // and asset if found
  fs.readFile(asset, function(err, contents) {
    res.end(contents.toString());
  });
};



// As you progress, keep thinking about what helper functions you can put here!
