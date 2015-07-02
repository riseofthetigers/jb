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
     AuthStore.addChangeListener(this._onChange);
    //this.handleToggle();
  },


  _onChange: function() {
       var signedUp = AuthStore.getSignedUp();
       console.log( signedUp );
       if(signedUp && signedUp.success) {
        this.transitionTo('/login');
       }

  },

  render: function () {
      return (
        <div> test1 </div>
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
                 <h2><span className="fa fa-lock"></span> Register</h2>
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
        AuthActions.signup(username, password, firstName, lastName, username);
    },
    render: function () {
      return (

         <form action="/api/users" method="post">
         <div className="row">
            <div className="col-md-6">
              <label>First Name: </label>
              <input type="text" ref="firstname" name="firstname"/><br/>
            </div>
            <div className="col-md-6">
              <label>Last Name: </label>
              <input type="text" ref="lastname" name="lastname"/><br/>
            </div>
            <div className="col-md-6">
              <label>Email: </label>
              <input type="email" ref="username" name="email"/><br/>
            </div>
            <div className="col-md-6">
              <label> Password: </label>
              <input type="password" ref="password" name="password"/>
            </div>
            <div>
            <input type="button" value="Submit" onClick={this.handleSignup}/>
            </div>
          </div>
         </form>
      );
    }


});

module.exports = SignupModal
