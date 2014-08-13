var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('./http-helpers');
// require more modules/folders here!


exports.handleRequest = function (req, res) {

  // Parse the type of request based on Client (HTTP), or List Interaction (Archive)
  // and then route appropriately

  var method = req.method;
  // if method is get, goto public -> index
  // if method is post, goto archives

  if(method === 'GET') {
    res.writeHead(200, http.headers);
    http.serveAssets(res, archive.paths.siteAssets + '/index.html', "working");
  } else if (method === 'POST') {
    // call http and server loader
    var body;
    req.on('data', function(chunk) {
      body = chunk.toString().split('=')[1];
      body = body.replace(/.*?:\/\//g, ''); //woohoo regex!
      // body = archive.paths.archivedSites + '/' + body;
      console.log(archive.isURLArchived(body));
      body = body || archive.paths.siteAssets + '/loading.html';
      res.writeHead(200, http.headers);
      http.serveAssets(res, body, "working");
    });
    // call archive and pull the file
  } else if (method === 'OPTIONS') {
    res.writeHead(201, http.headers);
    res.end("Proceed");
  }


  // res.end(archive.paths.list);
};

