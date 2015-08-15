app
  .service('UserService', ['$http', '$stateParams', function($http, $stateParams) {
    this.get = function(id) {
      return $http.get('/api/users/' + id);
    };
    this.login = function(user){
      return $http.post('/api/users/login', user);
    };
  }]);
