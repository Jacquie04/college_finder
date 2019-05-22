var db = require("../models");
var passport = require("passport");
const router = require("express").Router();



// If the user has valid login credentials, send them to the members page.

router.post("/api/login", passport.authenticate("local"), function(req, res, next) {
  
  req.session.save((err) => {
    if (err) {
        return next(err);
    }
    // res.redirect('/')
    // res.json({ nextRoute: "/members" });
    res.json({id: req.user && req.user.id});
  });
});
//


// Route for signing up a user. The user's password is automatically hashed and stored.
router.post("/api/signup", function(req, res) {
  console.log(req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password
  }).then(function() {
    passport.authenticate("local")(req, res, () => {
      req.session.save(err => {
          if (err) {
            return next(err);
          }

          console.log('hey from signup success');

          res.json({id: req.user && req.user.id})
          //   res.redirect(307, "/api/login");
          //   res.json({id: req.user.id});
        })
        
    });
//this one below
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  });
});
  //
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
  //
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