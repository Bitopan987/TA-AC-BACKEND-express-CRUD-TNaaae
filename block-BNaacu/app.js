var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/students', (req, res) => {
  res.send('post students');
});

app.get('/students', (req, res) => {
  res.render('students', { list: ['ankit', 'suraj', 'prashant', 'ravi'] });
});

app.get('/students/:id', (req, res) => {
  res.render('studentDetail', {
    student: { name: 'rahul', email: 'rahul@altcampus.io' },
  });
});

app.get('/students/new', (req, res) => {});

app.listen(4000, () => {
  console.log('listening to port 4k');
});
