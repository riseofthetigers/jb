'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var Employer = sequelize.define("employer", {
        username: { type: Sequelize.STRING, validate: { notNull: true } },
        password: { type: Sequelize.STRING, validate: { notNull: true } }
    });
    return {
        Employer: Employer
    };
};
