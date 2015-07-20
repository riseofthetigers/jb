const Dispatcher = require('../dispatchers/app-dispatcher');
const AuthActions = require('../actions/auth-actions');
const Actions = require('../constants/app-constants');
const assign = require('react/lib/Object.assign');
const EventEmitter = require('events').EventEmitter;

var _user = JSON.parse(localStorage.getItem('_user') || "null");
const _setUser = function(user) {
  _user = user || null
  if(_user !== null) {
    localStorage.setItem('_user', JSON.stringify(_user))
  } else {
    localStorage.removeItem('_user')
  }
  AuthStore.emit('change')
}

const AuthStore = assign({}, EventEmitter.prototype, {
    isAuthenticated: function () {
        return _user !== null
    },

    getUser: function() {
         return _user
    },

    getSignedInUser: function() {
      return this.getUser()
    },

    dispatcherIndex: Dispatcher.register(function(payload){
        const action = payload.action;
        switch(action.actionType) {
            case Actions.LOGIN:
                _setUser({
                    type: action.type,
                    name: action.name
                })
                break;
            case Actions.LOGIN_FACEBOOK:
                // Set _auth and _user ?
                break;
            case Actions.AUTH_ERROR:
            case Actions.LOGOUT:
                _setUser(null)
                break;
        }

        return true;
     })
});

module.exports = AuthStore;
