const React  = require('react');
const Notifications = require('./Notifications');
const Navbar = require('./Navbar');
const Footer = require('./Footer');
const {RouteHandler} = require('react-router');


var App = React.createClass({
  onError: function(err) {
    console.log("An error ocurred...", err)
  },

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
