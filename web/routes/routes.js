var mongoose = require('mongoose');
var fetch = require('../../workers/htmlfetcher');
var db = require('../db/db');

module.exports = {
  index: function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  },
  handler: function(req, res) {
    //check our list of sites (DB Query)
    var url = req.url.split('/sites/')[0];
    db.find()
      .where('name').equals(url)
      .exec(function(err, sites) {
        if (err) {
          fetch(url);
        } else {
          res.json(sites);
        }
      });
  },
}
