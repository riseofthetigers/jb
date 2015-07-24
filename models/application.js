'use strict';

module.exports = function(sequelize, DataTypes) {
  var Application = sequelize.define("Application", {
    application_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availability: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    //  lowercase tableName in Postgres, if you need.
    tableName: 'applications',
    classMethods: {
      associate: function(models) {
        Application.belongsTo(models.Listing);
        Application.belongsTo(models.Candidate);
        Application.belongsTo(models.User);
        // FIX: Why this?
        //Application.hasMany(models.Notification);
        //Application.hasMany(models.Message);
      }
    }
  });
  return Application;
};
