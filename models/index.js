"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
// Use env variable for our project.
var env = process.env.NODE_ENV || "development";
// Read config from `config/config.js`;
var config = require(__dirname + '/../config/config.js')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);

// Store the models.
var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var Model = sequelize["import"](path.join(__dirname, file));
    db[Model.name] = Model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

// Adds `sequelize` instance to db object.
db.sequelize = sequelize;

// Adds `Sequelize` class to db object.
db.Sequelize = Sequelize;

// Returns the db object.
module.exports = db;
