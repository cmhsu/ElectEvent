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

// Return specific group by ID

router.get('/:id', function(req, res){
  var group_id = req.params.id;
  Group.findById(group_id).populate('events').populate("members")
  .exec(function(err, group){
    res.send(group);
  });
});

router.put('/:id', function(req, res){
  var group_id = req.params.id;
  Group.findById(group_id, function (err, group) {
    group.members.push(req.body._id);
    group.save(function (err) {
      User.findById(req.body._id, function(err, user) {
        user.groups.push(group_id);
        user.save(function(err) {
          console.log(group);
          res.send(group);
        })
      });
    });
  });

});

// Expect a POST object like:
// {
//   "groupname": "Best Group",
//   "user_id": "55c3b0f7260e1c7acfa096ee"   // user_id is the id of group creator
// }

// on group create, add that group id to the user's groups array property
router.post('/', function(req, res) {
  var data = req.body;
  var addGroup = Group.create({
    groupname: data.groupname,
    members: [data.user_id]
  },
  function(err, newGroup){
    // Add newGroup's id the the groups array on the User model
    User.findById(data.user_id, function(err, user){
      user.groups.push(newGroup._id);
      user.save(function(err){
        // Respond with succesfully created group.
        res.send(newGroup);
      });
    });
  });
});

module.exports = router;
