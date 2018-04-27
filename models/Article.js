var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
});

module.exports = mongoose.model('Article', articleSchema);