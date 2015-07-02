var React  = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthActions = require('../actions/auth-actions');
var AuthStore = require('../stores/auth-store');


function getAuth(cb) {
     AuthStore.isAuthenticated(cb);
}

var Navbar = React.createClass({

    getInitialState: function(){
        return {auth:false}
    },

    componentWillMount: function() {
        this._onChange();
        AuthStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        var self = this;
        getAuth( function(data) {
            self.setState(data);
        });
    },

    handleLogout: function() {
        AuthActions.logout()
    },

  render: function () {
    var LoginNav;

    if(this.state.auth){
        LoginNav = (
            <ul className="nav navbar-nav navbar-right">
              <li><a  href="#" onClick={this.handleLogout}>Logout</a></li>
            </ul>
            );
    } else {
        LoginNav = (

            <ul className="nav navbar-nav navbar-right">
              <li><Link to="login">Log in</Link></li>
              <li><Link to="signup">Sign up</Link></li>
            </ul>

            );
    }


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
            {LoginNav}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
