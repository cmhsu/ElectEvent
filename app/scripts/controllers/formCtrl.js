app.controller('FormCtrl', ['$scope', 'FormService', function($scope, FormService) {
  $scope.user = {};
  $scope.signup = function() {
    var user = $scope.user;
    FormService.signup(user);
  };
}]);