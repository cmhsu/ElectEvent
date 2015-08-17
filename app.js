var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.sendStatus(200);
});

app.post('/', function (req, res, next) {
  res.sendStatus(200);
});

app.get('/api/users', function (req, res, next) {
  var sampleUsers = [
    {
      "_id": 1,
      "username": "SAMPLE_NAME",
      "groups": ["group_id1", "g1roupid2"]
    },
    {
      "_id": 2,
      "username": "SAMPLE_NAME_2",
      "groups": ["group_id1", "groupid2"]
    }
  ];
  res.json(sampleUsers);
});

app.post('/api/users', function (req, res, next) {
  res.sendStatus(200);
});

app.get('/api/events', function (req, res, next) {
  var sampleEvents = [
    {
      "_id": 1,
      "title": "An Event",
      "group": "group id",
      "description": "A great thing to do",
      "comments": ["comment_id1", "comment_id2"],
      "creator": "user_id",
      "votes": 0
    },
    {
      "_id": 2,
      "title": "Another Title",
      "group": "group id",
      "description": "A better thing to do",
      "comments": ["comment_id1", "comment_id2"],
      "creator": "user_id",
      "votes": 0
    }
  ];
  res.json(sampleEvents);
});

app.post('/api/events', function (req, res, next) {
  res.sendStatus(200);
});

app.get('/api/groups', function (req, res, next) {

  var sampleGroups = [
    {
      "_id": 1,
      "groupname": "Best Group",
      "events": ["event_id1", "event_id2"],
      "members": ["user_id1", "user_id2"]
    },
    {
      "_id": 2,
      "groupname": "Bestester Group",
      "events": ["event_id1", "event_id2"],
      "members": ["user_id1", "user_id2"]
    }

  ];

  res.json(sampleGroups);

});

app.post('/api/groups', function (req, res, next) {
  res.sendStatus(200);
});

app.get('/api/comments', function (req, res, next) {
  var sampleComments =    [
    {
      "_id": 1,
      "creator": "user_id",
      "content": "Some text",
      "event": "event_id"
    },
    {
      "_id": 2,
      "creator": "user_id",
      "content": "Moar text",
      "event": "event_id"
    }
  ];

  res.json(sampleComments);
});

app.listen(8000);
