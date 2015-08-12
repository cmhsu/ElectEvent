app.controller('EventController', ['$scope', 'EventService', 'UserService', 'CommentService', '$stateParams', 
  function($scope, EventService, UserService, CommentService, $stateParams) {
    var populateEventData = function(){
      EventService.get($stateParams.id).then(function(response) {
        var data = response.data;
        $scope.data = data;
        $scope.eventName = data.title;
        $scope.group = data.group.groupname;
        $scope.creator = data.creator.username;
        $scope.eventDescription = data.description;
        $scope.votes = data.vote;
        $scope.comments = data.comments;
      })
      .then(function(){
        $scope.comments.forEach(function(comment){
          UserService.get(comment.creator).then(function(response){
            comment.creator = response.data.username;
          });
        });
      });
    }

    $scope.postComment = function(){
      var event_id = $scope.data._id;
      var comment_text = $scope.comment_text;

      /*
      ### Get the user_id from the Session object eventually...
      ### This is just a placeholder
      */
      var user_id = "55c5226057c77d1c3bf1453f";
      // Don't submit unless the user has actually written a comment
      if(comment_text){
        var comment = {
          "content": comment_text,
          "user_id": user_id,
          "event_id": event_id
        };

        CommentService.post(comment).then(function(data){
          $scope.comment_text = '';
          populateEventData();
        });
      }
    }

    populateEventData();
  }]);
