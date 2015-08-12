app.service('FormService', ['$http', function($http) {
  this.signup = function(user) {
    $http.post('/api/users', user)
      .then(function (response) {
        // on success
        console.log('successfully added user');
      }, function (response) {
        // on failure
        console.log('failed to add user');
      });
  };
}]);