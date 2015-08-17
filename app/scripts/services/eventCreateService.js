app.service('CreateEvent', ['$http', function($http) {
  this.newEvent = function(newEvent) {
    return $http.post('api/events/', newEvent)
      .then(function (response) {
        console.log('successfully added event');
        return response;
      }, function (response) {
        console.log('failed to add event');
      });
  };
}]);
