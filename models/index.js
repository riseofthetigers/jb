"use strict";

var fs        = require("fs");
var path      = require("path");

module.exports = function (sequelize) {
  var db       = {};

  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
      var Model = sequelize["import"](path.join(__dirname, file));
      db[Model.name] = Model;
    });

  //console.log(db);
  // db = {
  //   user: User,
  //   candidate: Candiddate,
  // }

  Object.keys(db).forEach(function(modelName) {
    console.log(modelName, "associate" in db[modelName]);
    if ("associate" in db[modelName].options) {
      db[modelName].options.associate(db);
    }
  });
};
