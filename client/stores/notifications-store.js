var Dispatcher = require('../dispatchers/app-dispatcher');
var Actions = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

// Notifications
var _notifications = [];
var _index = 1;

var TIMEOUT = 5 * 1000; // Default timeout before notification dissapears

var NotificationsStore = assign({}, EventEmitter.prototype, {
    getNotifications: function () {
        return _notifications
    },

    dispatcherIndex: Dispatcher.register(function(payload) {
        var action = payload.action;
        switch(action.actionType){
          case Actions.ADD_NOTIFICATION:
              action.index = _index
              _index = _index + 1
              _notifications.push(action)
              NotificationsStore.emit('change')

              setTimeout(function() {
                Dispatcher.dispatchAction({
                    actionType: Actions.DISMISS_NOTIFICATION,
                    index: action.index
                });
              }, TIMEOUT)
              break;
          case Actions.DISMISS_NOTIFICATION:
              _notifications = _notifications.filter(function(x) {
                return x.index !== action.index
              })
              NotificationsStore.emit('change')
              break;
        }
        return true;
     })
});

module.exports = NotificationsStore;
