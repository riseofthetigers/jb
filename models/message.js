/**
 * Message Model
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    // Message type
    subject: {
      type: DataTypes.STRING(255),
    },
    // subtype:
    //  - user_to_user
    //  - system_message
    //
    body: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ''
    },
  }, {
    tableName: 'messages',
    classMethods: {
      associate: function(models) {
        console.log(models)
        Message.belongsTo(models.User);
        Message.hasMany(models.Notification);
      }
    }
  });

  return Message;
};
