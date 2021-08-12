var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var studentRouter = require('./routes/students');

mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/students', studentRouter);

app.use((req, res) => {
  req.send('Page Not Found');
});

app.listen(4000, () => {
  console.log('listening to port 4k');
});
