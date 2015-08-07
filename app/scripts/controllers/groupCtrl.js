app.controller('groupCtrl', ['$scope', '$stateParams', 'getGroups', function ($scope, $stateParams, getGroups) {
  console.log($stateParams);

  getGroups.getGroup($stateParams.id).then(function (response) {
    var data = response.data;
    console.log(data);
    $scope.groupname = data.groupname;
    $scope.comments = data.comments;
    $scope.events = data.events;
    $scope.members = data.members;
  });
}]);