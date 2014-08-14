var mongoose = require('mongoose');
var fetch = require('../../workers/htmlfetcher');

module.exports = {
  index: function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  },
  handler: function(req, res) {
    //check our list of sites (DB Query)
  },
}
