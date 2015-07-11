var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var OverlayMixin = ReactBootstrap.OverlayMixin;
var AuthActions = require('../actions/auth-actions');
var AuthStore = require('../stores/auth-store');
var Navigation = require('react-router').Navigation;


// Our custom component is managing whether the Modal is visible
const LoginModal = React.createClass({
  mixins: [OverlayMixin, Navigation],

  handleToggle: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  },

  getInitialState: function() {
    return {
      isModalOpen: true,
      message: ''
    };
  },

  componentDidMount: function() {
    AuthStore.addAuthChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AuthStore.removeAuthChangeListener(this._onChange);
  },


    _onChange : function(){
        var self = this;

        var next = this.props.query.next;

        AuthStore.isAuthenticated( function(auth) {
            if (auth.auth){
               if(!next){
                    next = '/dashboard';
               }
               return self.transitionTo(next);
            } else {
              self.setState({message:'Incorrect Username or Password'});
            }
        });

        // should show message incorrect username password
    },


  render: function () {
      return (
          <h2>Login</h2>
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
            <LoginForm message = {this.state.message} />
          </div>
        </Modal>
      );
    }
});


const LoginForm = React.createClass({

    handleLogin: function() {
        var username = this.refs.username.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;
        AuthActions.login(username, password);
    },

    render: function() {
      return (
          <div className="jumbotron text-center">
             <h3>{this.props.message}</h3>
             <a href="/auth/facebook" className="btn btn-facebook"><span className="fa fa-facebook"></span> Sign In with Facebook</a>
             <form action="/api/users" method="get">
              <div>
              <label for="login-username">Username</label>
              <input type="email" className="form-control" name="username" ref="username"/><br/>
              </div>
              <div>
              <label for="login-password">Password</label>
              <input type="password" className="form-control" name="password" ref="password"/>
              </div>
              <div className="col-md-12">
              <input type="button" value="Submit" className="btn btn-primary" onClick={this.handleLogin}/>
              </div>
             </form>
         </div>
        )
    }
});

module.exports = LoginModal
