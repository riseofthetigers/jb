'use strict';

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    job_type: {
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
    job_zip: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    job_region: {
      type: DataTypes.STRING,
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
    },
    job_location: {
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
        Listing.hasMany(models.Application);

      }
    }
  });
  return Listing;
};
