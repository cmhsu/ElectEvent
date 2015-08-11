app
  .controller('userCtrl', ['$scope', 'UserService', '$location', '$stateParams', function($scope, UserService, $location, $stateParams) {
    UserService.get($stateParams.id).then(function(response) {
      var data = response.data;
      console.log(data);
      $scope.username = data.username;
      $scope.groups = data.groups;
    });
  }]);

