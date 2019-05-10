var db = require("../models");
var passport = require("../config/passport");
//
module.exports = function(app) {
  // If the user has valid login credentials, send them to the members page.

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });
//
  // Route for signing up a user. The user's password is automatically hashed and stored.
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });
// 
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
//
  // Route for getting some data about our user to be used client side.
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object.
      res.json({});
    }
    else {
      // Otherwise send back the user's username and id.
    
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
  });
};