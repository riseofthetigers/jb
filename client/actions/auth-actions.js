const Actions = require('../constants/app-constants');
const AppDispatcher = require('../dispatchers/app-dispatcher');
const axios = require('axios')

const AuthActions = {

    login: function(username, password) {
      axios.post('/api/login', {
          email: username,
          password: password
      }).then(function({data}) {
          if(!data.auth) {
            // TODO: Separate action for bad login?
          }
          AppDispatcher.handleAuthAction({
              actionType: Actions.LOGIN,
              auth: data.auth,
              type: data.type,
              name: data.displayName
          });
      });
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
        });
    },

    signup: function(type, username, password, firstname, lastname, email) {
        console.log('I should signup with ', username, password);
        // do the login on server
        axios.post('/api/signup', {
            type      : type,
            username  : username,
            password  : password,
            firstname : firstname,
            lastname  : lastname,
            email     : email
        }).then(function({data}) {
            console.log('SIGNUP RESPONSE:', data)
            // Don't see why this should trigger another event than LOGIN
            AppDispatcher.handleAuthAction({
                actionType: Actions.LOGIN,
                auth: data.auth,
                type: data.type,
                name: data.displayName
            });
        });
    }

}


module.exports = AuthActions;
