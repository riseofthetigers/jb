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

    login(email, password) {
      return axios.post('/api/login', {
        email: email,
        password: password
      }).then(result => ({
        actionType: Actions.LOGIN,
        type: result.data.type,
        name: result.data.displayName
      })).catch(err => ({
        actionType: Actions.AUTH_ERROR,
        error: err
      }))
    },

    loginWithFacebook() {
      return {
        actionType: Actions.LOGIN_FACEBOOK
      }
    },


    logout() {
      return axios.get('/api/logout').then(() => ({
        actionType: Actions.LOGOUT
      }))
    },

    signup: function(type, email, password, firstname, lastname) {
        // do the signup on server
        return axios.post('/api/signup', {
          type      : type,
          username  : email, // Just send it as username, for sure
          password  : password,
          firstname : firstname,
          lastname  : lastname,
          email     : email
        }).then(result => ({
          actionType: Actions.LOGIN,
          auth: result.data.auth,
          type: result.data.type,
          name: result.data.displayName
        })).catch((err) => ({
          actionType: Actions.AUTH_ERROR,
          error: err
        }))
    }

}


module.exports = AuthActions;
