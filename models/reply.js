/**
 * Reply Model
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
  var Reply = sequelize.define("Reply", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // raw content
    raw: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // cook raw content => cooked content
    cooked: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reply_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    user_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    deleted_at: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'replies',
    classMethods: {
      associate: function(models) {
        Reply.belongsTo(models.User);
        Reply.belongsTo(models.Topic);
      }
    }
  });

  return Reply;
};

/*

                                                         Table "public.replies"
    Column    │           Type           │                      Modifiers                       │ Storage  │ Stats target │ Description
──────────────┼──────────────────────────┼──────────────────────────────────────────────────────┼──────────┼──────────────┼─────────────
 id           │ integer                  │ not null default nextval('replies_id_seq'::regclass) │ plain    │              │
 user_id      │ integer                  │ not null                                             │ plain    │              │
 topic_id     │ integer                  │ not null                                             │ plain    │              │
 raw          │ text                     │ not null                                             │ extended │              │
 cooked       │ text                     │ not null                                             │ extended │              │
 reply_type   │ integer                  │ not null default 1                                   │ plain    │              │
 user_deleted │ boolean                  │ not null default false                               │ plain    │              │
 deleted_at   │ timestamp with time zone │                                                      │ plain    │              │
 created_at   │ timestamp with time zone │ not null                                             │ plain    │              │
 updated_at   │ timestamp with time zone │ not null                                             │ plain    │              │
Indexes:
    "replies_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "replies_topic_id_fkey" FOREIGN KEY (topic_id) REFERENCES topics(id) ON UPDATE CASCADE ON DELETE SET NULL
    "replies_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL

*/
