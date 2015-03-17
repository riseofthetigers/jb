'use strict';
//var models = require('../models');
var Sequelize = require('sequelize');

module.exports = function (sequelize) {
	var User = sequelize.define("user", {
		username: { type: Sequelize.STRING, validate: {	notNull: true } },
		password: { type: Sequelize.STRING, validate: { notNull: true } },
	    // classMethods:
	    // {
	    //   	associate: 
	    //   		{ User.hasMany(models.Candidate) },
	    //  		{ User.hasMany(models.Employer) }	     		
	    // }
	});
	
	return {
		User: User
	};
};