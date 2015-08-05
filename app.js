var express = require('express'),
  app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res, next) {
  res.sendStatus(200);
});

app.post('/', function (req, res, next) {
  res.sendStatus(200);
});

app.get('/users', function (req, res, next) {
  res.send("It works");
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