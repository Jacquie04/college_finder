const db = require("../models");

module.exports = {
    findAllColleges: function (req, res) {
        console.log("All colleges being queried.");
        db.College.findAll({ where: {UserId: req.params.id} }).then(dbCollege => res.json(dbCollege));
    },

    findOneCollege: function(req, res) {
        db.College.findOne( { where: {id: req.params.id} }).then(dbCollege => res.json(dbCollege));
    },

    addCollege: function (req, res) {
        console.log("College added to database.");
        db.College.create(req.body).then(dbCollege => res.json(dbCollege));
    },

    findByUser: function (req, res) {
        console.log("All colleges being queried by specified user.");
        db.College.findAll({ where: {UserId: req.params.id} }).then(dbCollege => res.json(dbCollege));
    },

    deleteCollege: function (req, res) {
        console.log("College deleted.")
        db.College.destroy({ where: {id: req.params.id} }).then(dbCollege => res.json(dbCollege));
    },

    findUsers: function (req, res) {
        db.User.findAll({}).then(dbUser => res.json(dbUser));
    }
};