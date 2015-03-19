'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
	var User = sequelize.define("user", {
		username: { type: Sequelize.STRING, validate: { notNull: false } },
		password: { type: Sequelize.STRING, validate: { notNull: false } }
	}, {
    		associate: function(db){   			
				User.hasMany(db.candidate);
				User.hasMany(db.employer);
    	}
	});

	return User;
};