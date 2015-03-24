/**
 * listings controller
 */

// Import models.
var models = require('../models');
// Import Business Model.
var Business = models.Business;

// Expose the listings controller.
module.exports = {

  create: function(req, res) {
    var createListing = {
      business_name: req.body.business_name,
      business_address: req.body.business_address,
      business_city: req.body.business_city,
      business_state: req.body.business_state,
      business_zip: req.body.business_zip,
      business_description: req.body.business_description,
      business_picture: req.body.business_picture,
      business_hiring_manager: req.body.business_hiring_manager,
      employer_id: req.body.employer_id
    }

    Business.create(createListing).success(function() {
      res.send(200);
      res.json(req.dataValues);
    });
  },

  get: function(req, res) {
    Business.findAll().success(function(listings) {
      res.send(listings);
    });
  },

  update: function(req, res) {
    Business.find({
      where: {
        business_name: req.params.id
      }
    }).then(function(oldBusiness) {
      oldBusiness.updateAttributes({
      business_name: req.body.business_name,
      business_address: req.body.business_address,
      business_city: req.body.business_city,
      business_state: req.body.business_state,
      business_zip: req.body.business_zip,
      business_description: req.body.business_description,
      business_picture: req.body.business_picture,
      business_hiring_manager: req.body.business_hiring_manager
      }).then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  },

  destroy: function(req, res) {
    Business.find({
      where: {
        business_name: req.params.id
      }
    }).then(function(oldBusiness) {
      oldBusiness.destroy().then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  }
}