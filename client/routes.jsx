// React
var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.jsx');

var routes = (
  <Route name="app" path="/" handler={App}>
  </Route>
);

module.exports = routes;
