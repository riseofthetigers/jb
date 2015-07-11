var React  = require('react');
var Navbar = require('./Navbar.js');
var Footer = require('./Footer');
var Router = require('react-router');

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div className="app-wrapper">
        <Navbar />
        		<RouteHandler />
        <Footer />
      </div>
    );
  }
});

module.exports = App;
