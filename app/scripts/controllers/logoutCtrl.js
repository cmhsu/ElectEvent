app
  .controller('LogoutCtrl', ['$scope','$cookies','$location',
   function ($scope, $cookies, $location) {
    $scope.logout = function() {
      // Delete session information
      $cookies.remove('token');
      $cookies.remove('user'); 
      $location.path('/login');     
    };
    $scope.logout();
  }]);
