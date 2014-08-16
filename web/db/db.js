var mongoose = require('mongoose');
mongoose.connect(process.env.DB);

var Schema = mongoose.Schema;

var Site = new Schema({
  site: String,
  date: Date,
  filepath: String
});

module.exports = mongoose.model('Site', Site);