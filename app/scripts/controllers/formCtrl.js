app.controller('FormCtrl', ['$scope', 'FormService', '$location', '$cookies', '$rootScope', '$window',
  function($scope, FormService, $location, $cookies, $rootScope, $window) {
  $scope.user = {};
  $scope.signup = function() {
    var user = $scope.user;
    FormService.signup(user).then(function(data) {
      $cookies.put('token', data.token);
      //$cookies.put('user', $scope.user.username);
      $cookies.put('user_id', data.user_id);
      $rootScope.token = data.token;
      $location.path('/');
      $window.location.reload();
    });
  };
}]);
