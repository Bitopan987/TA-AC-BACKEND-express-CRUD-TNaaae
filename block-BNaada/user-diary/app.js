var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var usersRouter = require('./routes/users');

//  connected to database

mongoose.connect('mongodb://localhost/user-diary', (err) => {
  console.log(err ? 'Connected false' : 'Connected true');
});

var app = express();

// middlewares

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('listening to port 3k');
});
