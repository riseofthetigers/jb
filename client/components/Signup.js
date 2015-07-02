var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var OverlayMixin = ReactBootstrap.OverlayMixin;
var AuthActions = require('../actions/auth-actions');
var AuthStore = require('../stores/auth-store');
var Navigation = require('react-router').Navigation;
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
      isModalOpen: false
    };
  },

  componentDidMount: function() {
    // this.handleToggle();
    AuthStore.addChangeListener(this._onChange);

  },

  _onChange : function(){
      var self = this;
      AuthStore.isAuthenticated( function(auth) {
          if (auth.auth){
              return self.transitionTo('/search');
          };
      });

      // should show message incorrect username password
  },


  render: function () {
      return (
        <div> test1 </div>
      );
    },

    // This is called by the `OverlayMixin` when this component
    // is mounted or updated and the return value is appended to the body.

      renderOverlay: function() {
          if (!this.state.isModalOpen) {
            return <span/>;
          }

          return (
            <Modal title='Login' onRequestHide={this.handleToggle}>
              <div className='modal-body'>
                <LoginForm />
              </div>
            </Modal>
          );
        }
    });


      const LoginForm = React.createClass({
          handleLogin: function() {
              var username = this.refs.username.getDOMNode().value;
              var password = this.refs.password.getDOMNode().value;
              var firstname = this.refs.password.getDOMNode().value;
              var lastname = this.refs.password.getDOMNode().value;
              var email = this.refs.password.getDOMNode().value;

              AuthActions.login(username, password);
          },

          render: function() {
            return (
                <div className="jumbotron text-center">
                 <h2><span className="fa fa-lock"></span> Register</h2>
                 <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
                 <form action="/api/users" method="post">
                 <div className="row">
                    <div className="col-md-6">
                      <label>First Name: </label>
                      <input name="firstname" ref="firstname"/><br/>
                    </div>
                    <div className="col-md-6">
                      <label>Last Name: </label>
                      <input name="lastname" ref="lastname"/><br/>
                    </div>
                    <div className="col-md-6">
                      <label>Email: </label>
                      <input type="email" name="email" ref="email"/><br/>
                    </div>
                    <div className="col-md-6">
                      <label> Password: </label>
                      <input type="password" name="password" ref="password"/><br/>
                    </div>
                    <div>
                    <input type="button" value="Submit" onClick={this.handleLogin}/>
                    </div>
                  </div>
                 </form>
             </div>
              )
          }
      });

module.exports = SignupModal