var AppDispatcher = require('../dispatchers/app-dispatcher');
var AuthActions = require('../actions/auth-actions');
var AuthConstants = require('../constants/auth-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var axios = require('axios')

var CHANGE_EVENT = 'change_auth';

var _auth = false;

var _signedUp = null;

var _user = null;

function _getSignedUp() {
    return _signedUp;
}

function _isAuthenticated (cb){
    // must check on server if it is authenticated

    axios.get('/api/auth').then(function(data){
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
    axios.post('/api/login', {
        email: username,
        password: password
    }).then(function(data){
        _auth = data.auth;
        _user = {
            type: data.type,
            name: data.displayName
        };
        console.log('authentication response', _auth);
        AuthStore.emitAuthChange();
    });
}


function _signup(type, username, password, firstname, lastname, email){
    console.log('I should signup with ', username, password);
    // do the login on server
    axios.post('/api/signup', {
        type      : type,
        username  : username,
        password  : password,
        firstname : firstname,
        lastname  : lastname,
        email     : email
    }).then(function(data){
        _auth = data.auth;
        _user = {
            type: data.type,
            name: data.displayName
        };
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

    axios.get('/api/logout').then(function(req){
        _auth = false;
        _user = null;
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

    getSignedInUser: function() {
         return _user;
    },


    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
            case AuthConstants.SIGNUP:
                _signup(payload.action.type, payload.action.username, payload.action.password, payload.action.firstname, payload.action.lastname, payload.action.email);
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
