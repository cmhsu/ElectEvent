app
  .controller('eventFeedCtrl', ['$scope', 'EventsService', '$location', function($scope, EventsService, $location) {
    EventsService.get().then(function(data) {
      $scope.events = data;
    });

    //$scope.selectEvent = function(event) {
    //  var id = event.id;
    //  $location.path('/event/' + id);
    //};
  }]);


