const mongoose = require('mongoose');

const Book = new mongoose.Schema({
  title: {
    type: String,
    required: 'Title is required'
  },
  author: {
    type: String,
    required: 'An author is required'
  },
  date: {
    type: Date,
    default: Date.now
  },
  image: String
});

module.exports = mongoose.model('Book', Book);
