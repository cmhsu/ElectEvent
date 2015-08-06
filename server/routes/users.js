var express     = require('express');
var router = express.Router();
var User = require('./../db/User');

// Return users
router.get('/', function(req, res) {
  User.find({}).populate('groups').exec(function(err, users){
    res.json(users);
  });
    
});

// Expect to receive an object like:
// {
//   "title": "Event Title",
//   "group_id": "## group_id from group that the post was submitted from (String) ##",
//   "description": "A great thing to do",
//   "user_id": "## user_id from current session (String) ##"
// }

// Sample ID for test: andrew - 55c2c88b073498c8a750918f

router.post('/', function(req, res) {

  var data = req.body;

  var addUser = User.create({
    username: data.username
  }, 
  function(err, newUser){
    res.send(newUser);
  });

});

module.exports = router;
