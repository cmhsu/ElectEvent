//username. groups
app
  .controller('userCtrl', ['$scope', 'UserService', '$location', '$stateParams', function($scope, UserService, $location, $stateParams) {
    UserService.get($stateParams.id).then(function(data) {
      console.log(data, ' data');
      $scope.username = data.username;
      console.log(data.groups);
      $scope.groups = data.groups;
    });

    //$scope.selectEvent = function(event) {
    //  var id = event.id;
    //  $location.path('/event/' + id);
    //};
  }]);


