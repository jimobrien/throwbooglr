var mongoose = require('mongoose');
var fetch = require('../../workers/htmlfetcher');
var db = require('../db/db');
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
    console.log(req.query);
    res.json({date: '<html><body><h1>HELLO WORLD</h1></body></html>'});
    // module.exports.queryDB(url);
  },
  queryDB: function(url) {
    db.find()
      .where('site').equals(url)
      .exec(function(err, sites) {
        var results = {};
        sites.forEach(function(site) {
          console.log(site);   //parse each site for clear results
          blobSvc.getBlobToText('files', site.filepath, function(error, result, response){
            if(!error){
              // var text = response.toString();
              console.log(result); // WHAT IS IT GIVING ME?
              // results[date] = text;
            }
          });
        });
        if (err) {
          fetch(url);
        } else {
          res.json({date: '<html><body><h1>HELLO WORLD</h1></body></html>'});
        }
      });
  }
}
