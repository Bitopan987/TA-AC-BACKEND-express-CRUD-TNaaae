var express = require('express');
const { connect } = require('http2');
var mongoose = require('mongoose');
const { dirname } = require('path');
var path = require('path');
var usersRouter = require('./routes/users');

// connect to database

mongoose.connect(
  'mongodb://localhost/user-diary',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? 'connected false' : 'connected true');
  }
);

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/users', usersRouter);

app.use((req, res, next) => {
  res.send('Page not Found');
});

app.listen(3000, () => {
  console.log('Listening to port 3k');
});
