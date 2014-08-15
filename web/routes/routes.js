var mongoose = require('mongoose');
var fetch = require('../../workers/htmlfetcher');
var Site = require('../db/db');
// var fs = require('fs');
var q = require('q');
var azure = require('azure-storage');
var blobService = azure.createBlobService();

module.exports = {
  index: function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  },
  handler: function(req, res) {
    console.log('someone tickled me...');
    var url = req.query.name;
    var results = {};

    Site.find()
      .where('site').equals(url)
      .exec(function(err, sites) {
        
        var promises = [];

        for (var i = sites.length - 1; i >= 0; i--) {
          promises.push( collectBlob(sites[i], results) )
        };

        // var siteLength = sites.length;
        // var counter = sites.length;
        // if (siteLength > 0) {
        //     sites.forEach(function(site) {
        //       collectBlob(sites, results);
        //   }
        // }
        $.when(promises).then(function () {
          console.log(promises);
          // res.json(results);
        })
      });
      // .done(function() {
      //   res.json(results);
      // });
      

  },      
}

var collectBlob = function(item, object) {
  blobService.getBlobToText('files', item.filepath, function(error, result, response){
    if(!error){  //switch to !error
      var text = result.toString();
      object[item.date] = text
    }
  });
}