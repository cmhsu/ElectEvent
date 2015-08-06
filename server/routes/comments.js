var express     = require('express');
var router = express.Router();
var Comment = require('./../db/Comment');
var User = require('./../db/User');

router.get('/', function(req, res) {
  Comment.find({}).exec(function(err, comments){
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
    res.send(newComment);
  });

});

module.exports = router;
