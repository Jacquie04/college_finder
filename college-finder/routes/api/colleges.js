const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");
console.log("from colleges route (colleges.js)");
//matches with "/api/colleges"
router.route("/")
    .get(collegeController.findAllColleges)
    .post(collegeController.addCollege)

router.route("/:id")
    .get(collegeController.findAllColleges)
    .delete(collegeController.deleteCollege);

module.exports = router;