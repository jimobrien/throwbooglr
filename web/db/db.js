var mongoose = require('mongoose');
mongoose.connect('mongodb://throwback:7777@ds033679.mongolab.com:33679/throwback');
Schema = mongoose.Schema;


var Site = new Schema({
  name: String,
  history: [SiteHistory]
});

var SiteHistory = new Schema({
  date: Date,
  filepath: String
});
