var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

//login with an email and password
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd'
},
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with inputed email, return incorrect.
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If email is correct but password is not, return incorrect.
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // You may pass
      return done(null, dbUser);
    });
  }
));
//code required by Sequelize to ensure password encription.
passport.serializeUser(function(user, cb) {
  console.log('hi from serialize')
  cb(null, user);
});


passport.deserializeUser(function(id, cb) {
  console.log('hi from deserializeUser');
  cb(null, id);
});



// Exporting our configured passport
module.exports = passport;