const express = require("express");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Handles routes. Will serve static react page if /api/x not utilized
app.use(routes);

//initialize sequelize
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
