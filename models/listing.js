'use strict';

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    job_title: { // Barista, Cashier, etc
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },

    job_post_date: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
      }
    },
    job_type: {
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
    job_compensation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    job_requirements: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    job_category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    }
  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'listings',
    classMethods: {
      associate: function(models) {
        Listing.belongsTo(models.Business);
        Listing.hasMany(models.Application);

      }
    }
  });
  return Listing;
};
