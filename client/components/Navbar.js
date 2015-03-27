var React  = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="concat">Concat</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="login">Log in</Link></li>
              <li><a href="#signup">Sign up</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
