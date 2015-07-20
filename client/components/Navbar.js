var React  = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthActions = require('../actions/auth-actions');
var AuthStore = require('../stores/auth-store');
var Navigation = require('react-router').Navigation;

var Navbar = React.createClass({
    mixins: [Navigation],

    loadState: function() {
      return {
        auth: AuthStore.isAuthenticated(),
        user: AuthStore.getSignedInUser()
      }
    },

    getInitialState: function() { return this.loadState() },
    _onChange: function() { this.setState(this.loadState()) },

    componentDidMount: function() {
        AuthStore.on('change', this._onChange);
    },
    componentWillUnount: function() {
        AuthStore.removeListener('change', this._onChange);
    },


    handleLogout: function() {
        AuthActions.logout();
    },

  render: function () {
    var LoginNav;
    var UserMenu = (<ul></ul>);

    if(this.state.auth){
        LoginNav = (
            <ul className="nav navbar-nav navbar-right">
              <li><a  href="#" onClick={this.handleLogout}>Logout</a></li>
            </ul>
            );
        if(this.state.user && this.state.user.type == 'C') {
            UserMenu = (
                <ul>
                    <li><Link to="profile_edit">Profile</Link></li>
                </ul>
            );
        }

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
              <li><img style={{width: 100+'px', height: 60+'px', padding: 4+'px'}} src="/images/logo2.jpg" alt="" /></li>
              <li><Link to="createlisting">Create a Listing</Link></li>
              <li><Link to="search">Search Jobs</Link></li>
            </ul>
            {UserMenu}
            {LoginNav}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
