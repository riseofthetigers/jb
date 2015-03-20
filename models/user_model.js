'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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
      }
    }
  });

  return User;
};


/*
Table "public.users"
   Column   │           Type           │                     Modifiers
────────────┼──────────────────────────┼────────────────────────────────────────────────────
 id         │ integer                  │ not null default nextval('users_id_seq'::regclass)
 username   │ character varying(255)   │
 password   │ character varying(255)   │
 created_at │ timestamp with time zone │ not null
 updated_at │ timestamp with time zone │ not null
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "candidates" CONSTRAINT "candidates_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL
    TABLE "employers" CONSTRAINT "employers_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL
*/
