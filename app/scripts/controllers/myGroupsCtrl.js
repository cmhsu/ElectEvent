angular.module('stationarySalmonBestSalmonApp')
  .controller('myGroupsCtrl', ['$scope', '$location', 'getGroups', function ($scope, $location, getGroups) {
    getGroups.getMyGroups().then(function (response) {
      $scope.groups = response.data;
    });
  }]);  