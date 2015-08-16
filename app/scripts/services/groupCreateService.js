app.service('groupCreate', ['$http', function ($http) {
  this.createGroup = function (groupName, founderId) {
    var groupData = {groupName: groupName, user_id: founderId};
    // return $http.post('api/groups/', groupData);
    console.log(groupName, founderId);
  }
}]);