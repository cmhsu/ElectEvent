var express    = require('express');
var router     = express.Router();
var User       = require('./../db/User');
var Q          = require('q');

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
//     "password": cats
// }

// 55c3b0f7260e1c7acfa096ee

// i think we need to bind because of cb functions? but what would create be set to anyways? the window?

router.post('/', function(req, res, next) {

  var data = req.body;
  var username = req.body.username;
  var password = req.body.password;

  var findOne = Q.nbind(User.findOne, User);

  findOne({username: username})
    .then(function(user) {
      if (user) {
        next(new Error('User already exists!'));
      } else {
        var create = Q.nbind(User.create, User);
        var newUser = {
          username: username,
          password: password
        };
        return create(newUser);
      }
    })
    .then(function(user) {
      res.send(user);
      next();
    })
    .fail(function (error) {
      next(error);
    });

  // WHY DOESN'T THIS WORK?!
  // check if user already exists
  // User.findOne({username: username})
  //   .then(function(user) {
  //     if (user) {
  //       next(new Error('User already exists!'));
  //     } else {
  //       return User.create({
  //         username: username,
  //         password: password
  //       });
  //     }
  //   })
  //   .then(function(newUser) {
  //     res.send(newUser);
  //     next();
  //   })
  //   .fail(function (error) {
  //     next(error);
  //   });

  // var addUser = User.create({
  //   username: data.username,
  //   password: data.password
  // },
  // function(err, newUser){
  //   if (err) res.send(err);
  //   res.send(newUser);
  // });
});


module.exports = router;
