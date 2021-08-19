var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', (req, res) => {
  res.render('users');
});

router.get('/new', (req, res) => {
  res.render('addUser');
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if (err) return next(err);
    res.redirect('./users');
  });
});

// router.get('/', (req, res) => {
//   Book.find({}, (err, books) => {
//     if (err) return next(err);
//     res.render('books', { books:books });
//   });
// });

// router.get('/new', (req, res) => {
// res.render('addBook');
// });

//
//   // capture data

// router.get('/:id', (req, res, next) => {
//   var id = req.params.id;
//   Book.findById(id, (err, book) => {
//     if (err) return next(err);
//     res.render('bookDetails', { book: book });
//   });
// });

// router.get('/:id/edit', (req, res, next) => {
//   var id = req.params.id;
//   Book.findById(id, (err, book) => {
//     if (err) return next(err);
//     res.render('editBookForm', { book: book });
//   });
// });

// router.post('/:id', (req, res) => {
//   var id = req.params.id;
//   Book.findByIdAndUpdate(id, req.body, (err, updatedBook) => {
//     if (err) return next(err);
//     res.redirect('/books/' + id);
//   });
// });

// router.get('/:id/delete', (req, res, next) => {
//   var id = req.params.id;
//   Book.findByIdAndDelete(id, (err, book) => {
//     if (err) return next(err);
//     res.redirect('/books');
//   });
// });

module.exports = router;
