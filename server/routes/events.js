var express    = require('express');
var router     = express.Router();

var Event      = require('./../db/Event');
var User       = require('./../db/User');
var Group      = require('./../db/Group');

// Return all events
router.get('/', function(req, res) {
  Event.find({}).populate('group').populate('creator').populate('comments')
  .exec(function(err, events){
    res.json(events);
  });

});

// Return specific event by ID
router.get('/:id', function(req, res){
  var event_id = req.params.id;
  Event.findById(event_id).populate('group').populate('creator').populate('comments')
  .exec(function(err, event){
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

router.post('/', function(req, res) {

  var data = req.body;

  var addEvent = Event.create({
    title: data.title,
    creator: data.user_id,
    group: data.group_id,
    description: data.description,
    votes: 0,
    datetime: data.datetime
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

router.put('/', function(req, res) {
  var id = req.body._id;
  Event.findByIdAndUpdate(id, req.body, function(err) {
    if (err) {
      return res.send(500, err);
    }
  });
  res.send(req.body);
});

module.exports = router;
