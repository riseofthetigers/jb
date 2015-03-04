// app dependencies
var express = require("express");
var Sequelize = require("sequelize");
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var models = require("./models"); 

//sequalize initialization
var sequelize = new Sequelize("postgres://rahul:jobletics@localhost:5432/jobletics");
var employerRoute = require("./routes/employer_route")(sequelize);

//middleware
app.use(bodyParser());
app.use(morgan('dev'));

models.sequelize.sync().success(function (err) {
	console.log('Express server listening on port 5000');
    app.get("/employer", employerRoute.get);
    app.post("/employer", employerRoute.create);
    app.put("/employer/:id", employerRoute.update);
    app.listen(5000);
});





