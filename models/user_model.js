'use strict';

var Sequelize = require('sequelize');
var candidates = require('./candidate_model.js');
var employees = require('./employer_model.js');


module.exports = function (sequelize) {
	var user = sequelize.define("user", {
		username: { type: Sequelize.STRING, validate: {	notNull: true } },
		password: { type: Sequelize.STRING, validate: { notNull: true } }
	});

	user.hasMany(candidates);
	user.hasMany(employees);
	return {
		user: user
	};
};