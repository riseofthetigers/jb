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
        User.hasMany(models.Topic);
        User.hasMany(models.Reply);
        User.hasMany(models.Notification);
      }
    }
  });

  return User;
};

/*

                                                        Table "public.users"
   Column   │           Type           │                     Modifiers                      │ Storage  │ Stats target │ Description
────────────┼──────────────────────────┼────────────────────────────────────────────────────┼──────────┼──────────────┼─────────────
 id         │ integer                  │ not null default nextval('users_id_seq'::regclass) │ plain    │              │
 username   │ character varying(255)   │ not null                                           │ extended │              │
 password   │ character varying(255)   │ not null                                           │ extended │              │
 created_at │ timestamp with time zone │ not null                                           │ plain    │              │
 updated_at │ timestamp with time zone │ not null                                           │ plain    │              │
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "candidates" CONSTRAINT "candidates_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL
    TABLE "employers" CONSTRAINT "employers_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL
    TABLE "notifications" CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL
    TABLE "replies" CONSTRAINT "replies_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL
    TABLE "topics" CONSTRAINT "topics_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL

*/
