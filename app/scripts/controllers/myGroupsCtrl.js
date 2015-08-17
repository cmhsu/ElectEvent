app
  .controller('myGroupsCtrl', ['$scope', '$location', 'getGroups', 'UserService', '$cookies',
    function ($scope, $location, getGroups, UserService, $cookies) {
    //getGroups.getMyGroups().then(function (response) {
    //  $scope.groups = response.data;
    //  console.log(response.data);
    //});

    // Manually enter user-id for testing
    //UserService.get("55cd74f8289cf2d261678944").then(function(response) {

    UserService.get($cookies.get('user_id')).then(function(response) {
      var user = response.data;
      console.log(user);
      $scope.groups = user.groups;
    });


  }]);
