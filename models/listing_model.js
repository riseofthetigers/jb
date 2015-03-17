'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var Listing = sequelize.define("listing", {   	
        business_name: { type: Sequelize.STRING, validate: { notNull: true } },
    	business_address: { type: Sequelize.STRING, validate: { notNull: true } },
        business_city: { type: Sequelize.STRING, validate: { notNull: true } },
        business_state: { type: Sequelize.STRING, validate: { notNull: true } },
        business_zip: { type: Sequelize.INTEGER, validate: { notNull: true } },
        job_title: { type: Sequelize.STRING, validate: { notNull: true } },
        employment_type: { type: Sequelize.STRING, validate: { notNull: true } },
        job_description: { type: Sequelize.TEXT, validate: { notNull: true } },
        business_culture: { type: Sequelize.STRING, validate: { notNull: true } },
        job_compensation: { type: Sequelize.INTEGER, validate: { notNull: true } },
        job_benifits: { type: Sequelize.STRING, validate: { notNull: true } },
        business_picture: { type: Sequelize.BLOB, validate: { notNull: true } },
        job_hiring_manager: { type: Sequelize.STRING, validate: { notNull: true } },
    });
    return {
        Listing: Listing
    };
};