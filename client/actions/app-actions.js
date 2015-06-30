var AuthConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AuthAction = {


    login: function(username, password) {
        AppDispatcher.handleAuthAction({
            actionType: AuthConstants.LOGIN,
            username: username,
            password: password
        });
    }

    loginWithFacebook: function(username, password) {
        AppDispatcher.handleAuthAction({
            actionType: AuthConstants.LOGIN_FACEBOOK
        });
    }

    logout: function() {
        AppDispatcher.handleViewAction({
            actionType: AuthConstants.LOGOUT
        });
    }


    loggedin: function() {
        AppDispatcher.handleAuthAction({
            actionType: AuthConstants.LOGGEDIN
        });
    }

    loggedout: function() {
        AppDispatcher.handleAuthAction({
            actionType: AuthConstants.LOGGEDOUT
        });
    }

}


module.exports = AuthActions;
