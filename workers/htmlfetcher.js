var http = require('http-request');
var archive = require('../helpers/archive-helpers');
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.

//invoke saltwater-get

module.exports = function(pageUrl, callback) {
  http.get({
    url: 'http://' + pageUrl,
    progress: function (current, total) {
      console.log('downloaded %d bytes from %d', current, total);
    }
  }, '../archives/sites/'+pageUrl, function (err, res) {
    if (err) {
      console.error(err);
      return;
    }
    var data = archive.readListOfUrls();
    if (!archive.isUrlInList(data, pageUrl)) {
      archive.addUrlToList('\n' + pageUrl);
    }
    callback(); // callback to http helper to serve the newly downloaded file
  });
};
