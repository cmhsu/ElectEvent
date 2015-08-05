var express = require('express'),
  app = express();

app.get('/', function (req, res, next) {
  res.sendStatus(200);
});

app.post('/', function (req, res, next) {
  res.sendStatus(200);
});

app.get('/users', function (req, res, next) {

});

app.post('/users', function (req, res, next) {
  res.sendStatus(200);
});

app.get('/posts', function (req, res, next) {

});

app.post('/posts', function (req, res, next) {
  res.sendStatus(200);
});

app.get('/groups', function (req, res, next) {

});

app.post('/groups', function (req, res, next) {
  res.sendStatus(200);
});

app.listen(8000);