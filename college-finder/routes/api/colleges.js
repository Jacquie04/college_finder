const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");
console.log("from colleges route");
//matches with "/api/colleges"
router.route("/")
    .get(collegeController.findAllColleges)
    .post(collegeController.addCollege)

router.route("/:id")
    .get(collegeController.findOneCollege)
    .delete(collegeController.deleteCollege);

module.exports = router;