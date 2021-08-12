var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'Connected to database');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(4000, () => {
  console.log('listening to port 4k');
});
