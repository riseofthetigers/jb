'use strict'

module.exports = function(sequelize, DataTypes) {
    var Business = sequelize.define("Business", {
    business_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    business_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    business_city: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    business_state: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    business_zip: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    business_description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    business_tagline: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    business_logo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },
    business_hiring_manager: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      }
    },

  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'business',
    classMethods: {
        associate: function(models) {
            Business.belongsTo(models.Employer);
            Business.hasMany(models.Listing);
        }
    }
  });
  return Business;
};

