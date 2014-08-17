var Site = require('../db/db');

module.exports = {
  createEntry: function(url, hex) {
    var date = new Date();
    date = date.toLocaleDateString();
    new Site({
      site: url,
      date: date,
      filepath: hex
    }).save();
  },
};