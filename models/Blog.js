const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  name: { type: String, required: true },
  title: { type: String, required: true },
  comSentence: { type: String },
  comImage: { type: String },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = Blog = mongoose.model('blog', BlogSchema);
