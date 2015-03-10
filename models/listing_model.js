'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var Listing = sequelize.define("listing", {   	
        business_name: { type: Sequelize.STRING },
    	business_address: { type: Sequelize.STRING },
        business_city: { type: Sequelize.STRING },
        business_state: { type: Sequelize.STRING },
        business_zip: { type: Sequelize.INTEGER },
        job_title: { type: Sequelize.STRING },
        employment_type: { type: Sequelize.STRING },
        job_description: { type: Sequelize.TEXT },
        business_culture: { type: Sequelize.STRING },
        job_compensation: { type: Sequelize.INTEGER },
        job_benifits: { type: Sequelize.STRING },
        business_picture: { type: Sequelize.BLOB },
        job_hiring_manager: { type: Sequelize.STRING },
    });
    return {
        Listing: Listing
    };
};