var mongoose = require('mongoose');
var fetch = require('../../workers/htmlfetcher');
var db = require('../db/db');

module.exports = {
  index: function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  },
  handler: function(req, res) {
    //check our list of sites (DB Query)
    var url = req.url.split('/sites/')[1];
    db.find()
      .where('site').equals(url)
      .exec(function(err, sites) {
        var results = {};
        sites.forEach(function(site) {
          results[date] = filepath;
        });
        if (err) {
          fetch(url);
        } else {
          res.json(results);
        }
      });
  },
}
