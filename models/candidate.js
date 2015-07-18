'use strict';

module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define("Candidate", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    candidate_picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    headline: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    social: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    authorized: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    criminal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    criminal_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    }

  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'candidates',
    classMethods: {
      associate: function(models) {
        Candidate.belongsTo(models.User);
      }
    }
  });

  return Candidate;
};
