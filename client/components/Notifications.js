/*
Because Notifications are really a part of the app,
not some pluggable widget, I require stores here and
don't need to think about portablility like I had to
with the Modal.. pfew
*/

var React = require('react/addons')
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var NotificationsActions = require('../actions/notifications-actions');
var NotificationsStore = require('../stores/notifications-store')

 var Notifications = module.exports = React.createClass({
  displayName: 'Notifications',

  loadState: function() {
    return {
      notifications: NotificationsStore.getNotifications()
    };
  },

  getInitialState: function() { return this.loadState() },
  componentDidMount: function() {
    var self = this;
    NotificationsStore.on('change', function() {
      var newState = self.loadState()
      self.setState(newState)
    })
  },

  close: function(index) {
    return function() {
      NotificationsActions.dismissNotification(index)
    };
  },

  render: function() {
    var close = this.close;
    var notifications = this.state.notifications.map(function(x) {
        var type = x.type || 'success' // x.get('type', 'success');
        var index = x.index // x.get('index');
        return (
          <li key={index} className={"alert alert-dismissable alert-"+type}>
            <button type="button" className="close" onClick={close(index)}>×</button>
            { x.message /*x.get 'message'*/}
          </li>
        )
    });

    return (
      <ul className="notifications">
        <ReactCSSTransitionGroup transitionName="fadein" transitionAppear={true}>
          {notifications}
        </ReactCSSTransitionGroup>
      </ul>
    )
  }
});
