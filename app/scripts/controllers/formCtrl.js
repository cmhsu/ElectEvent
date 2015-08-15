app.controller('FormCtrl', ['$scope', 'FormService', '$location', '$cookies',
  function($scope, FormService, $location, $cookies) {
  $scope.user = {};
  $scope.signup = function() {
    var user = $scope.user;
    console.log(user);
    FormService.signup(user).then(function(token) {
      $cookies.put('token', token);
      $cookies.put('user', $scope.user.username);
      $location.path('/');
    });
  };
}]);
