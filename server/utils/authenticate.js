var User = require('./../db/User');

var isAuthorized = function(req, res, next){
  var authToken = req.headers.authorization;

  if(authToken){
    var token = authToken.split('Bearer ')[1];
    
    User.findOne({'token': token}, function(err, user){
      if(err){
        res.send(401);
      } else{
        next(); 
      }      
    });
  } else{
    res.sendStatus(401);
  }
};

exports.isAuthorized = isAuthorized;