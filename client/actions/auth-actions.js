const Actions = require('../constants/app-constants');
const AppDispatcher = require('../dispatchers/app-dispatcher');
const axios = require('axios')

const AuthActions = {

    // New kind of actions (call with Dispatcher.callAction)
    verifyLogin() {
      return axios.get('/api/auth').then(result => ({
        actionType: Actions.VERIFYLOGIN,
        type: result.data.type,
        name: result.data.displayName
      })).catch(err => ({
        actionType: Actions.AUTH_ERROR,
        error: err
      }))
    },

    login: function(email, password) {
      axios.post('/api/login', {
        email: email,
        password: password
      }).then(function({data}) {
        AppDispatcher.handleAuthAction({
            actionType: Actions.LOGIN,
            type: data.type,
            name: data.displayName
        });
      }).catch(function(err) {
        AppDispatcher.handleAuthAction({
            actionType: Actions.AUTH_ERROR,
        });
      })
    },

    loginWithFacebook: function() {
        AppDispatcher.handleAuthAction({
            actionType: Actions.LOGIN_FACEBOOK
        });
    },


    logout: function() {
        axios.get('/api/logout').then(function(req){
            AppDispatcher.handleAuthAction({
                actionType: Actions.LOGOUT
            });
        })
    },

    signup: function(type, email, password, firstname, lastname) {
        // do the signup on server
        axios.post('/api/signup', {
            type      : type,
            username  : email, // Just send it as username, for sure
            password  : password,
            firstname : firstname,
            lastname  : lastname,
            email     : email
        }).then(function({data}) {
            // Don't see why this should trigger another event than LOGIN
            AppDispatcher.handleAuthAction({
                actionType: Actions.LOGIN,
                auth: data.auth,
                type: data.type,
                name: data.displayName
            });
        }).catch(function(err) {
          AppDispatcher.handleAuthAction({
              actionType: Actions.AUTH_ERROR,
          });
        })
    }

}


module.exports = AuthActions;
