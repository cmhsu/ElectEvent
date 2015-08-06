var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  creator: {
    type: ObjectId,
    ref: 'User'
  },
  content: {
    type: String
  },
  event: { 
      type : ObjectId, 
      ref: 'Event' 
    }
});

var Comment = mongoose.model('Comment', EntitiesSchema);

module.exports = Comment;


// {
//   "id": 1,
//   "creator": "user_id",
//   "content": "Some text",
//   "event": "event_id"
// }