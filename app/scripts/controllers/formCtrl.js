app.controller('FormCtrl', ['$scope', 'FormService', '$location', function($scope, FormService, $location) {
  $scope.user = {};
  $scope.signup = function() {
    var user = $scope.user;
    console.log(user);
    FormService.signup(user).then(function() {
      $location.path('/');
    });
  };
}]);
