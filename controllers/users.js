/**
 * users controller
 */

// Import models.
var models = require('../models');
// Import User Model.
var User = models.User;

// Expose the users controller.
module.exports = {

  create: function(req, res) {
    console.log(req.body);
    if (req.body.username && req.body.password != null) {
      var newUser = {
        username: req.body.username,
        password: req.body.password
      }

      User.create(newUser).then(function() {
        res.sendStatus(200);
        res.json(req.dataValues);
      });
    } else {
      res.sendStatus(406);
    }
  },

  get: function(req, res) {
    User.findAll().success(function(users) {
      res.send(users);
    });
  },

  update: function(req, res) {
    User.find({
      where: {
        username: req.params.id
      }
    }).then(function(oldUser) {
      oldUser.updateAttributes({
        username: req.body.username,
        password: req.body.password
      }).then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  },

  destroy: function(req, res) {
    User.find({
      where: {
        username: req.params.id
      }
    }).then(function(oldUser) {
      oldUser.destroy().then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  }

};
