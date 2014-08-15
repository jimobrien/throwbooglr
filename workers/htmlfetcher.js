var http = require('http-request');
var archive = require('../helpers/archive-helpers');
var Site = require('../web/db/db');
var azure = require('azure-storage');
var blobService = azure.createBlobService();


module.exports = function(pageUrl) {
  http.get({
    url: 'http://www.' + pageUrl,
    progress: function() {

    }
  }, function (err, res) {
    if (err) {
      return;
    } else {
      var hex = parseInt(Math.random() * 16777216, 16).toString();
      blobService.createBlockBlobFromText('files', hex, res.buffer.toString(), function(error, result, response){
        if(!error){
          var date = new Date();
          new Site({
            site: pageUrl,
            date: date,
            filepath: hex
          });
        }
      });
    }
  });
};
