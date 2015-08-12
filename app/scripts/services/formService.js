app.service('FormService', ['$http', function($http) {
  this.signup = function(user) {
    $http.post('/api/users', user)
      .then(function (response) {
        // on success
      }, function (response) {
        // on failure
      });
  };
}]);