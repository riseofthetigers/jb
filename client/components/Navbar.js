var React  = require('react');
var Router = require('react-router');
var Dispatcher = require('../dispatchers/app-dispatcher')
var Link = Router.Link;
var AuthActions = require('../actions/auth-actions');
var AuthStore = require('../stores/auth-store');
var Navigation = require('react-router').Navigation;

var Navbar = React.createClass({
    mixins: [Navigation],

    loadState: function() {
      return {
        isLoggedIn: AuthStore.isAuthenticated(),
        user: AuthStore.getUser()
      }
    },

    getInitialState: function() { return this.loadState() },
    _onChange: function() { this.setState(this.loadState()) },

    componentDidMount: function() { AuthStore.on('change', this._onChange); },
    componentWillUnount: function() { AuthStore.removeListener('change', this._onChange); },

    handleLogout: function() {
        Dispatcher.callAction(AuthActions.logout);
    },

  render: function () {
    const {isLoggedIn, user} = this.state

    const rightButtons = isLoggedIn ? [
      <li key="logout"><a  href="#" onClick={this.handleLogout}>Logout</a></li>
    ] : [
      <li key="login"><Link to="login">Log in</Link></li>
    , <li key="signup"><Link to="signup">Sign up</Link></li>
    ];

    const leftButtons = isLoggedIn ? [
      <li key="mylistings"><Link to="mylistings">My Listings</Link></li>,
      <li key="mailbox"><Link to="mailbox">Messages</Link></li>
    ] : [
      <li><Link to="createlisting">Create a Listing</Link></li>,
      <li><Link to="search">Search Jobs</Link></li>
    ];

    if(this.state.user && this.state.user.type == 'C')
      rightButtons.unshift(<li key="profile"><Link to="profile_edit">Profile</Link></li>)

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
            </ul>
            <ul className="nav navbar-nav navbar-left">{leftButtons}</ul>
            <ul className="nav navbar-nav navbar-right">{rightButtons}</ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
