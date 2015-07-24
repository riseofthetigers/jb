/**
 * users controller
 */

// Import models
var models = require('../models');
var User = models.User;
var Candidate = models.Candidate;

var utils = require('./controllerUtils')
var send = utils.send, cry = utils.cry, requireLogin = utils.requireLogin;
var restError = utils.restError

// Expose the users controller.
module.exports = {

  create: function(req, res) {
    //console.log(req.body);
    if (req.body.email && req.body.password != null && req.body.firstname && req.body.lastname != null) {
      var displayname = req.body.firstname + ' ' + req.body.lastname;
      var newUser = {
        type: req.body.type,
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

  getCandidate: function(req, res) {
    requireLogin(req).then(function(user) {
      // For now, just the user itself has access to his Candidate
      if(user.id.toString() !== req.params.id)
        restError("Access denied", 403)
      return User.findOne({where: {id: parseInt(req.params.id)}, include: [Candidate]})

    }).then(function(user) {
      if(!user)
        restError("User does not exist")
      if(!user.Candidate)
        restError("User is not a Candidate")

      return {
        candidate: user.Candidate,
        user: user.safeValues()
      }
    }).then(send(res)).catch(cry(res))
  },

  getUser: function(req, res) {
    User.find({
          where: {
            id: req.params.id,
            displayName: req.user.displayName
          }
        }).then(function(user) {
          res.send(user);
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
