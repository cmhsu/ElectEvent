app.service('EventService', ['$http', function($http) {
  this.get = function(eventId) {
    return $http.get('api/events/' + eventId).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };
}]);