var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var OverlayMixin = ReactBootstrap.OverlayMixin;

// Our custom component is managing whether the Modal is visible
const LoginModal = React.createClass({
  mixins: [OverlayMixin],

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
    this.handleToggle();
  },

  render: function () {
      return (
        <div> test </div>
      );
    },

    // This is called by the `OverlayMixin` when this component
    // is mounted or updated and the return value is appended to the body.
    renderOverlay() {
      if (!this.state.isModalOpen) {
        return <span/>;
      }

      return (
        <Modal title='Login' onRequestHide={this.handleToggle}>
          <div className='modal-body'>
              <div className="jumbotron text-center">
                 <h3>Login</h3>
                 <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
                 <form action="/api/users" method="get">
                  <div>
                  <label>Username: </label>
                  <input type="email" name="username"/><br/>
                  </div>
                  <div>
                  <label>Password: </label>
                  <input type="password" name="password"/>
                  </div>
                  <div>
                  <input type="submit" value="Submit"/>
                  </div>
                 </form>
             </div>
          </div>
        </Modal>
      );
    }
});

module.exports = LoginModal