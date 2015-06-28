// React
var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.js');
var About = require('./components/About.js');
var Concat = require('./components/Concat.js');
var Home = require('./components/Home.js');
var Landing = require('./components/Landing.js');
var Login = require('./components/Login.js');
var Search = require('./components/Search');
var Signup = require('./components/Signup');

var routes = (
  <Route path="/" handler={App}>
  	<DefaultRoute handler={Landing} />
    <Route name="about" handler={About}/>
    <Route name="concat" handler={Concat}/>
    <Route name="home" handler={Home}/>
    <Route name="login" handler={Login}/>
    <Route name="search" handler={Search}/> 
    <Route name="signup" handler={Signup}/>       
  </Route>
);

module.exports = routes;
