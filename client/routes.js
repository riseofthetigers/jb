// React
var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.js');
var About = require('./components/About.js');
var Concat = require('./components/Concat.js');
var Login = require('./components/Login.js');

var routes = (
  <Route path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="concat" handler={Concat}/>
    <Route name="login" handler={Login}/>
    <NotFoundRoute handler={NotFoundRoute}/>
  </Route>
);

module.exports = routes;
