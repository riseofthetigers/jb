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
        Notification.belongsTo(models.Topic);
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

/*
                                                        Table "public.notifications"
   Column   │           Type           │                         Modifiers                          │ Storage  │ Stats target │ Description
────────────┼──────────────────────────┼────────────────────────────────────────────────────────────┼──────────┼──────────────┼─────────────
 id         │ integer                  │ not null default nextval('notifications_id_seq'::regclass) │ plain    │              │
 user_id    │ integer                  │ not null                                                   │ plain    │              │
 type       │ integer                  │ not null                                                   │ plain    │              │
 data       │ character varying(1000)  │ not null                                                   │ extended │              │
 read       │ boolean                  │ not null default false                                     │ plain    │              │
 created_at │ timestamp with time zone │ not null                                                   │ plain    │              │
 updated_at │ timestamp with time zone │ not null                                                   │ plain    │              │
 topic_id   │ integer                  │                                                            │ plain    │              │
Indexes:
    "notifications_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "notifications_topic_id_fkey" FOREIGN KEY (topic_id) REFERENCES topics(id) ON UPDATE CASCADE ON DELETE SET NULL
    "notifications_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL


*/
