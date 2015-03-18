'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var employer = sequelize.define("employer", {
        name: { type: Sequelize.STRING, validate: { notNull: true } },
        phone_number: { type: Sequelize.STRING, validate: { notNull: true } },
        address: { type: Sequelize.STRING, validate: { notNull: true } },
        state: { type: Sequelize.STRING, validate: { notNull: true } },
        employer_description: { type: Sequelize.STRING, validate: { notNull: true} },
        employer_picture: { type: Sequelize.STRING, validate: { notNull: true } },
    }, {
    		associate: function(db){
				employer.belongsTo(db.user);
    		}
	});

    return employer;
};
