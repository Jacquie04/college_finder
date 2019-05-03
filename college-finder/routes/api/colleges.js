const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");

//matches with "/api/colleges"
router.route("/")
    .get() //add functionality later
    .post(); //add functionality later


router.route("/:id")
    .get()
    .put()
    .delete();

module.exports = router;