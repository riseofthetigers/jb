'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
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
      validate: {
      }
    }
  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'users',
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Candidate);
        User.hasMany(models.Employer);
        User.hasMany(models.Message);
        User.hasMany(models.Notification);
      }
    }
  });

  return User;
};

