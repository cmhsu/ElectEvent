app.controller('EventController', ['$scope', 'EventService', 'UserService', '$stateParams', 
  function($scope, EventService, UserService, $stateParams) {
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
    populateEventData();
  }]);
