app
  .service('EventsService', ['$http', function($http) {
    this.get = function() {
      return $http.get('/api/events');
    };
  }]);

