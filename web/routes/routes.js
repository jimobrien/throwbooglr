var mongoose = require('mongoose');
var fetch = require('../../workers/htmlfetcher');
var Site = require('../db/db');
var azure = require('azure-storage');
var blobService = azure.createBlobService();

module.exports = {
  index: function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  },
  handler: function(req, res) {
    console.log('someone tickled me...');
    var url = req.query.name;

    search(url, res);
  },      
}

var collectBlob = function(item, object) {
  blobService.getBlobToText('files', item.filepath, function(error, result, response){
    if(!error){  //switch to !error
      var text = result.toString();
      object[item.date] = text;
    }
  });
};

var search = function(url, response) {
  var results = [];
  Site.find()
    .where('site').equals(url)
    .exec(function(err, sites) {        
      var siteLength = sites.length;
      if (siteLength > 0) {
        sites.forEach(function(site) {
          collectBlob(site, results)
        });
      }
    })
    .addBack(function(err, results) {
      response.json(results);
    });
}