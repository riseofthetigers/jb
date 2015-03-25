'use strict';

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    employment_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      }
    },
    business_culture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    job_compensation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      }
    },
    job_benifits: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'listings',
    classMethods: {
      associate: function(models) {
        Listing.belongsTo(models.Business);
      }
    }
  });
  return Listing;
};

/*
Table "public.listings"
       Column       │           Type           │                       Modifiers
────────────────────┼──────────────────────────┼───────────────────────────────────────────────────────
 id                 │ integer                  │ not null default nextval('listings_id_seq'::regclass)
 business_name      │ character varying(255)   │
 business_address   │ character varying(255)   │
 business_city      │ character varying(255)   │
 business_state     │ character varying(255)   │
 business_zip       │ integer                  │
 job_title          │ character varying(255)   │
 employment_type    │ character varying(255)   │
 job_description    │ text                     │
 business_culture   │ character varying(255)   │
 job_compensation   │ integer                  │
 job_benifits       │ character varying(255)   │
 business_picture   │ bytea                    │
 job_hiring_manager │ character varying(255)   │
 created_at         │ timestamp with time zone │ not null
 updated_at         │ timestamp with time zone │ not null
Indexes:
    "listings_pkey" PRIMARY KEY, btree (id)
*/
