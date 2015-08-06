var express     = require('express');
var router      = express.Router();
var Event       = require('./../db/Event');
var User        = require('./../db/User');
var Group       = require('./../db/Group');

// Return all events
router.get('/', function(req, res) {
  Group.find({}).populate('events').populate("members")
    .exec(function(err, events){
    res.json(events);
  }); 
});

router.post('/', function(req, res) {

  var data = req.body;

  var addGroup = Group.create({
    groupname: data.groupname
  },
  function(err, newGroup){
    res.send(newGroup);
  });
});

module.exports = router;