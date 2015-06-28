var React  = require('react');
var Navbar = require('./Navbar.js');
var Router = require('react-router');
var Landing = require('./Landing.js');

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div className="app-wrapper">
        <Navbar />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
