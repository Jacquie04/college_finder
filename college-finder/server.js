const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");
var passport = require("./config/passport");
var session = require("express-session");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "eating salad in 2019", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


//Handles routes. Will serve static react page if /api/x not utilized
app.use(routes);

//initialize sequelize
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
