'use strict';

module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
    name: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
    employer_description: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
    employer_picture: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'employers',
    classMethods: {
      associate: function(models) {
        Employer.belongsTo(models.User);
      }
    }
  });

  return Employer;
};


/*
Table "public.employers"
        Column        │           Type           │                       Modifiers
──────────────────────┼──────────────────────────┼────────────────────────────────────────────────────────
 id                   │ integer                  │ not null default nextval('employers_id_seq'::regclass)
 name                 │ character varying(255)   │
 phone_number         │ character varying(255)   │
 address              │ character varying(255)   │
 state                │ character varying(255)   │
 employer_description │ character varying(255)   │
 employer_picture     │ character varying(255)   │
 created_at           │ timestamp with time zone │ not null
 updated_at           │ timestamp with time zone │ not null
 user_id              │ integer                  │
Indexes:
    "employers_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "employers_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE SET NULL
*/
