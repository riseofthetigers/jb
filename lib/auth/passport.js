'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(app, User) {

  app.use(passport.initialize());
  // Enable sessions
  app.use(passport.session());

  passport.use(new FacebookStrategy({
      clientID: 706731189472955,
      clientSecret: "60c38b2f6c9737f6d441c343395f3ec2",
      callbackURL: "http://localhost:5000/auth/facebook/callback"
    },
    function(accesstoken, tokenSecret, profile, done) {
      // Could be an existing user or a new user
      // profile.username is used as the username
      User.findOrCreate({
        where: {
          username: profile.username,
          displayName: profile.displayName
        }
      }).spread(function(user) {
        return done(null, user);
      });
    }));

  // This just stores the username is an encrypted browser cookie
  passport.serializeUser(function(user, done) {
    done(null, user.username);
  });

  // This fetches the user by username retrieved from the
  // cookie that was set during serializeUser
  passport.deserializeUser(function(uname, done) {
    User.find({
      where: {
        username: uname
      }
    }).then(function(user) {
      if (!user) return done(new Error('Invalid user'));
      return done(null, user);
    });
  });

  // Redirect the user to facebook for authentication. When complete, Facebook
  // will redirect the user back to the application at /auth/facebook/callback
  app.get('/auth/facebook', passport.authenticate('facebook'));

  // Facebook will redirect the user to this URL after approval. Finish the
  // authentication process by attempting to obtain an access token. If access
  // was granted, the user will be logged in. Otherwise, authentication has failed.
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/login'
    }),
    function(req, res) {
      res.cookie('signIn', 'true');
      res.redirect('/');
    }
  );
  // This is the middleware that needs to be used for
  // protecting APIs that require authorization
  return function(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the login page /auth/twitter
    res.redirect('/auth/facebook');
  };
};
