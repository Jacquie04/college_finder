const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.College.findAll({}).then(dbCollege => res.json(dbCollege));

    },

    addCollege: function (req, res) {
        db.College.create(req.body).then(function(dbCollege) {
            res.json(dbCollege);
        })
    }
};