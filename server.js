// app dependencies
var morgan = require('morgan');
var bodyParser = require('body-parser');
var express = require("express");
var isProduction = process.env.NODE_ENV === 'production';
var app = express();

//middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan(isProduction || 'dev'));
// static resources
app.use(express.static("./public"));

// resources routes
app.use('/', require('./routes/web'));
app.use('/api', require('./routes/api'));

// Init the models
var db = require("./models");

db.sequelize
  // You can set `force` to `true` in development mode.
  // .sync({
  //   force: true
  // })
  .sync()
  .then(function() {
    console.log('Express server listening on port 5000');
    app.listen(5000);
  });
