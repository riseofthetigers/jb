'use strict';

module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    employer_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
    employer_picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    },
  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'employers',
    classMethods: {
      associate: function(models) {
        Employer.belongsTo(models.User);
        Employer.hasMany(models.Business);
      }
    }
  });

  return Employer;
};
