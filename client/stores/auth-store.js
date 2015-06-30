var AppDispatcher = require('../dispatchers/app-dispatcher');
var AuthActions = require('../actions/auth-actions');
var AuthConstants = require('../constants/auth-constants');
var assign = require('react/lib/Object.assign');
var EventEmiter = require('events').EventEmitter;


var CHANGE_EVENT = 'change_auth';

var _auth = false;

function _isAuthenticated (){
    // must check on server if it is authenticated
    return _auth;
}

function _login(username,password){
    // do the login on server
    AuthActions.loggedin();
}

function _loginWithFacebook() {
    // do the login with facebook
    AuthActions.loggedin();
}

function _logout() {
    // do the logout
    AuthActions.loggedout();
}

function _loggedIn(){
    _auth = true;
}

function _loggedOut(){
    _auth = false;
}

var AuthStore = assign(EventEmitter.prototype {
    emitchange: function(){
        this.emit(CHANGE_EVENT);
    }

    addChangeListener: function(callback){
        this.on(CHaNGE_EVENT, callback);
   }

    removeChangeListener: function(callback){
          this.removeListener(CHANGE_EVENT, callback);
      }


    isAuthenticated: function () {
        return _isAuthenticated();
    }


    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
            case AuthConstants.LOGIN;
                _login(payload.action.username, payload.action.password);
            case AuthConstants.LOGIN_FACEBOOK;
                _loginWithFacebook();
            case AuthConstants.LOGOUT;
                _logout();
            case AuthConstants.LOGGEDIN;
                _loggedin();
            case AuthConstants.LOGGEDOUT;
                _loggedout();
        }
        AuthStore.emitChange();

        return true;
     })
});

module.exports = AuthStore;
