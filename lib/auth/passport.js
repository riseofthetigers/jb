'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app, User) {

  app.use(passport.initialize());
  // Enable sessions
  app.use(passport.session());

  passport.use('local', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback : true
    },
    function(req, username, password, done) {
      var findOrCreateUser = function(){
        // find a user in Mongo with provided username
        User.findOne({where:{'username':username}}).then(function(user) {
          if (user) {
            console.log('User already exists');
            return done(null, false);
          } else {
            // if there is no user with that email
            // create the user
            var newUser = {}

            // set the user's local credentials
            newUser.username = username;
            newUser.password = password;
            newUser.email = req.body.email;
            newUser.displayName = req.body.firstname + ' ' + req.body.lastname;
            //newUser.lastName = req.body.lastname;

            // save the user
            User.create(newUser).then(function(data) {
              console.log('User Registration succesful');
              return done(null, newUser);
            });
          }
        });
      };

      // Delay the execution of findOrCreateUser and execute
      // the method in the next tick of the event loop
      process.nextTick(findOrCreateUser);
    })
  );

  passport.use(new FacebookStrategy({
      clientID: 652109234923404,
      clientSecret: "f126af0ec55ca0c2bc8c7cb914b7cb6b",
      callbackURL: "http://localhost:5000/auth/facebook/callback"
    },
    function(accesstoken, tokenSecret, profile, done) {
      // Could be an existing user or a new user
      // profile.username is used as the username
      User.findOrCreate({
        where: {
          username: profile.id,
          email: profile.emails[0].value,
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
    console.log(uname, '111des')
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
  //app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['email']}),
      function(req, res){
  });
  // Facebook will redirect the user to this URL after approval. Finish the
  // authentication process by attempting to obtain an access token. If access
  // was granted, the user will be logged in. Otherwise, authentication has failed.
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/login'
    }),
    function(req, res) {
      console.log(req.user.username)
      res.cookie('signIn', 'true');
      res.redirect('/api/users/' + req.user.username);
    }
  );

  app.post('/api/users',
    passport.authenticate('local',  {
      failureRedirect: '/api/users',
      failureFlash: true }),
      function(req, res) {
        console.log('test111')
        res.redirect('/api/users/' + req.user.username);
  });

  // app.get('/api/users', function(req, res) {
  //    res.redirect('/api/user/' + req.user);
  // });



  // This is the middleware that needs to be used for
  // protecting APIs that require authorization
  return function(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the login page /auth/twitter
    res.redirect('/');
  };
};