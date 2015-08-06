var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  groups: [{ 
      type : ObjectId, 
      ref: 'Group' 
    }]
});

var User = mongoose.model('User', EntitiesSchema);

module.exports = User;