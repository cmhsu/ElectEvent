var express     = require('express');
var router = express.Router();
var Event = require('./../db/Event');
var User = require('./../db/User');
var Group = require('./../db/Group');

// Return all events
router.get('/', function(req, res) {
  Event.find({}).populate('group').populate('creator').exec(function(err, events){
    res.json(events);
  });
    
});

// Expect to receive an object like:
// {
//   "title": "Event Title",
//   "group_id": "## group_id from group that the post was submitted from (String) ##",
//   "description": "A great thing to do",
//   "user_id": "## user_id from current session (String) ##"
// }
router.post('/', function(req, res) {

  var data = req.body;

  var addEvent = Event.create({
    title: data.title,
    creator: data.user_id,
    group: data.group_id,
    description: data.description,
    votes: 0
  },
  function(err, newEvent){
    res.send(newEvent);
  });

});

module.exports = router;
