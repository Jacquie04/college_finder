const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");

//matches with "/api/users"
router.route("/")
    .get(collegeController.findUsers)
    .post();


router.route("/:id")
    .get()
    .put()
    .delete();

module.exports = router;