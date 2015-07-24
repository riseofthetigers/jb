'use strict';

module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define("Candidate", {
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false
    },
    headline: {
      type: DataTypes.STRING,
      allowNull: false
    },
    education: {
      type: DataTypes.JSON,
      allowNull: false
    },
    experience: {
      type: DataTypes.JSON,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    authorized: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    criminal: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    criminal_description: {
      type: DataTypes.STRING,
      allowNull: false
    },

    // Not sure
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    candidate_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    social: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'candidates',
    classMethods: {
      associate: function(models) {
        Candidate.hasOne(models.User);
      }
    }
  });

  return Candidate;
};
