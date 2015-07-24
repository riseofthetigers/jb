'use strict';

var Promise = require('bluebird')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    type: {
      type: DataTypes.ENUM('E', 'C'),
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false,
      validate: {
        isEmail: true,
        len: [5, 256]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    }
  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'users',
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Candidate);
        User.belongsTo(models.Employer);

      }
    }, instanceMethods: {
      verifyPassword: function(password) {
        // This may later be async
        return Promise.resolve(password === this.password)
      },

      safeValues: function() {
        return {
          id: this.id,
          displayName: this.displayName,
          type: this.type,
          email: this.email,
          candidate_id: this.candidate_id,
          employer_id: this.employer_id
        }
      }
    }
  });

  return User;
};
