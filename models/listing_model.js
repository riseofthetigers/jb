'use strict';

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    business_name: {
      type: DataTypes.STRING
    },
    business_address: {
      type: DataTypes.STRING
    },
    business_city: {
      type: DataTypes.STRING
    },
    business_state: {
      type: DataTypes.STRING
    },
    business_zip: {
      type: DataTypes.INTEGER
    },
    job_title: {
      type: DataTypes.STRING
    },
    employment_type: {
      type: DataTypes.STRING
    },
    job_description: {
      type: DataTypes.TEXT
    },
    business_culture: {
      type: DataTypes.STRING
    },
    job_compensation: {
      type: DataTypes.INTEGER
    },
    job_benifits: {
      type: DataTypes.STRING
    },
    business_picture: {
      type: DataTypes.BLOB
    },
    job_hiring_manager: {
      type: DataTypes.STRING
    },

  }, {
    //  lowercase tableName in Posrgres, if you need.
    tableName: 'listings',
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
