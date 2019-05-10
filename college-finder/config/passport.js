var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

//login with a username/email and password
passport.use(new LocalStrategy(
  function(username, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        username: username
      }
    }).then(function(dbUser) {
      // If there's no user with inputed username, return incorrect.
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If username is correct but password is not, return incorrect.
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
  cb(null, user);
});


passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// Exporting our configured passport
module.exports = passport;