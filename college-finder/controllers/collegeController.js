const db = require("../models");

module.exports = {
    findAllColleges: function (req, res) {
        db.College.findAll({ where: {UserId: req.params.id} }).then(dbCollege => res.json(dbCollege));
        console.log(req);
        console.log(dbCollege);
    },

    findOneCollege: function(req, res) {
        db.College.findOne({ where: {id: req.params.id} }).then(dbCollege => res.json(dbCollege));
    },

    addCollege: function (req, res) {
        console.log("hello from add college");
        db.College.create(req.body).then(function(dbCollege) {
            res.json(dbCollege);
        })
    },

    findByUser: function (req, res) {
        db.College.findAll({ where: {UserId: req.params.id} }).then(dbCollege => res.json(dbCollege));
        console.log(req);
        console.log(dbCollege);
    },

    deleteCollege: function (req, res) {
        db.College.destroy({ where: {id: req.params.id} }).then(console.log("college deleted"));
    },

    findUsers: function (req, res) {
        db.User.findAll({}).then(dbUser => res.json(dbUser));
    }
};