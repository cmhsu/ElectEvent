app.controller('groupCtrl', ['$scope', '$routeParams', '$stateParams', 'getGroups', function ($scope, $routeParams, $stateParams, getGroups) {
  var userId = $routeParams; // need to fill this out
  $scope.meow = userId;

  getGroups.getGroup($routeParams.id).then(function (data) {
    $scope.groupname = data.groupname;
    $scope.events = data.events;
    $scope.members = data.members;
  });
}]);