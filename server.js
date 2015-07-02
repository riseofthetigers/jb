// app dependencies
var morgan = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
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
app.use(methodOverride());

// Use cookie middleware
app.use(cookieParser());
// Enable session management by express
app.use(session({
  secret: 'changethis!',
  resave: false,
  saveUninitialized: false
}));

// Init the models
var db = require("./models");

db.sequelize
  //You can set `force` to `true` in development mode.
  .sync({
    force: true
    })
  //.sync()
  .then(function() {
    console.log('Express server listening on port 5000');
    app.listen(5000);
});


var auth_handler = require('./lib/auth/passport.js')(app, db.User);

// resources routes
// app.use('/', require('./routes/web'));
app.use('/api', auth_handler, require('./routes/api'));

// default route for website
app.use( function(request, response) {
  response.sendFile('./public/index.html', {root: __dirname});
});

