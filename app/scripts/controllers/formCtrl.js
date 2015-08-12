app.controller('FormCtrl', ['$scope', function($scope) {
  $scope.user = {};
  $scope.signup = function() {
    var user = $scope.user;
    alert('username ' + user.username + ' password ' + user.password);
  };
}]);