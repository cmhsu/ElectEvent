app
  .controller('eventFeedCtrl', ['$scope', 'EventsService', '$location', function($scope, EventsService, $location) {
    EventsService.get().then(function(response) {
      $scope.events = response.data;
    });
  }]);


