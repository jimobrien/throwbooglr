var http = require('http-request');
var archive = require('../helpers/archive-helpers');
var Site = require('../web/db/db');
var azure = require('azure-storage');
var blobService = azure.createBlobService();


module.exports = function(pageUrl) {
  http.get({
    url: 'http://www.' + pageUrl,
  }, function (err, res) {
    if (err) {
      return;
    } else {
      console.log(res.toString(), "from fetcher");
      // blobService.createBlockBlobFromText('files', 'fileblob', res.toString(), function(error, result, response){
      //   if(!error){
      //     console.log(result);  //WHAT DOES IT RETURN?
      //     var date = new Date();
      //     new Site({
      //       site: pageUrl,
      //       date: date,
      //       filepath: "helloworld.txt" //FIX ME
      //     });
      //   }
      // });
    }
  });
};
