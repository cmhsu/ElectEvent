app.controller('EventController', ['$scope', 'EventService', '$stateParams', function($scope, EventService, $stateParams) {
    EventService.get($stateParams.id).then(function(data) {    
      $scope.eventName = data.title;
      $scope.group = data.group;
      $scope.creator = data.creator;
      $scope.eventDescription = data.description;
      $scope.votes = data.vote;
      $scope.comments = data.comments;
    });
  }]);