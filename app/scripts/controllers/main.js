'use strict';

/**
 * @ngdoc function
 * @name stationarySalmonBestSalmonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stationarySalmonBestSalmonApp
 */
app
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function(viewLocation) { //used to set active class on current nav element
      if (viewLocation === '/user') {
        var sliceIndex = $location.path().lastIndexOf('/');
        return viewLocation === $location.path().slice(0, sliceIndex);
      } else {
        return viewLocation === $location.path()
      }
    };
  }]);
