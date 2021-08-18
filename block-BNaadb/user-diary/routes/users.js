var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    console.log(err, users);
    res.render('users', { users: users });
  });
});

router.get('/new', (req, res) => {
  res.render('userForm.ejs');
});

router.post('/', (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) return res.redirect('/users/new');
    res.redirect('/');
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('userDetails', { user });
  });
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editUserForm', { user: user });
  });
});

router.post('/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/users/' + id);
  });
});

router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

module.exports = router;
