var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var OverlayMixin = ReactBootstrap.OverlayMixin;
var App = require('./App.js');

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
        <Modal title='Modal heading' onRequestHide={this.handleToggle}>
          <div className='modal-body'>
            This modal is controlled by our custom trigger component.
          </div>
          <div className='modal-footer'>
            <Button onClick={this.handleToggle}>Close</Button>
          </div>
        </Modal>
      );
    }
});

module.exports = LoginModal