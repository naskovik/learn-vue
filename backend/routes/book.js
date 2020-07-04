const express = require('express');
const multipart = require('connect-multiparty');
const router = express.Router();
const bookCtrl = require('../controllers/book');

const mwUpload = multipart({ uploadDir: './upload/books' });

router.get('/books', bookCtrl.listBooks);
router.post('/books', bookCtrl.createBook);

router.get('/books/:bookId', bookCtrl.readBook);
router.post('/books/:bookId', bookCtrl.updateBook);
router.delete('/books/:bookId', bookCtrl.deleteBook);

router.post('/upload-image/:bookId', mwUpload, bookCtrl.uploadImage);
router.get('/get-image/:image', bookCtrl.getImage);

router.get('/search/:search', bookCtrl.searchBook);

module.exports = router;
