const Actions = require('../constants/app-constants');
const AppDispatcher = require('../dispatchers/app-dispatcher');
const axios = require('axios')

const MessageActions = {

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

    createMessage: function(user_id, from, to, subject, body) {
        //create message on server
        axios.post('/api/message', {
            user_id   : user_id,
            from      : from,
            to        : to,
            subject   : subject,
            body      : body
        }).then(function({data}) {
        AppDispatcher.dispatchAction({
            actionType : Actions.MESSAGE_CREATE,
            id       : data.id,
            from     : data.from,
            to       : data.to,
            subject  : data.subject,
            body     : data.body,
            subject  : data
        });
    }).catch(function(err){
        AppDispatcher.dispatchAction({
            actionType: Actions.MESSAGE_ERROR,
        });
    })
    }

}


module.exports = MessageActions;
