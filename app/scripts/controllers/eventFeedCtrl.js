app
  .controller('eventFeedCtrl', ['$scope', 'EventService','UserService', '$location', '$cookies','$q', 
    function($scope, EventService, UserService, $location, $cookies, $q) {
    
    // Manually enter user-id for testing
    //UserService.get('55c5226057c77d1c3bf14540').then(function(response) {
    
    UserService.get($cookies.get('user_id')).then(function(response) {
      var user = response.data;
      var groups = user.groups;
      var apiCalls = [];
      if(groups){
        groups.forEach(function(group){
          var events = group.events;
          if(events){
            events.forEach(function(event){
              apiCalls.push(EventService.get(event).then(function(result){
                return result;
              }));
            });
            // Resolve all promises
            $q.all(apiCalls)
              .then(function(eventModels){
                $scope.events = eventModels.map(function(model){
                  return model.data;
                });
              });
          }
        });
      }
    });
  }]);
