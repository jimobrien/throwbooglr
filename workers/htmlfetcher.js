var http = require('http-request');
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.

//invoke saltwater-get

exports.get = function(pageUrl) {
  http.get({
    url: pageUrl,
    progress: function (current, total) {
      console.log('downloaded %d bytes from %d', current, total);
    }
  }, '../archives/sites', function (err, res) {
    if (err) {
      console.error(err);
      return;
    }
  console.log(res.code, res.headers, res.file);
});