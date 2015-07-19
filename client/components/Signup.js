const React = require('react');
const AuthActions = require('../actions/auth-actions');
const AuthStore = require('../stores/auth-store');
const Navigation = require('react-router').Navigation;

const NotificationsActions = require('../actions/notifications-actions');
const {Form} = require('./Form.js')

// Our custom component is managing whether the Modal is visible
const SignupModal = React.createClass({
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
      const self = this;
      const next = this.props.query.next || '/dashboard';
      const newState = this.loadState()

      //this.setState(newState)
      if(newState.isLoggedIn) {
        return this.transitionTo(next);
      } else {
        NotificationsActions.addNotification(
          <p>Something went wrong with signing up</p>
        , 'danger')
      }
  },

  fields: function() {
    return [{
      name: "First Name",
      prop: "firstName"
    }, {
      name: "Last Name",
      prop: "lastName"
    }, {
      name: "Email",
      prop: "email",
      type: "email"
    }, {
      name: "Password",
      prop: "password",
      type: "password",
    }, {
      name: "Type",
      prop: "type",
      type: "select",
      options: {
        E: "Employer",
        C: "Candidate"
      },
      default: "E"
    }]
  },

  handleSignup: function(fields) {
    AuthActions.signup(fields.type, fields.email, fields.password, fields.firstName, fields.lastName);
  },

  render: function () {
      const fields = this.fields()

      return (
        <div className="container">
          <h2>Sign up</h2>
          <a href="/auth/facebook" className="btn btn-facebook"><span className="fa fa-facebook" /> Sign In with Facebook</a>
          <Form onSubmit={this.handleSignup} fields={fields} go="Sign up!" />
        </div>
      );
  }
});

//    <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>


module.exports = SignupModal
