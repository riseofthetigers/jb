/**
 *  candidates controller
 */

// Import models.
var models = require('../models');
// Import Candidate Model.
var Candidate = models.Candidate;

// Expose the candidates controller.
module.exports = {

  create: function(req, res) {
    console.log(req.body);
    var createCandidate = {
      name: req.body.name,
      phone_number: req.body.phone_number,
      address: req.body.address,
      state: req.body.state,
      skills: req.body.skills,
      candidate_picture: req.body.candidate_picture,
      user_id: req.body.user_id
    }

    Candidate.create(createCandidate).success(function(err) {
      res.send(200);
      res.json(req.dataValues);
    });
  },

  get: function(req, res) {
    Candidate.findAll().success(function(candidates) {
      res.send(candidates);
    });
  },

  update: function(req, res) {
    Candidate.find({
      where: {
        name: req.params.id
      }
    }).then(function(oldCandidate) {
      oldCandidate.updateAttributes({
        name: req.body.name,
        phone_number: req.body.phone_number,
        address: req.body.address,
        state: req.body.state,
        skills: req.body.skills,
        candidate_picture: req.body.candidate_picture
      }).then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  },

  destroy: function(req, res) {
    Candidate.find({
      where: {
        name: req.params.id
      }
    }).then(function(oldCandidate) {
      oldCandidate.destroy().then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  }
};
