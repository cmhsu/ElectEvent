angular
  .module('stationarySalmonBestSalmonApp')
  .controller('eventFeedCtrl', ['$scope', 'EventsService', function($scope, EventsService) {
    $scope.test = 'hi';
    EventsService.get($scope);
  }]);
