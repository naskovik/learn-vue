const validator = require('validator');
const path = require('path');
const fs = require('fs');
// const mongoose = require('mongoose');
const Book = require('../models/book');
const IMAGE_FORMAT = ['jpg', 'jpeg', 'png', 'gif'];

exports.listBooks = function (req, res) {
  Book.find({}).exec((err, books) => {
    if (err) res.status(500).send(err);
    else if (!books) return res.status(404).send({ message: 'No books found' });
    else return res.send({ books });
  });
}

exports.createBook = function(req, res) {
  // Data from request
  const params = req.body;
  let validAuthor;
  let validTitle;
  // a book must have a title and author
  try {
    validTitle = !validator.isEmpty(params.title);
    validAuthor = !validator.isEmpty(params.author);
  } catch (err) {
    return res.status(400).send({ message: 'Invalid paramters for new book' });
  }

  const valid = validTitle && validAuthor;

  if (valid) {
    const newBook = new Book();
    newBook.title = params.title;
    newBook.author = params.author;
    newBook.date = params.date;
    newBook.image = params.image;
    // Destructure this?

    newBook.save((err, newBook) => {
      if (err) return res.status(500).send(err);
      else return res.json(newBook);
    });
  }
}

exports.readBook = function (req, res) {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) return res.status(500).send(err);
    else return res.json(book);
  });
}

exports.updateBook = function (req, res) {
  const params = req.body;
  const bookId = req.params.bookId;
  // validate new parameters
  let validAuthor;
  let validTitle;
  // a book must have a title and author
  try {
    validTitle = !validator.isEmpty(params.title);
    validAuthor = !validator.isEmpty(params.author);
  } catch (err) {
    res.status(400).send(err);
  }

  const valid = validTitle && validAuthor;

  if (valid) {
    Book.findOneAndUpdate({ _id: bookId }, params, { new: true }, (err, book) => {
      if (err) res.status(500).send(err);
      else if (!book) res.status(404).send({ message: 'Boook not found' });
      else res.status(200).json(book);
    });
  }
}

exports.deleteBook = function(req, res) {
  const bookId = req.params.bookId;
  Book.deleteOne({ _id: bookId }, (err, book) => {
    if (err) return res.status(500).send(err);
    else return res.status(200).send({ message: 'Book deleted' });
  });
}

exports.uploadImage = function(req, res) {
  let fileName = 'Image not loaded';

  if (!req.files) { return res.send({ message: fileName }); }

  // Get separated file name and extension
  const filePath = req.files.file0.path;
  const fileSplit = filePath.split('/');

  fileName = fileSplit[2];
  const fileExtention = fileName.split('.')[1];

  // If the file is not a valid image format, delete it

  if (!(IMAGE_FORMAT.includes(fileExtention))) {
    fs.unlink(filePath, (err) => { if (err) return res.status(500).send(err) });
    return res.status(400).send({ message: 'Invalid file format' });
  } else {
    // update book with the received image
    const bookId = req.params.bookId;

    Book.findOneAndUpdate({ _id: bookId }, { image: fileName }, { new: true }, (err, bookUpdated) => {
      if (err) return res.status(500).send(err);
      else if (!bookUpdated) return res.status(500).send({ message: 'An error occurred while updating information' });
      else {
        return res.status(200).send({
          bookUpdated,
          file: req.files,
          split: fileSplit,
          extention: fileExtention
        });
      }
    });
  }
}

exports.getImage = function(req, res) {
  const image = req.params.image;
  const imgPath = `./upload/books/${image}`;

  fs.stat(imgPath, (err, stat) => {
    if (err) return res.status(404).send({ message: 'Image not found' });
    else return res.sendFile(path.resolve(imgPath));
  });
}

exports.searchBook = function(req, res) {
  const searchString = req.params.search;

  Book.find({
    $or: [
      { title: { $regex: searchString, $options: 'i' } },
      { content: { $regex: searchString, $options: 'i' } }
    ]
  })
    .sort([['date', 'descending']])
    .exec((err, books) => {
      if (err) return res.status(500).send({ error: err });
      else if (!books) return res.status(404).send({ message: 'No books found' });
      else return res.status(200).send({ message: 'success', books: books });
    });
}
