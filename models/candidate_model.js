'use strict';

//var models = require('../models');
var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var candidate = sequelize.define("candidate", {
        name: { type: Sequelize.STRING, validate: { notNull: true } },
        phone_number: { type: Sequelize.STRING, validate: { notNull: true } },
        address: { type: Sequelize.STRING, validate: { notNull: true } },
        state: { type: Sequelize.STRING, validate: { notNull: true } },
        skills: { type: Sequelize.STRING, validate: { notNull: true } },
        candidate_picture: { type: Sequelize.BLOB, validate: { notNull: true } },
	}, {
		classMethods: {
    		associate: function(db){
				candidate.belongsTo(db.user, { foreignKey: 'candidate_id' });
    		}
	  	},
	});

	return candidate;
};
