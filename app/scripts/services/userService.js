app
  .service('UserService', ['$http', '$stateParams', function($http, $stateParams) {
    this.get = function(id) {
      return $http.get('/api/users/' + id).then(function(response) {
          return response.data;
      });
      //return $http.get('/api/users/').then(function(response) {
      //  return response.data;
      //})
    }
  }]);

