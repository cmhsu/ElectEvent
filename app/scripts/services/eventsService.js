angular
  .module('stationarySalmonBestSalmonApp')
  .service('EventsService', ['$http', function($http) {
    this.get = function() {
      return $http.get('/api/events').then(function(response) {
        return response.data;
      });
    };
  }]);

