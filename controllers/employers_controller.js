/**
 * employers controller
 */

// Import models.
var models = require('../models');
// Import Employer Model.
var Employer = models.Employer;

// Expose the employers controller.
module.exports = {
  create: function(req, res) {
    var createEmployer = {
      name: req.body.name,
      phone_number: req.body.phone_number,
      address: req.body.address,
      state: req.body.state,
      employer_description: req.body.employer_description,
      employer_picture: req.body.employer_picture,
      user_id: req.body.user_id
    }

    Employer.create(createEmployer).success(function() {
      res.send(200);
      res.json(req.dataValues);
    });
  },

  get: function(req, res) {
    Employer.findAll().success(function(employers) {
      res.send(employers);
    });
  },

  update: function(req, res) {
    Employer.find({
      where: {
        name: req.params.id
      }
    }).then(function(oldEmployer) {
      oldEmployer.updateAttributes({
        name: req.body.name,
        phone_number: req.body.phone_number,
        address: req.body.address,
        business_state: req.body.business_state,
        skills: req.body.skills,
        candidate_picture: req.body.candidate_picture
      }).then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  },

  destroy: function(req, res) {
    Employer.find({
      where: {
        name: req.params.id
      }
    }).then(function(oldEmployer) {
      oldEmployer.destroy().then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  }

};
