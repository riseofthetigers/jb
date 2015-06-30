// Web Routes.

var Router = require('express').Router;

//Import  Controllers.
var businessController = require('../controllers/business')
var candidatesController = require('../controllers/candidates')
var employersController = require('../controllers/employers')
var listingsController = require('../controllers/listings')
var usersController = require('../controllers/users')
var repliesController = require('../controllers/replies')
var topicsController = require('../controllers/topics')

// Web Router.
var webRouter = Router();
webRouter.get('/candidate/:id', usersController.getUser);

// Expose the Web routes.
module.exports = webRouter;
