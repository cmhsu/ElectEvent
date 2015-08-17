app
  .controller('groupFormCtrl', ['$scope', '$cookies', 'groupCreate', function ($scope, $cookies, groupCreate) {
    $scope.submitForm = function (groupName) {
      groupCreate.createGroup(groupName, $cookies.get('user_id'));
      //groupCreate.createGroup(groupName, "55cd74f8289cf2d261678944"); //for testing only.
    }
  }]);
