var db = require("../models");
var passport = require("passport");
const router = require("express").Router();



// If the user has valid login credentials, send them to the members page.

router.post("/api/login", passport.authenticate("local"), function(req, res, next) {
  
  req.session.save((err) => {
    if (err) {
        return next(err);
    }
    res.json({id: req.user && req.user.id});
  });
});
//


// Route for signing up a user. The user's password is automatically hashed and stored.
router.post("/api/signup", function(req, res) {

  db.User.create({
    email: req.body.email,
    password: req.body.password
  }).then(function() {
    passport.authenticate("local")(req, res, () => {
      req.session.save(err => {
          if (err) {
            return next(err);
          }

          console.log('Sign up successful!');

          res.json({id: req.user && req.user.id})

        })
        
    });

  }).catch(function(err) {
    console.log(err);
    res.json(err);
  });
});

  // Route for logging user out
  router.get("/api/logout", function(req, res) {
    req.logout();
    req.session.save((err) => {
      if (err) {
        return next(err);
      }

      res.json({user: null});
    })
    
  });

  // Route for getting some data about our user to be used client side.
  router.get("/api/user_data", function(req, res) {
    if (!req.user) {

      // The user is not logged in, send back an empty object.
      res.json({});
    } else {

      // Otherwise send back the user's email and id.
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  module.exports = router;