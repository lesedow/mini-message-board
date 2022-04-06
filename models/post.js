const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: {type: String, required: true},
  body: {type: String, required: true},
  added: {type: Date}
});

postSchema.virtual('formatDate').get(function() {
  const hoursMinutes = `${this.added.getHours()}:${this.added.getMinutes()}`;
  return `${this.added.toLocaleDateString()} - ${hoursMinutes}`;
});

module.exports = mongoose.model('Post', postSchema);