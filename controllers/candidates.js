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
    if(!req.user || req.user.type != 'C'){
        return res.json({error: true, message:'Access denied'});
    }
    var createCandidate = {
      name: req.body.name,
      phone_number: req.body.phone_number,
      address: req.body.address,
      state: '',
      skills: req.body.skills,
      candidate_picture: req.body.candidate_picture,
      user_id: req.body.user_id,
      description         :req.body.description         ,
      headline            :req.body.headline            ,
      education           :JSON.stringify(req.body.education)           ,
      experience          :JSON.stringify(req.body.experience)          ,
      title               :req.body.title               ,
      birthday            :req.body.birthday            ,
      email               :req.body.email               ,
      social              :JSON.stringify(req.body.social)              ,
      authorized          :req.body.authorized          ,
      criminal            :req.body.criminal            ,
      criminal_description :req.body.criminal_descripton
    }

    Candidate.findOrCreate({where: {id:req.user.id}, defaults:createCandidate}).spread(function(user, created) {
        if(created){
            return res.json(createCandidate);
        }

        user.updateAttributes(createCandidate).then( function (){
              res.send(200);
              res.json(createCandidate);
        });

    });
  },

  get: function(req, res) {
    Candidate.findAll().success(function(candidates) {
      res.send(candidates);
    });
  },

  getById: function(req, res) {
    Candidate.findById(req.params.id).success(function(candidates) {
      res.send(candidates);
    });
  },

  getCurrent: function(req, res) {
    Candidate.findOne({where:{'user_id':req.user.id}}).success(function(candidates) {
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
