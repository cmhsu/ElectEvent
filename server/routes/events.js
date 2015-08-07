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

// Return specific event by ID

router.get('/:id', function(req, res){
  var event_id = req.params.id;
  Event.findById(event_id, function(err, event){
    res.send(event);
  });
});

// Expect POST object like:
// {
//   "title": "Go to the Beach!!",
//   "group_id": "55c3b14b0ae922f4cfd97dac",
//   "description": "Waves, sun, fun, sharks!",
//   "user_id": "55c3b0f7260e1c7acfa096ee"
// }

// 55c3b1eb2ff3fdbad0c3e152
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

    Group.findById(data.group_id, function(err, group){
      group.events.push(newEvent._id);

      group.save(function(err){
        //updated group
        res.send(newEvent);
      });
    });
  });
});

module.exports = router;
