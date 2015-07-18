'use strict';

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    employment_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      }
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    requirements: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    job_compensation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      }
    },
    job_benefits: {
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
