var Dispatcher = require('../dispatchers/app-dispatcher');
var AuthActions = require('../actions/auth-actions');
var Actions = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change_auth';

var _auth = false;
var _user = null;

var AuthStore = assign({}, EventEmitter.prototype, {
    isAuthenticated: function () {
        return _auth
    },

    getUser: function() {
         return _user
    },


    dispatcherIndex: Dispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
            case Actions.LOGIN:
                _auth = action.auth;
                _user = {
                    type: action.type,
                    name: action.displayName
                };
                AuthStore.emit('change')
                break;
            case Actions.LOGIN_FACEBOOK:
                // Set _auth and _user ?
                break;
            case Actions.LOGOUT:
                _auth = false
                _user = null
                AuthStore.emit('change')
                break;
        }

        return true;
     })
});

module.exports = AuthStore;
