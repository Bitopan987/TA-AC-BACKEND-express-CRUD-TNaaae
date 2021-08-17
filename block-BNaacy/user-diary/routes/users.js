var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', (req, res) => {
  res.render('users.ejs');
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

module.exports = router;
