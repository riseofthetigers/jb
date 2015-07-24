/**
 * users controller
 */

// Import models
var models = require('../models');
var Application = models.Application;
var Candidate = models.Candidate;
var Listing = models.Listing;
var User = models.User;

var Promise = require('bluebird')
var utils = require('./controllerUtils')
var send = utils.send, cry = utils.cry, requireLogin = utils.requireLogin;
var restError = utils.restError


// Expose the users controller.
module.exports = {
  create: function(req, res) {
    var body = req.body
    requireLogin(req).then(function(user) {
      if(user.type !== "C")
        restError("Only candidates can fill in applications", 403)
      if(!body.listingId || !body.candidate || !body.application)
        restError("Fill in all fields please", 400)

      return Application.findOne({where: {
        listing_id: body.listingId,
        user_id: user.id
      }})

    }).then(function(shouldNotExist) {
      if(shouldNotExist)
        restError("You already applied to this job", 409)

      delete body.candidate.id

      return Promise.all([
        Candidate.create(body.candidate),
        Listing.findOne({where: {id: req.body.listingId}}).then(function(listing) {
          return !listing ? restError("No listing found by that id") : listing
        }),
        req.user // Just so it looks good XD
      ])
    }).spread(function(candidate, listing, user) {
      return Application.create({
        availability: body.application.availability,
        application_status: "POSTED",

        candidate_id: candidate.id,
        listing_id: listing.id,
        user_id: user.id
      })
    }).then(function(application) {
      return {
        id: application.id,
        href: '/api/applications/' + application.id
      }
    }).then(send(res)).catch(cry(res))
  },


  getApplication: function(req, res) {
    requireLogin(req).then(function(user) {
      return Application.findOne({
        where: {id: req.params.id},
        include: [User, Candidate, Listing]
      })
    }).then(function(application) {
      if(application === null)
        restError("Application not found", 404)
      if(application.User.id !== req.user.id)
        restError("Access denied", 403)

      return application
    }).then(send(res)).catch(cry(res))
  },
};
