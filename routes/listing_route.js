'use strict';

module.exports = function (sequelize) {
	var model = require('../models/listing_model');
	var Listing = model.Listing;

	return {
		create: function (req, res) {
			var createListing = {
				business_name: req.body.business_name,
				business_address: req.body.address,
				business_city: req.body.business_city,
				business_state: req.body.business_state,
				business_zip: req.body.business_zip,
				job_title: req.body.job_title,
				employment_type: req.body.employment_type,
				job_description: req.body.job_description,
				business_culture: req.body.business_culture,
				job_compensation: req.body.job_compensation,
				job_benifits: req.body.job_benifits,
				business_picture: req.body.business_picture,
				job_hiring_manager: req.body.job_hiring_manager
			}

			Listing.create(createListing).success(function () {
				res.send(200);
				res.json(req.dataValues);
			});		    
		},

		get: function (req, res) {
			Listing.findAll().success(function (listings) {
			 	res.send(listings);
			});
		},

		update: function (req, res) {
            Listing.find({ where: {business_name: req.params.id} }).then(function(oldListing){   
                oldCandidate.updateAttributes({
                    username: req.body.username,
                    password: req.body.password
                }).then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });            
        },

        destroy: function (req, res) {
        	Listing.find({ where: {business_name: req.params.id} }).then(function(oldListing){   
                oldListing.destroy().then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });     
        }
	}	
};