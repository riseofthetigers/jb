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
      user_id: req.body.user_id,
      description         :req.body.description         ,
      headline            :req.body.headline            ,
      education           :req.body.education           ,
      experience          :req.body.experience          ,
      title               :req.body.title               ,
      birthday            :req.body.birthday            ,
      email               :req.body.email               ,
      social              :req.body.social              ,
      authorized          :req.body.authorized          ,
      criminal            :req.body.criminal            ,
      criminal_descripton :req.body.criminal_descripton
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
        candidate_picture: req.body.candidate_picture,
        description         :req.body.description         ,
        headline            :req.body.headline            ,
        education           :req.body.education           ,
        experience          :req.body.experience          ,
        title               :req.body.title               ,
        birthday            :req.body.birthday            ,
        email               :req.body.email               ,
        social              :req.body.social              ,
        authorized          :req.body.authorized          ,
        criminal            :req.body.criminal            ,
        criminal_descripton :req.body.criminal_descripton
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
