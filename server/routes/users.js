var express    = require('express');
var router     = express.Router();
var User       = require('./../db/User');
var Q          = require('q');
var jwt        = require('jwt-simple');
var auth       = require('./../utils/authenticate');

// Return users
// Uncomment only for testing

// router.get('/', function(req, res) {
//   User.find({}).populate('groups')
//   .exec(function(err, users){
//     res.json(users);
//   });

// });

// Return specific user by ID

router.get('/:id', auth.isAuthorized, function(req, res){
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

router.post('/signup', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  var findOne = Q.nbind(User.findOne, User);

  // check if user exists
  findOne({username: username})
    .then(function(user) {
      if (user) {
        // if user exists throw error
        next(new Error('User already exists!'));
      } else {
        // else create user
        var create = Q.nbind(User.create, User);
        var token = jwt.encode(Date.now(), 'stationarySalmon');
        // set up user object
        var newUser = {
          username: username,
          password: password,
          token: token
        };
        // return created user
        return create(newUser);
      }
    })
    .then(function(user) {
      res.json({
        user_id: user._id,
        token: user.token
      });
    })
    .fail(function (error) {
      next(error);
    });
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  var findOne = Q.nbind(User.findOne, User);

  findOne({username: username})
    .then(function(user) {
      if (!user) {
        next(new Error('User does not exist.'))
      } else {
        // return promise
        return user.comparePassword(password)
          .then(function(authenticated) {
            if (authenticated) {
              var token = jwt.encode(Date.now(), 'stationarySalmon');

              user.update({'token': token}, function(err, raw){
                res.json({
                  user_id: user._id,
                  token: token
                });
              });
            } else {
              // Bad login
              res.sendStatus(401);
            }
          });
      }
    })
    .fail(function(err) {
      next(err);
    });


});


module.exports = router;
