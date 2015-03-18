'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
	var User = sequelize.define("user", {
		username: { type: Sequelize.STRING, validate: {	notNull: true } },
		password: { type: Sequelize.STRING, validate: { notNull: true } }
	}, {
		classMethods: {
    		associate: function(db){
				User.hasMany(db.candidate, { foreignKey: 'candidate_id' });
				User.hasMany(db.employer, { foreignKey: 'book_id' });

    		}
	  	},
	});


	return User;
};