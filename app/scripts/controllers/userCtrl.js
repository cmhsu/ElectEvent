app
  .controller('userCtrl', ['$scope', 'UserService', '$location', '$stateParams','$cookies', 
    function($scope, UserService, $location, $stateParams, $cookies) {
    UserService.get($cookies.get('user_id')).then(function(response) {
      var data = response.data;
      $scope.username = data.username;
      $scope.groups = data.groups;
    });
  }]);

