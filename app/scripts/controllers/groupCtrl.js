app.
  controller('groupCtrl', ['$scope', '$stateParams', '$cookies', '$window', 'getGroups', function ($scope, $stateParams, $cookies, $window, getGroups) {
    var contains = function (array, property, target) {
      return array.reduce(function (prev, curr) {
        return prev ? prev : (curr[property] === target);
      }, false);
    };

    getGroups.getGroup($stateParams.id).then(function (response) {
      var data = response.data;
      $scope.groupname = data.groupname;
      $scope.comments = data.comments;
      $scope.events = data.events;
      $scope.members = data.members;
      $scope.isInGroup = contains(data.members, '_id', $cookies.get('user_id'));
      $scope.joinGroup = function () {
        getGroups.joinGroup($stateParams.id);
        $window.location.reload();
      };
    });
}]);
