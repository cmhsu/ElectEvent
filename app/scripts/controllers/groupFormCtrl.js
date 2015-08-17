app
  .controller('groupFormCtrl', ['$scope', '$cookies', 'groupCreate', '$location', function ($scope, $cookies, groupCreate, $location) {
    $scope.submitForm = function (groupName) {
      groupCreate.createGroup(groupName, $cookies.get('user_id')).then(function(response) {
        $scope.group.name = '';
        $location.path('/group/' + response.data._id);
        console.log(response);
      });

      //groupCreate.createGroup(groupName, "55cd74f8289cf2d261678944"); //for testing only.
    }
  }]);
