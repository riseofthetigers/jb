"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration
      .addColumn('users', 'email', {
        type: DataTypes.STRING(256),
        allowNull: false,
        validate: {
          isEmail: true,
          len: [5, 256]
        }
      })
      .complete(done);
  },

  down: function(migration, DataTypes, done) {
    migration
      .removeColumn('users', 'email')
      .complete(done);
  }
};
