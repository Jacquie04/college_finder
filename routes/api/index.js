const router = require("express").Router();
const collegeRoutes = require("./colleges");

//college routes
router.use("/colleges", collegeRoutes);

module.exports = router;