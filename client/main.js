var React  = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var routes = require('./routes.js');

/*
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
*/

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('jobletics'));
});
