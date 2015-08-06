var express     = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Events GET');
});

router.post('/', function(req, res) {
  res.send('Events POST');
});

module.exports = router;


// app.get('/api/events', function(req, res){

//   Event.find({}).exec(function(err, events){
//     res.json(events);
//   });
  
// })