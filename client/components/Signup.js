var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var OverlayMixin = ReactBootstrap.OverlayMixin;

// Our custom component is managing whether the Modal is visible
const SignupModal = React.createClass({
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
                 <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
                 <form action="/api/users" method="post">
                 <div className="row">
                    <div className="col-md-6">
                      <label>First Name: </label>
                      <input type="text" name="firstname"/><br/>
                    </div>
                    <div className="col-md-6">
                      <label>Last Name: </label>
                      <input type="text" name="lastname"/><br/>
                    </div>
                    <div className="col-md-6">
                      <label>Email: </label>
                      <input type="email" name="email"/><br/>
                    </div>
                    <div className="col-md-6">
                      <label> Password: </label>
                      <input type="password" name="password"/>
                    </div>
                    <div>
                    <input type="submit" value="Submit"/>
                    </div>
                  </div>
                 </form>
             </div>
          </div>
        </Modal>
      );
    }
});

module.exports = SignupModal