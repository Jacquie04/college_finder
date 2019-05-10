const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");
console.log("from colleges route");
//matches with "/api/colleges"
router.route("/")
    .get(collegeController.findAll)
    .post(collegeController.addCollege); 


router.route("/:id")
    .get()
    .put()
    .delete();

module.exports = router;