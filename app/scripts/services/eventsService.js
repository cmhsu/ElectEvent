angular
  .module('stationarySalmonBestSalmonApp')
  .service('EventsService', ['$http', function($http) {
    this.get = function($scope) {
      console.log('EventsService works');
      $http.get('/api/events').then(function(data) {
        $scope.data = data.data;
      });
    }
  }]);
