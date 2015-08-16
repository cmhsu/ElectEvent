app
  .controller('groupFormCtrl', ['$scope', '$cookies', 'groupCreate', function ($scope, $cookies, groupCreate) {
    $scope.submitForm = function (groupName) {
      groupCreate.createGroup(groupName, $cookies.get('user_id'));
    }
  }]);