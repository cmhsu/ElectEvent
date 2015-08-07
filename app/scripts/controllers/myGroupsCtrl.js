angular.module('stationarySalmonBestSalmonApp')
  .controller('myGroupsCtrl', ['$scope', '$location', 'getGroups', function ($scope, $location, getGroups) {
    $scope.groups = [];

    getGroups.getMyGroups().then(function (response) {
      $scope.groups = response.data;
    });

    $scope.selectGroup = function (group) {
      var groupId = group.id;
      $location.path('/group/' + groupId);
    };
  }]);  