/**
 * Notification Model
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
  var Notification = sequelize.define("Notification", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // notification type
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // data is JSON string.
    data: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'notifications',
    classMethods: {
      associate: function(models) {
        Notification.belongsTo(models.User);
        Notification.belongsTo(models.Message);
      }
    },
    getterMethods: {
      types: function () {
        return ['replied', 'mentioned', 'private_message'];
      }
    }
  });

  return Notification;
};
