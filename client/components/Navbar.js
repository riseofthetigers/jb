var React  = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthActions = require('../actions/auth-actions');
var AuthStore = require('../stores/auth-store');
var Navigation = require('react-router').Navigation;


function getAuth(cb) {
     AuthStore.isAuthenticated(cb);
}

var Navbar = React.createClass({
  mixins: [Navigation],

    getInitialState: function(){
        return {auth:false}
    },

    componentDidMount: function() {
        this._onChange();
        AuthStore.addAuthChangeListener(this._onChange);
    },

    componentWillUnount: function() {
        this._onChange();
        AuthStore.removeAuthChangeListener(this._onChange);
    },

    _onChange: function() {
        var self = this;
        getAuth( function(data) {
            self.setState(data);
        });
    },

    handleLogout: function() {
        AuthActions.logout();
        this.transitionTo('/home');

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
              <li><img style={{width: 100+'px', height: 60+'px'}} src="/images/logo.jpg" alt="" /></li>
              <li><Link to="createlisting">Create a Listing</Link></li>
              <li><Link to="search">Search Jobs</Link></li>
            </ul>
            {LoginNav}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
