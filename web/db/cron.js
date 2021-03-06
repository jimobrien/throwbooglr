var cronJob = require('cron').CronJob;
var db = require('./db');
var fetch = require('../../workers/htmlfetcher');
var helpers = require('../helpers/helpers');

var cronOut = function() {
    return new cronJob('00 00 03 * * 6', cron, function() {
      console.log('database updated');
    }, true);
};

var cron = function() { //change me
  var urls = {};
  db.find(function(err, sites) {
      var sl = sites.length;
      for (var i = 0; i < sl; i++) {
        urls[sites[i].site] = sites[i].site;
      }
    })
    .exec(function() {
      for(var url in urls) {
        fetch(url, function (err, response) {
          // TODO: Refactor - > repeated in routes
          var date = new Date();
          date = date.toLocaleDateString();
          var obj = {};
          obj[date] = 'https://throwbackdev.blob.core.windows.net/files/' + response.blob;
        });
      }
    });
};

module.exports = cronOut;