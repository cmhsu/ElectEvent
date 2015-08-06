var express     = require('express');
var router = express.Router();
var Comment = require('./../db/Comment');
var User = require('./../db/User');

router.get('/', function(req, res) {
  Comment.find({}).populate('creator').populate('event')
  .exec(function(err, comments){
    res.json(comments);
  });
    
});

// Expect to receive a post object like:
// {
//   content: "Comment text",
//   user_id: ## ID of the user posting the comments ##
//   event_id: ## ID of the event that the comment is associated with
// }

router.post('/', function(req, res) {

  var data = req.body;

  var addComment = Comment.create({
    content: data.content,
    creator: data.user_id,
    event: data.event_id
  }, 
  function(err, newComment){
    
    // Add the comment_id to the comments array in the events model
    Event.findById(event_id, function(err, event){
      event.comments.push(newComment._id);

      event.save(function(err){
        //Saved!
        res.send(newComment);
      });
    });
  });

});

module.exports = router;
