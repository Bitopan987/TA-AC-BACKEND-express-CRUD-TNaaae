// requires

var express = require('express');
var mongoose = require('mongoose');
// var indexRouter = require('./routes/index');
// var booksRouter = require('./routes/books');
var path = require('path');

// connect to db

mongoose.connect(
  'mongodb://localhost/resource',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log('Connected', err ? false : true);
  }
);

// instantiating express.app
var app = express();

// middlewares
// set up view ingine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// capture form data

app.use(express.urlencoded({ extended: false }));

// set up static directory

app.use(express.static(__dirname + '/public'));

// routing middlewares

app.use('/', indexRouter);
app.use('/user', usersRouter);

// 404 errors

app.use((req, res, next) => {
  res.send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('listening to port 3k');
});
