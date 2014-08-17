var http = require('http-request');
var Site = require('../web/db/db');
var azure = require('azure-storage');
var blobService = azure.createBlobService();
var helpers = require('../web/helpers/helpers.js');


module.exports = function(pageUrl, callback) {
  http.get({
    url: 'http://www.' + pageUrl
  }, function (err, res) {
    if (err) {
      return;
    } else {
      var hex = parseInt(Math.random() * 16777216, 16).toString();

      blobService.createBlockBlobFromText('files', hex, res.buffer.toString(), function(error, result, response){
        if(!error){
          console.log('creating blobs and entries with: ', pageUrl, hex);
          helpers.createEntry(pageUrl, hex);
          blobService.setBlobProperties('files', hex, {'contentType': 'text/html'}, callback);
        }
      });
    }
  });
};