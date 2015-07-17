"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var basename  = path.basename(module.filename);
// Use env variable for our project.
var env       = process.env.NODE_ENV || "development";
// Read config from `config/config.js`;
// `node_modules/.bin/sequelize -c config/config.js cmd`
var config    = require(__dirname + '/../config/config.js')[env];

console.log("NODE_ENV:", env)
if(env === 'heroku') {
  console.log("Running using database url")
  var sequelize = new Sequelize(process.env.DATABASE_URL, config);
} else {
  console.log("Running using config")
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Store the models.
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
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

// Expose the db object.
module.exports = db;
