var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  group: {
    type: ObjectId,
    ref: 'Group'
  },
  description: {
    type: String
  },
  comments: [{ 
    type : ObjectId, 
    ref: 'Comment' 
  }],
  creator: {
    type: ObjectId,
    ref: 'User'
  }
});

var Event = mongoose.model('Event', EntitiesSchema);

module.exports = Event;

// {
//   "id": 1,
//   "title": "Event Title",
//   "group": "group id",
//   "description": "A great thing to do",
//   "comments": ["comment_id1", "comment_id2"],
//   "creator": "user_id",
//   "votes": 0
// }