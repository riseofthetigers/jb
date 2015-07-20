'use strict';

module.exports = function(sequelize, DataTypes) {
  var Application = sequelize.define("Application", {
    application_status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    hiring_manager: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_tagline: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_availability: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_skills: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_autorized: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_criminal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_criminal_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_experience: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_education: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'applications',
    classMethods: {
      associate: function(models) {
        Application.belongsTo(models.Listing);
        Application.hasOne(models.Candidate);
        Application.hasMany(models.Notification);
        Application.hasMany(models.Message);
      }
    }
  });
  return Application;
};
