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
    }, function(req, email, password, done) {
      // Delay the execution a little
      process.nextTick(function(){
        // find a user in Postgres with provided email
        var UserPromise = User.findOne({where:{'email':email}});

        UserPromise.then(function(user) {
          if(!user) throw new Error("User not found")

          return user.verifyPassword(password)
        }).then(function(correct) {
          if(!correct) throw new Error("Password is not correct")

          return done(null, UserPromise.value()) // https://github.com/petkaantonov/bluebird/blob/master/API.md#value---dynamic
        }).catch(function() {
          return done(null, false)
        })
      });
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
      //res.redirect('/candidates/' + req.user.id);
      res.redirect('/search');
    }
  );


  app.post('/api/signup', function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var type = req.body.type;

    console.log("Signup", req.body)

    if(!email || !password || !type || !req.body.firstname || !req.body.lastname) {
      return res.status(409).json({success:false, message:'Please fill in all the fields'});
    }

    User.findOne({where:{'email':email}}).then(function(user) {
      if (user) {
        console.log('User already exists');
        return res.status(409).json({success:false, message:'Username already exists'});
      }

      // if there is no user with that email
      // create the user

      // set the user's local credentials
      var newUser = {
        type: req.body.type,
        username: email,
        password: password,
        email: email,
        displayName: req.body.firstname + ' ' + req.body.lastname
      }

      // save the user
      User.create(newUser).then(function(data) {
        req.logIn(data, function(err) {
          console.log('User Registration succesful');
          return res.json({
              success: true,
              message: 'User created',
              auth: true,
              type: newUser.type,
              displayName: newUser.displayName
          });
        });
      });
    });

  });

  app.get('/api/auth', function(req, res){
    if(req.isAuthenticated()) {
      res.json({
        displayName: req.user.displayName,
        type: req.user.type
      })
    } else {
      res.status(401).json({auth: false, message: "You are not logged in"})
    }
  });

  app.post('/api/login',  function(req, res, next){
    passport.authenticate('local',
        //{
      //failureRedirect: '/api/users',
      //failureFlash: true }
        function(err, user, info){
            if(err){ return next(err); }
            if(!user){ return res.json({auth:false}); }
            req.logIn(user, function(err) {
                if(err){ return next(err); }
                return res.json({
                    auth:true,
                    displayName: user.displayName,
                    type: user.type
                });
            });
        }
      )(req, res, next);
    //,
      //function(req, res) {
        //console.log('test111', req.user);
        ////res.redirect('/candidates/' + req.user.id);
          //res.json({
              //auth: true
          //});
  });

  app.get('/api/logout', function(req, res){
    req.logout();
    return res.json({auth:false});
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
