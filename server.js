// app dependencies
var express = require("express");
var Sequelize = require("sequelize");
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var models = require("./models"); 

//sequalize initialization
var sequelize = new Sequelize("postgres://rahul:jobletics@localhost:5432/jobletics");

//routers
var employerRoute = require("./routes/employer_route")(sequelize);
var candidateRoute = require("./routes/candidate_route")(sequelize);
var listingRoute = require("./routes/listing_route")(sequelize);
var userRoute = require("./routes/user_route")(sequelize);


//middleware
app.use(bodyParser());
app.use(morgan('dev'));

models.sequelize.sync().success(function (err) {
	console.log('Express server listening on port 5000');
    app.listen(5000);
});

//routes
app.get("/user", userRoute.get);
app.post("/user", userRoute.create);
app.put("/user/:id", userRoute.update);
app.delete("/user/:id", userRoute.destroy);
app.get("/employer", employerRoute.get);
app.post("/employer", employerRoute.create);
app.put("/employer/:id", employerRoute.update);
app.delete("/employer/:id", employerRoute.destroy);
app.get("/candidate", candidateRoute.get);
app.post("/candidate", candidateRoute.create);
app.put("/candidate/:id", candidateRoute.update);
app.delete("/candidate/:id", candidateRoute.destroy);
app.get("/listing", listingRoute.get);
app.post("/listing", listingRoute.create);
app.put("/listing/:id", listingRoute.update);
app.delete("/listing/:id", listingRoute.destroy);

