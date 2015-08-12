var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Q        = require('q');
var SALT_WORK_FACTOR = 8;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: String,
  groups: [{ 
      type : mongoose.Schema.Types.ObjectId, 
      ref: 'Group' 
    }]
});

// TODO: create compare passwords fcn
UserSchema.methods.comparePassword = function(submittedPassword) {
  // defer promise until async comparison is made
  var deferred = Q.defer();
  // get saved user password
  var storedPassword = this.password;
  bcrypt.compare(submittedPassword, storedPassword, function(err, matchResult) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(matchResult);
    }
  });

  return deferred.promise;
};


// TODO: save hashed user passwords
// autogenerate hashed pword
UserSchema.pre('save', function (next) {
  var user = this;

  // if pword is not new or modified, exit fcn
  if (!user.isModified('password')) {
    return;
  }

  // gen salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      next(err);
    }

    // hash password
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      // save hashed password + salt
      user.password = hash;
      user.salt = salt;
      next();
    })
  });
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
