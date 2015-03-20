// app dependencies
var morgan = require('morgan');
var bodyParser = require('body-parser');
var express = require("express");
var app = express();

//middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
// static resources
app.use(express.static("./public"));

// resources routes
//
// NOTE: If you like the `use` style.
// You can use of `get` `post` `put` `delete` instead of `user`.
//
// Example:
//
//	var usersController = require('./controllers/users_controller');
// 	app.get('/user', usersController.get)
//	app.post("/user", usersController.create);
//	app.put("/user/:id", usersController.update);
//	app.delete("/user/:id", usersController.destroy);
//
app.use("/user", require('./routes/user_route'));
app.use("/employer", require('./routes/employer_route'));
app.use("/listing", require('./routes/listing_route'));
app.use('/candidate', require('./routes/candidate_route'));
app.use("/business", require('./routes/business_route'));


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
