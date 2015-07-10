/**
 * users controller
 */

// Import models.
var models = require('../models');
// Import User Model.
var User = models.User;
var async   = require('async');

// Expose the users controller.
module.exports = {

  create: function(req, res) {
    //console.log(req.body);
    if (req.body.email && req.body.password != null && req.body.firstname && req.body.lastname != null) {
      var displayname = req.body.firstname + ' ' + req.body.lastname;
      var newUser = {
        type : req.body.type,
        username: req.body.email,
        email: req.body.email,
        password: req.body.password,
        displayName: displayname
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
    User.findAll().then(function(users) {
      res.send(users);
    });
  },

  getUser: function(req, res) {
    User.find({
          where: {
            id: req.params.id,
            displayName: req.user.displayName
          }
        }).then(function(User) {
          res.send(User);
          // res.redirect('/');
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


