// app dependencies
var express = require("express");
var Sequelize = require("sequelize");
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var models = require("./models"); 

//sequalize initialization
var sequelize = new Sequelize("postgres://mjfvucmilnanhg:nOwA73r5O0GbFPtIP0mX16JEYD@ec2-23-21-183-70.compute-1.amazonaws.com:5432/d3hgqfoask25fo" || "postgres://rahul:jobletics@localhost:5432/jobletics");

//routers
var employerRoute = require("./routes/employer_route")(sequelize);
var candidateRoute = require("./routes/candidate_route")(sequelize);
var listingRoute = require("./routes/listing_route")(sequelize);

//middleware
app.use(bodyParser());
app.use(morgan('dev'));

models.sequelize.sync().success(function (err) {
	console.log('Express server listening on port 5000');
    app.listen(5000);
});

//routes
app.get("/employer", employerRoute.get);
app.post("/employer", employerRoute.create);
app.put("/employer/:id", employerRoute.update);
app.delete("/employer/:id", employerRoute.destroy);
app.get("/candidate", candidateRoute.get);
app.post("/candidate", candidateRoute.create);
app.put("/candidate/:id", candidateRoute.update);
app.delete("/employer/:id", candidateRoute.destroy);
app.get("/listing", listingRoute.get);
app.post("/listing", listingRoute.create);
app.put("/listing/:id", listingRoute.update);
app.delete("/listing/:id", listingRoute.destroy);

