'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
	var Candidate = sequelize.define("candidate", {
		username: { type: Sequelize.STRING, validate: {	notNull: true } },
		password: { type: Sequelize.STRING, validate: { notNull: true } }
	});
	return {
		Candidate: Candidate
	}
}