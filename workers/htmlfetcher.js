var http = require('http-request');
var archive = require('../helpers/archive-helpers');
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.

//invoke saltwater-get

module.exports = function(pageUrl) {
  http.get({
    url: 'http://' + pageUrl,
  }, '../archives/sites/'+pageUrl, function (err, res) {
    if (err) {
      console.error(err);
      return;
    }
  });
};
