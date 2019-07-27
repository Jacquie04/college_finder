const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");

//matches with "/api/colleges"
router.route("/")
    .get(collegeController.findAllColleges)
    .post(collegeController.addCollege)
    
//matches with "/api/colleges/:id"
router.route("/:id")
    .get(collegeController.findAllColleges)
    .delete(collegeController.deleteCollege);

module.exports = router;