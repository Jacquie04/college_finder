const db = require("../models");

module.exports = {
    findAllColleges: function (req, res) {
        db.College.findAll({}).then(dbCollege => res.json(dbCollege));
    },

    findOneCollege: function(req, res) {
        db.College.findOne({ where: {id: req.params.id} }).then(dbCollege => res.json(dbCollege));
    },

    addCollege: function (req, res) {
        db.College.create(req.body).then(function(dbCollege) {
            res.json(dbCollege);
        })
    },

    deleteCollege: function (req, res) {
        db.College.destroy({ where: {id: req.params.id} }).then(console.log("college deleted"));
    },

    findUsers: function (req, res) {
        db.User.findAll({}).then(dbUser => res.json(dbUser));
    }
};