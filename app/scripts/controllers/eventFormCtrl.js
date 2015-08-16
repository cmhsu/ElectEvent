app.controller('EventFormCtrl', ['$scope', '$cookies', 'getGroups', 'CreateEvent', function ($scope, $cookies, getGroups, CreateEvent) {
  getGroups.getMyGroups().then(function(response) {
    var data = response.data;
    $scope.myGroups = data;
  });
  $scope.createEvent = function() {
    var newEvent = {
      title: $scope.title,
      group_id: $scope.selectedGroup._id,
      description: $scope.description,
      user_id: $cookies.get('user_id')
    };
    CreateEvent.newEvent(newEvent);
  };
}]);