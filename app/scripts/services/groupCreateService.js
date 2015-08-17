app.service('groupCreate', ['$http', function ($http) {
  this.createGroup = function (groupName, founderId) {
    var groupData = {groupname: groupName, user_id: founderId};
    return $http.post('api/groups/', groupData);
  }
}]);