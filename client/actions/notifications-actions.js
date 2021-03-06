var Actions = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var NotificationActions = {
    addNotification: function(message, type) {
        setTimeout(function() {
          AppDispatcher.dispatchAction({
            actionType: Actions.ADD_NOTIFICATION,
            message: message,
            type: type || 'success'
          });
        }, 1)
    },

    dismissNotification: function(index) {
        AppDispatcher.dispatchAction({
            actionType: Actions.DISMISS_NOTIFICATION,
            index: index
        });
    },

}


module.exports = NotificationActions;
