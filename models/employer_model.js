'use strict';

//var models = require('../models');
var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var Employer = sequelize.define("employer", {
        name: { type: Sequelize.STRING, validate: { notNull: true } },
        phone_number: { type: Sequelize.STRING, validate: { notNull: true } },
        address: { type: Sequelize.STRING, validate: { notNull: true } },
        state: { type: Sequelize.STRING, validate: { notNull: true } },
        employer_description: { type: Sequelize.STRING, validate: { notNull: true} },
        employer_picture: { type: Sequelize.STRING, validate: { notNull: true } },
        // classMethods: 
        // {
        //     associate: 
        //         { Employer.belongsTo(models.User) },      
        // }
    });

    return {
        Employer: Employer
    };
};
