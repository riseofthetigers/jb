// React
var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.js');
var CreateListing = require('./components/CreateListing.js');
var Home = require('./components/Home.js');
var Landing = require('./components/Landing.js');
var Login = require('./components/Login.js');
var Search = require('./components/Search');
var Signup = require('./components/Signup');

var Dashboard = require('./components/Dashboard');
var JobsListing = require('./components/JobsListing');
var ListingDetail = require('./components/ListingDetail')

var ContactUs = require('./components/ContactUs');
var About = require('./components/About');

var routes = (
  <Route path="/" handler={App}>
  	<DefaultRoute handler={Landing} />
    <Route name="createlisting" path='/createlisting' handler={CreateListing}/>
    <Route name="home" path='/home' handler={Home}/>
    <Route name="login" path='/login' handler={Login}/>
    <Route name="search" path='/search' handler={Search} />
    <Route name="search_page" path="/search/:page" handler={Search} />
    <Route name="signup" path='/signup' handler={Signup}/>

    <Route name='dashboard' path='/dashboard' handler={Dashboard}/>
    <Route name='jobslisting' path='/jobs' handler={JobsListing}/>
    <Route name="listing_details" path="/listing/detail/:id" handler={ListingDetail} />
    <Route name="contactus" path="/contactus" handler={ContactUs} />
    <Route name="about" path="/about" handler={About} />

  </Route>

);

module.exports = routes;
