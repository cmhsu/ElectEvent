angular.module('app.event', [])
  .controller('EventController', ['$scope', 'EventService', '$routeParams', function($scope, EventService, $routeParams) {
    EventService.get($routeParams.id).then(function(data) {    
      $scope.eventName = data.title;
      $scope.group = data.groups.groupname;
      $scope.creator = data.creator.username;
      $scope.eventDescription = data.description;
      $scope.votes = data.vote;
      $scope.comments = data.comments;
    });
  }]);