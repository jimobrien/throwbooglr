var http = require('http-request');
var Site = require('../web/db/db');
var azure = require('azure-storage');
var blobService = azure.createBlobService();


module.exports = function(pageUrl) {
  http.get({
    url: 'http://www.' + pageUrl
  }, function (err, res) {
    if (err) {
      return;
    } else {
      var hex = parseInt(Math.random() * 16777216, 16).toString();
      blobService.createBlockBlobFromText('files', hex, res.buffer.toString(), function(error, result, response){
        if(!error){
          createEntry(pageUrl, hex);
        }
      });
    }
  });
};

var createEntry = function(url, hex) {
  var date = new Date();
  date = date.toLocaleDateString();
  new Site({
    site: url,
    date: date,
    filepath: hex
  }).save(function(err){return;});
}