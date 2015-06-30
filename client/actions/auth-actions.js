var AuthConstants = require('../constants/auth-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppAction = {

    login: function(username, password) {
        AppDispatcher.handleauthAction({
            actionType: AuthConstants.LOGIN,
            username: username,
            password: password
        });
    }

    loginWithFacebook: function() {
        AppDispatcher.handleauthAction({
            actionType: AuthConstants.LOGIN_FACEBOOK
        });
    }


    logout: function() {
        AppDispatcher.handleAuthAction({
            actionType: AuthConstants.LOGOUT
        });
    }

}


module.exports = AuthActions;
