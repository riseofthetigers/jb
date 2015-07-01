var AuthConstants = require('../constants/auth-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AuthActions = {

    login: function(username, password) {
        AppDispatcher.handleAuthAction({
            actionType: AuthConstants.LOGIN,
            username: username,
            password: password
        });
    },

    loginWithFacebook: function() {
        AppDispatcher.handleAuthAction({
            actionType: AuthConstants.LOGIN_FACEBOOK
        });
    },


    logout: function() {
        AppDispatcher.handleAuthAction({
            actionType: AuthConstants.LOGOUT
        });
    }

}


module.exports = AuthActions;
