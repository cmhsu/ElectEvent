app.service('EventService', ['$http', function($http) {
  this.get = function(eventId) {
    return $http.get('api/events/' + eventId);
  };
  this.put = function(data) {
    return $http.put('api/events/', data);
  }
}]);
