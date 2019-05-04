const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");

//matches with "/api/users"
router.route("/")
    .get() //add functionality later
    .post(); //add functionality later


router.route("/:id")
    .get()
    .put()
    .delete();

module.exports = router;