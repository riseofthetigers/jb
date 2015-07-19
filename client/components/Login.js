const React = require('react');
const AuthActions = require('../actions/auth-actions');
const AuthStore = require('../stores/auth-store');
const Navigation = require('react-router').Navigation;

const NotificationsActions = require('../actions/notifications-actions');
const {Form} = require('./Form.js')

// Our custom component is managing whether the Modal is visible
const LoginModal = React.createClass({
  mixins: [Navigation],

  loadState: function() {
    return {
      isLoggedIn: AuthStore.isAuthenticated()
    };
  },

  getInitialState: function() {
    return this.loadState()
  },

  componentDidMount: function() {
    AuthStore.on('change', this._update);
  },
  componentWillUnmount: function() {
    AuthStore.removeListener('change', this._update);
  },

  _update : function(){
      const next = this.props.query.next || '/dashboard';
      const newState = this.loadState()

      //this.setState(newState)
      if(newState.isLoggedIn) {
        return self.transitionTo(next);
      } else {
        NotificationsActions.addNotification(
          <p>Incorrect username or password</p>
        , 'danger')
      }
  },

  fields: function() {
    return [{
      name: "Email",
      prop: "email",
      type: "email"
    }, {
      name: "Password",
      prop: "password",
      type: "password"
    }]
  },

  handleLogin: function(fields) {
    AuthActions.login(fields.email, fields.password);
  },

  render: function () {
      const fields = this.fields()

      return (
        <div className="container">
          <h2>Login</h2>
          <a href="/auth/facebook" className="btn btn-facebook"><span className="fa fa-facebook" /> Sign In with Facebook</a>
          <Form onSubmit={this.handleLogin} fields={fields} go="Login!" />
        </div>
      );
    },
});

module.exports = LoginModal
