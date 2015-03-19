'use strict';

//var models = require('../models');
var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var candidate = sequelize.define("candidate", {
        name: { type: Sequelize.STRING, validate: { notNull: false } },
        phone_number: { type: Sequelize.STRING, validate: { notNull: false } },
        address: { type: Sequelize.STRING, validate: { notNull: false } },
        state: { type: Sequelize.STRING, validate: { notNull: false } },
        skills: { type: Sequelize.STRING, validate: { notNull: false } },
        candidate_picture: { type: Sequelize.BLOB, validate: { notNull: false } }
	}, {
		associate: function(db) {
            console.log(db);
			candidate.belongsTo(db.user);
	    }
	});

	return candidate;
};
