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
    var results = {};

    Site.find()
      .where('site').equals(url)
      .exec(function(err, sites) {
        if (sites.length > 0) {  // Check that its not an empty array
          sites.forEach(function(site) { //parse each site for clear results
            blobService.getBlobToText('files', site.filepath, function(error, result, response){
              if(!error){  //switch to !error
                var text = result.toString();
                console.log(result); // WHAT IS IT GIVING ME?
              } else {
                fetch(url);
              }
            });
          });
          res.json(results);
        }
        // if (err) {
          // fetch(url);
        // } else {
          // res.json({date: '<html><body><h1>HELLO WORLD</h1></body></html>'});
        // }
      });
    // module.exports.queryDB(url);
  },
      
}
