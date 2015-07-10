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
      isModalOpen: !this.state.isModalOpen
    });
  },

  getInitialState: function() {
    return {
      isModalOpen: true
    };
  },

  componentDidMount: function() {
    //this.handleToggle();
    AuthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    return {
      isModalOpen: false
    };
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
        <body style={{float: "right", textDecoration: "none"}}></body>
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
        AuthActions.login(username, password);
    },

    render: function() {
      return (
          <div className="jumbotron text-center">
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
