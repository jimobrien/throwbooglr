var http = require('http-request');
var archive = require('../helpers/archive-helpers');
var db = require('../web/db/db');
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.

//invoke saltwater-get

module.exports = function(pageUrl) {
  http.get({
    url: 'http://www.' + pageUrl,
  }, '../archives/sites/'+pageUrl, function (err, res) {
    if (!err) {
      var date = new Date();
      new Site({
        site: pageUrl
        date: date,
        filepath: //FIX ME
      });
    }
  });
};
