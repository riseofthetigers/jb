var React  = require('react');
var Navbar = require('./Navbar');
var Footer = require('./Footer');
var Router = require('react-router');

var Notifications = require('./Notifications');

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div className="app-wrapper">
        <Notifications />
        <Navbar />
        		<RouteHandler />
        <Footer />
      </div>
    );
  }
});

module.exports = App;
