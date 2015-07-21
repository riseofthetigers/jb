'use strict';

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    job_title: { // Barista, Cashier, etc
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    employment_type: { // Full Time, Part Time, etc
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    job_description: { // Just a description filled by the employer
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      }
    },
    photo_url: { // Hmm
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    requirements: { // Also just a text made by employer
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    job_compensation: { // Salary?
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      }
    },
    job_benefits: { // Another text
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'listings',
    classMethods: {
      associate: function(models) {
        Listing.belongsTo(models.Business);
      }
    }
  });
  return Listing;
};
