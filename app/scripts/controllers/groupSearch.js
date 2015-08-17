app.
  controller('groupSearch', ['$scope', 'getGroups', function ($scope, getGroups) {
    getGroups.getMyGroups().then(function (response) {
      $scope.groups = response.data;
    });
  }]);