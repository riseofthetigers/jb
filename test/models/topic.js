var faker = require('faker');
var db = require('../../models');

describe('User', function() {
  var Topic = db.Topic;
  var User = db.User;
  before(function(done) {
    Topic.sync({
        force: true
      })
      .complete(done);
  });

  describe('Create a topic for user-to-user messages', function() {
    var mockTopic;

    it('vailate data and insert topic', function(done) {
      Topic.build({
        title: ''
      }).save().then(function(topic) {
        mockTopic = topic;
      }).complete(done);
    });

    it ('find the mockTopic', function() {
      return Topic.findOne(mockTopic.id).then(function (topic) {
        topic.get().should.be.eql(mockTopic.get());
      });
    });

  });

});
