app.service('CommentService', ['$http', function($http) {
  this.get = function(commentId) {
    return $http.get('api/comments/' + commentId);
  };
  this.post = function(comment) {
    return $http.post('api/comments/', comment);
  };
}]);