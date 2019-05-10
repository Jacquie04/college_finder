const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        console.log("hello from college controller");
        db.College.findAll({}).then(dbCollege => res.json(dbCollege));

    },

    addCollege: function (req, res) {
        db.College.create(req.body).then(function(dbCollege) {
            res.json(dbCollege);
        })
    },

    findUsers: function (req, res) {
        db.User.findAll({}).then(dbUser => res.json(dbUser));
    }
};