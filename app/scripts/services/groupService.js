app.service('getGroups', ['$http', '$cookies', function ($http, $cookies) {

  this.getMyGroups = function () {
    return $http.get('/api/groups');
  };

  this.getGroup = function (id) {
    return $http.get('/api/groups/' + id);
  };

  this.joinGroup = function (id) {
    return $http.put('/api/groups/' + id, {_id: $cookies.get('user_id')});
  };

}]);