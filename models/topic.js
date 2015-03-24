/**
 * Topic Model
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define("Topic", {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    reply_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    // topic type
    archetype: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    // subtype:
    //  - user_to_user
    //  - system_message
    //
    subtype: {
      type: DataTypes.STRING(255)
    },
    closed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    last_reply_user_id: {
      type: DataTypes.INTEGER
    },
    last_replied_at: {
      type: DataTypes.DATE
    },
    deleted_at: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'topics',
    classMethods: {
      associate: function(models) {
        Topic.belongsTo(models.User);
        Topic.hasMany(models.Reply);
      }
    }
  });

  return Topic;
};

/*

                                                            Table "public.topics"
       Column       │           Type           │                      Modifiers                      │ Storage  │ Stats target │ Description
────────────────────┼──────────────────────────┼─────────────────────────────────────────────────────┼──────────┼──────────────┼─────────────
 id                 │ integer                  │ not null default nextval('topics_id_seq'::regclass) │ plain    │              │
 title              │ character varying(255)   │ not null                                            │ extended │              │
 reply_count        │ integer                  │ not null default 0                                  │ plain    │              │
 archetype          │ character varying(255)   │ not null default ''::character varying              │ extended │              │
 subtype            │ character varying(255)   │                                                     │ extended │              │
 closed             │ boolean                  │ not null default false                              │ plain    │              │
 last_reply_user_id │ integer                  │                                                     │ plain    │              │
 last_replied_at    │ timestamp with time zone │                                                     │ plain    │              │
 deleted_at         │ timestamp with time zone │                                                     │ plain    │              │
 created_at         │ timestamp with time zone │ not null                                            │ plain    │              │
 updated_at         │ timestamp with time zone │ not null                                            │ plain    │              │
 user_id            │ integer                  │                                                     │ plain    │              │
Indexes:
    "topics_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "topics_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL
Referenced by:
    TABLE "notifications" CONSTRAINT "notifications_topic_id_fkey" FOREIGN KEY (topic_id) REFERENCES topics(id) ON UPDATE CASCADE ON DELETE SET NULL
    TABLE "replies" CONSTRAINT "replies_topic_id_fkey" FOREIGN KEY (topic_id) REFERENCES topics(id) ON UPDATE CASCADE ON DELETE SET NULL

*/
