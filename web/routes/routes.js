var mongoose = require('mongoose');
var fetch    = require('../../workers/htmlfetcher');
var Site     = require('../db/db');
var azure    = require('azure-storage');
var helpers = require('../helpers/helpers.js');

var blobService = azure.createBlobService();

module.exports = {
  index: function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  },
  handler: function(req, res) {
    var url = req.query.name;
    search(url, res);
  },      
};

var search = function(url, res) {
  var result = {};
  Site.find()
    .where('site').equals(url)
    .exec(function(err, sites) {
      if(sites.length > 0) {        
        sites.forEach(function(site) {
          result.site = url;
          result[site.date] = 'https://throwback.blob.core.windows.net/files/' + site.filepath;
        });
        res.json(result);
      } else {
        fetch(url, function (err, response) {
          // TODO: Refactor
          var date = new Date();
          date = date.toLocaleDateString();
          var obj = {};
          obj[date] = 'https://throwback.blob.core.windows.net/files/' + response.blob;

          helpers.createEntry(url, response.blob);

          res.json(obj);
        });
      }
    });
};

