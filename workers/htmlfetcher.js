var http = require('http-request');
var archive = require('../helpers/archive-helpers');
var db = require('../web/db/db');

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
