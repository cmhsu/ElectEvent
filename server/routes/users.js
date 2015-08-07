var express    = require('express');
var router     = express.Router();
var User       = require('./../db/User');

// Return users
router.get('/', function(req, res) {
  User.find({}).populate('groups')
  .exec(function(err, users){
    res.json(users);
  });
    
});


// Car
// .find()
// .populate('partIds')
// .exec(function(err, docs) {
//   if(err) return callback(err);
//   Car.populate(docs, {
//     path: 'partIds.otherIds',
//     model: 'Other'
//   },
//   function(err, cars) {
//     if(err) return callback(err);
//     console.log(cars); // This object should now be populated accordingly.
//   });
// });



// Return specific user by ID

router.get('/:id', function(req, res){
  var user_id = req.params.id;
  User.findById(user_id).populate('groups').populate('events')
  .exec(function(err, user){
    res.send(user);
  });
});

// Expect POST object like:
// {
//     "username": "andrew"
// }

// 55c3b0f7260e1c7acfa096ee

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
