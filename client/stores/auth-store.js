var AppDispatcher = require('../dispatchers/app-dispatcher');
var AuthActions = require('../actions/auth-actions');
var AuthConstants = require('../constants/auth-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;


var CHANGE_EVENT = 'change_auth';

var _auth = false;

var _signedUp = null;

function _getSignedUp() {
    return _signedUp;
}

function _isAuthenticated (cb){
    // must check on server if it is authenticated

    $.get('/api/auth', function(data){
        var auth= data.auth;
        if( auth != _auth){
            //AuthStore.emitAuthChange();
        }
        _auth = auth;
        cb({auth:auth});

    });
}

function _login(username,password, cb){
    console.log('I should login with ', username, password);
    // do the login on server
    $.post('/api/login', {
        email: username,
        password: password
    }, function(data){
        _auth = data.auth;
        console.log('authentication response', _auth);
        AuthStore.emitAuthChange();
    });
}


function _signup(username, password, firstname, lastname, email){
    console.log('I should signup with ', username, password);
    // do the login on server
    $.post('/api/signup', {
        username  : username,
        password  : password,
        firstname : firstname,
        lastname  : lastname,
        email     : email
    }, function(data){
        _auth = false;
        _signedUp = data;
        console.log('authentication response signup', _auth);
        AuthStore.emitAuthChange();
    });
}

function _loginWithFacebook() {
    // do the login with facebook
}

function _logout() {
    console.log('logging out');

    $.get('/api/logout', function(req){
        _auth = false;
        AuthStore.emitAuthChange();
    });
}

var AuthStore = assign(EventEmitter.prototype, {
    emitAuthChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addAuthChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
   },

    removeAuthChangeListener: function(callback){
          this.removeListener(CHANGE_EVENT, callback);
      },


    isAuthenticated: function (cb) {
        return _isAuthenticated(cb);
    },


    getSignedUp: function(){
        return _getSignedUp();
    },


    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
            case AuthConstants.SIGNUP:
                _signup(payload.action.username, payload.action.password, payload.action.firstname, payload.action.lastname, payload.action.email);
                break;
            case AuthConstants.LOGIN:
                _login(payload.action.username, payload.action.password);
                break;
            case AuthConstants.LOGIN_FACEBOOK:
                _loginWithFacebook();
                break;
            case AuthConstants.LOGOUT:
                _logout();
                break;
        }

        return true;
     })
});

module.exports = AuthStore;
