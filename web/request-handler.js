var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('./http-helpers');

exports.handleRequest = function (req, res) {
  var method = req.method;

  if(method === 'GET') {
    res.writeHead(200, http.headers);
    http.serveAssets(res, archive.paths.siteAssets + '/index.html', "working");
  } else if (method === 'POST') {
    res.writeHead(200, http.headers);
    var body;
    req.on('data', function(chunk) {
      body = chunk.toString().split('=')[1];
      body = body.replace(/.*?:\/\//g, ''); //woohoo regex!

      archive.isURLArchived(body, function (found) {
        if (!found) {
          archive.addUrlToList('\n' + body);
          body = archive.paths.siteAssets + '/loading.html';
          http.serveAssets(res, body, "working");
        } else {
          body = archive.paths.archivedSites + '/' + body;
          http.serveAssets(res, body, "working");
        }
      });
    });
  } else if (method === 'OPTIONS') {
    res.writeHead(201, http.headers);
    res.end();
  }
};
