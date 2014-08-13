var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('./http-helpers');
// require more modules/folders here!


exports.handleRequest = function (req, res) {

  // Parse the type of request based on Client (HTTP), or List Interaction (Archive)
  // and then route appropriately

  // if method is post, goto archives
  // if method is get, goto public -> index
  
  res.end(archive.paths.list);
};
