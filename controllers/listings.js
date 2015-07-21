/**
 * listings controller
 */

// Import models.
var models = require('../models');
// Import Listing Model.
var Listing = models.Listing;
var Business = models.Business;
var url = require('url');

// Expose the listings controller.
module.exports = {

  create: function(req, res) {
    console.log(req.body);
    var createListing = {
        job_category     :  req.body.job_category,
        job_description  :  req.body.job_description,
        job_region       :  req.body.job_region,
        job_location     :  req.body.job_location,
        job_title        :  req.body.job_title,
        job_type         :  req.body.job_type,
        job_zip          :  req.body.job_zip,
        job_compensation :  req.body.job_compensation,
        job_requirements :  req.body.job_requirements
    }

    Listing.create(createListing).then(function() {
      res.send(200);
      res.json(req.dataValues);
    });
  },

  getAll: function(req, res) {
    var query = url.parse(req.url, true).query

    var where = {}
    var nestedWhere = {} // Needs work
    Object.keys(query).forEach(function(key) {
      (key.indexOf('.') !== -1 ? nestedWhere : where)[key] = {$in: query[key].split(",")}
    })

    getKeyByString = function(obj, str) {
      var keys = str.split(".")
      return keys.reduce(function(o, key) {
        return !o ? undefined : o[key]
      }, obj)
    }

    Listing.findAll({include: [Business], where: where}).then(function(listings) {
      var filtered = listings.filter(function(listing) {
        for (var key in nestedWhere) {
          if(!nestedWhere.hasOwnProperty(key)) continue
          var value = getKeyByString(listing, key)
          var checks = nestedWhere[key]
          // ToLowerCase for now, to match boston with Boston
          if(checks.$in && checks.$in.indexOf(value.toLowerCase()) === -1) return false
        }
        return true
      })

      // NestedWhere has to be handled here
      res.send(filtered);
    });
  },

  getById: function(req, res) {
               console.log(req.params, Listing.findById);
    Listing.findOne({include:[Business], where:{id:req.params.id}}).then(function(listings) {
      res.send(listings);
    });
  },
  update: function(req, res) {
    Listing.find({
      where: {
        job_title: req.params.id
      }
    }).then(function(oldListing) {
      oldListing.updateAttributes({
      job_title: req.body.job_title,
      employment_type: req.body.employment_type,
      job_description: req.body.job_description,
      business_culture: req.body.business_culture,
      job_compensation: req.body.job_compensation,
      job_benifits: req.body.job_benifits
      }).then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  },

  destroy: function(req, res) {
    Listing.find({
      where: {
        business_name: req.params.id
      }
    }).then(function(oldListing) {
      oldListing.destroy().then(function() {
        res.send(200);
        res.json(req.dataValues);
      });
    });
  }
}
