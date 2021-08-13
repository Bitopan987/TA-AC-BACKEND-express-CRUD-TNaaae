var express = require('express');
var app = express();
var path = require('path');
var usersRouter = require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
  console.log('Listening to port 3k');
});
