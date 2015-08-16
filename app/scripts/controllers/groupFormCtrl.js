app
  .controller('groupFormCtrl', ['$scope', '$cookies', 'groupCreate', function ($scope, $cookies, groupCreate) {
    $scope.submitForm = function (groupName) {
      // have to add user_id
      groupCreate.createGroup(groupName, $cookies.get('user_id'));
    }
  }]);