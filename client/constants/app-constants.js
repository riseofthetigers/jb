var keyMirror = require('keymirror')

module.exports = keyMirror({
  LISTING_CREATE  : null,
  GET_LISTING	  	: null,
  GET_ALL_LISTINGS: null,
  LISTING_EDIT    : null,
  LISTING_DELETE  : null,

  LOGGEDIN       : null,
  LOGGEDOUT      : null,
  LOGIN          : null,
  LOGOUT         : null,
  LOGIN_FACEBOOK : null,
  AUTH_ERROR     : null,

  GET_PROFILE  : null,
  GET_CURRENT_PROFILE	: null,
  SAVE_PROFILE: null,

  // Notifications
  DISMISS_NOTIFICATION: null,
  ADD_NOTIFICATION: null,
});
