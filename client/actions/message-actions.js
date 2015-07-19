var Actions = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var MessageActions = {

    getAllMessages: function() {
        AppDispatcher.dispatchAction({
            actionType: Actions.GET_ALL_MESSAGES
        });
    },

    getMessage: function (id) {
        AppDispatcher.dispatchAction({
            actionType: Actions.GET_MESSAGE,
            id: id
        });
    },

    createMessage: function(user, data) {
        AppDispatcher.dispatchAction({
            actionType : Actions.MESSAGE_CREATE,
            user       : user,
            data       : data
        });
    }

}


module.exports = MessageActions;
