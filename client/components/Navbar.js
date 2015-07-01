var React  = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthActions = require('../actions/auth-actions');

var Navbar = React.createClass({


  componentWillMount: function() {
    console.log('mount navbar');
  },

  render: function () {
    return (
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar">test</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="home">Jobletics</Link></li>
              <li><Link to="concat">Create a Listing</Link></li>
              <li><Link to="search">Search Jobs</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="login">Log in</Link></li>
              <li><Link to="signup">Sign up</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
