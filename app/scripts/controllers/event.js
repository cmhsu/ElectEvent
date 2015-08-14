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
        $scope.votes = data.votes;
        $scope.upvoters = data.upvoters;
        $scope.downvoters = data.downvoters;
        $scope.comments = data.comments;
      })
      .then(function(){
        $scope.comments.forEach(function(comment){
          UserService.get(comment.creator).then(function(response){
            comment.creator = response.data.username;
          });
        });
      });
    };

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
    };

    /*
     ### Like above, get the user_id from the Session object eventually...
     ### This is just a placeholder
     */
    var user_id = "55c5226057c77d1c3bf1453f";
    $scope.user_id = user_id;

    $scope.upvote = function() {
      if ($scope.upvoters.indexOf(user_id) === -1) {
        if ($scope.downvoters.indexOf(user_id) >= 0) {
          $scope.downvoters.splice($scope.downvoters.indexOf(user_id), 1);
          $scope.data.votes += 2;
        } else {
          $scope.data.votes += 1;
        }
        $scope.data.upvoters.push(user_id);
      } else {
        $scope.upvoters.splice($scope.upvoters.indexOf(user_id), 1);
        $scope.data.votes -= 1;
      }
      var data = $scope.data;
      EventService.put(data).then(function(data) {
        $scope.votes = data.data.votes;
      });
    };

    $scope.downvote = function() {
      if ($scope.downvoters.indexOf(user_id) === -1) {
        if ($scope.upvoters.indexOf(user_id) >= 0) {
          $scope.upvoters.splice($scope.upvoters.indexOf(user_id), 1)
          $scope.data.votes -= 2;
        } else {
          $scope.data.votes -= 1;
        }
        $scope.data.downvoters.push(user_id);
      } else {
        $scope.downvoters.splice($scope.downvoters.indexOf(user_id), 1);
        $scope.data.votes += 1;
      }
      var data = $scope.data;
      EventService.put(data).then(function(data) {
        $scope.votes = data.data.votes;
      });
    };

    populateEventData();
  }]);
