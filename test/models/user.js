var faker = require('faker');
var db = require('../../models');

describe('User', function() {
  var User = db.User;
  before(function(done) {
    User.sync({
        force: true
      })
      .complete(done);
  });

  describe('Insert user and find it', function() {
    var mockUser;

    it('vailate data and insert user', function(done) {
      User.build({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      }).save().then(function(user) {
        mockUser = user;
      }).complete(done);
    });

    it ('find the mockUser', function() {
      return User.findOne(mockUser.id).then(function (user) {
        user.get().should.be.eql(mockUser.get());
      });
    });

  });

});
