var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AuthActions = require('../actions/auth-actions');
var AuthStore = require('../stores/auth-store');
var Navigation = require('react-router').Navigation;
var OverlayMixin = ReactBootstrap.OverlayMixin;

// Our custom component is managing whether the Modal is visible
const SignupModal = React.createClass({
  mixins: [OverlayMixin, Navigation],

  handleToggle: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },

  getInitialState: function() {
    return {
      isModalOpen: true
    };
  },

  componentDidMount: function() {
     AuthStore.addAuthChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AuthStore.removeAuthChangeListener(this._onChange);
  },


  _onChange: function() {
       var signedUp = AuthStore.getSignedUp();
       console.log( signedUp );
       if(signedUp && signedUp.success) {
        this.transitionTo('/search');
       }

  },

  render: function () {
      return (
        <h2>Sign Up</h2>
      );
    },

    // This is called by the `OverlayMixin` when this component
    // is mounted or updated and the return value is appended to the body.
    renderOverlay() {
      if (!this.state.isModalOpen) {
        return <span/>;
      }

      return (
        <Modal title='Sign up' onRequestHide={this.handleToggle}>
          <div className='modal-body'>
              <div className="jumbotron text-center">
                 <a href="/auth/facebook" className="btn btn-facebook"><span className="fa fa-facebook"></span> Sign Up with Facebook</a>
                 <SignUpForm />
             </div>
          </div>
        </Modal>
      );
    }
});

//    <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>


const SignUpForm = React.createClass({
    handleSignup: function() {
        var firstName = this.refs.firstname.getDOMNode().value;
        var lastName = this.refs.lastname.getDOMNode().value;
        var username = this.refs.username.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;
        var type     = this.refs.type.getDOMNode().value;
        AuthActions.signup(type, username, password, firstName, lastName, username);
    },
    render: function () {
      return (

         <form action="/api/users" method="post">
         <div className="row">
            <div className="col-md-12">
            <label for="login-type">Sign in as </label>
              <select className="form-control" ref="type" name="type">
                <option value="E">Employer</option>
                <option value="C">Candidate</option>
              </select>
              <br/>
            </div>
            <div className="col-md-6">
            <label for="login-firstname">First Name</label>
              <input type="text" className="form-control" ref="firstname" name="firstname"/><br/>
            </div>
            <div className="col-md-6">
            <label for="login-username">Last Name</label>
              <input type="text" className="form-control" ref="lastname" name="lastname"/><br/>
            </div>
            <div className="col-md-6">
            <label for="login-username">Email</label>
              <input type="email" className="form-control" ref="username" name="email"/><br/>
            </div>
            <div className="col-md-6">
            <label for="login-username">Password</label>
              <input type="password" className="form-control" ref="password" name="password"/>
            </div>
            <div className="col-md-13">
            <input type="button" value="Submit" className="btn btn-primary" onClick={this.handleSignup}/>
            </div>
          </div>
         </form>
      );
    }


});

module.exports = SignupModal
