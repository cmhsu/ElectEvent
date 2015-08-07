var seeder = require('mongoose-seeder');
var data = require('./data.json');

var mongoose = require( 'mongoose' ); 
var Q = require('q'); 

var Comment = require('./Comment');
var Event = require('./Event');
var User = require('./User');
var Group = require('./Group');

var dbURI = 'mongodb://localhost/electevent'; 

// Create the database connection 
var db = mongoose.connect(dbURI); 

var group1Id;
var event1Id;

mongoose.connection.on('connected', function () {  
  console.log('Seeding DB');
  
  seeder.seed(data).then(function(dbData) {
    // store data

    // get group id to push to user.groups
    group1Id = dbData.groups.group1._id;
    // get group id to push to user.groups
    event1Id = dbData.events.event1._id;
    // get comment id to push to event.comments
    comment1Id = dbData.comments.comment1._id;

  })
  .catch(function(err) {
      throw err;
  })
  .then(function(){
    // Initial data stored, now we need to create a few
    // additonal reference links

    // Add group_ids to user.groups
    
    var promises = [];

    promises.push(Q(User.find({}).exec(function(err, users){
      users.forEach(function(user) {
        user.groups.push(group1Id);
        promises.push(Q(user.save()));
      });
    })));

    // Add event_ids to groups.events
    promises.push(Q(Group.find({}).exec(function(err, groups){
      groups.forEach(function(group) {
        group.events.push(event1Id);
        promises.push(Q(group.save()));
      });
    })));

    // Add comment_ids to events.comments
    promises.push(Q(Event.find({}).exec(function(err, events){
      events.forEach(function(event) {
        event.comments.push(comment1Id);
        promises.push(Q(event.save()));
      });
    })));

    Q.all(promises).then(function(){
      mongoose.connection.close();
    });
  });
}); 

