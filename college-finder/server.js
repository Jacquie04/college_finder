const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");
var passport = require('passport');
var initPassport = require("./config/passport");
var session = require("express-session");
var LocalStrategy = require("passport-local").Strategy;


const ensureLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).send();
    return;
  }

  next();
};



// set strategies and serializations

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//setup sessions middleware
app.use(session({ secret: "eating salad in 2019", resave: true, saveUninitialized: true
})); 

passport.use(initPassport.localStrategy);

passport.serializeUser( (user, done) => {
  var sessionUser = { _id: user._id, name: user.name, email: user.email, roles: user.roles }
  console.log('session user', sessionUser)
  done(null, sessionUser)
})

passport.deserializeUser( (sessionUser, done) => {
  done(null, sessionUser)
})

app.use(passport.initialize());
app.use(passport.session());
// passport.serializeUser(initPassport.serializeUser);
// passport.deserializeUser(initPassport.deserializeUser);
//Handles routes. Will serve static react page if /api/x not utilized
app.use(routes);

// Remaining requests send you to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//initialize sequelize

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
