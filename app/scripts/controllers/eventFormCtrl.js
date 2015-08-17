app.controller('EventFormCtrl', ['$scope', '$cookies', 'getGroups', 'CreateEvent', '$location', 'UserService',
  function ($scope, $cookies, getGroups, CreateEvent, $location, UserService) {
  //getGroups.getMyGroups().then(function(response) {
  //  var data = response.data;
  //  $scope.myGroups = data;
  //});

  UserService.get($cookies.get('user_id')).then(function(response) {
    var user = response.data;
    $scope.myGroups = user.groups;
  });

  $scope.createEvent = function() {
    var newEvent = {
      title: $scope.title,
      group_id: $scope.selectedGroup._id,
      description: $scope.description,
      user_id: $cookies.get('user_id')
    };
    CreateEvent.newEvent(newEvent).then(function(response) {
      $scope.title = '';
      $scope.description = '';
      $scope.selectedGroup = '';
      $location.path('/event/' + response.data._id);
    });
  };
}]);
