app.service('getGroups', ['$http', function ($http) {

  this.getMyGroups = function () {
    return $http.get('/api/groups');
  };

  this.getGroup = function (id) {
    return $http.get('/api/groups/' + id);
  };

}]);