var mongoose = require('mongoose');
var fetch = require('../../workers/htmlfetcher');
var Site = require('../db/db');
var fs = require('fs');
var azure = require('azure-storage');
var blobService = azure.createBlobService();

module.exports = {
  index: function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  },
  handler: function(req, res) {
    console.log('someone tickled me...');
    //check our list of sites (DB Query)
    var url = req.query.name;
    Site.find()
      .where('site').equals(url)
      .exec(function(err, sites) {
        if (sites.length > 0) {
          var results = collectBlobs(sites);
          res.json(results);
        } else {
          fetch(url);  
        }
      });
  },      
}

var collectBlobs = function(array) {
  var results = {};
  array.forEach(function(item) { //parse each site, pull Blobs and inject results
    blobService.getBlobToText('files', item.filepath, function(error, result, response){
      if(!error){  //switch to !error
        var text = result.toString();
        console.log(result); // WHAT IS IT GIVING ME?
        results[item.date] = text;
      }
    });
  });
  return results;
}