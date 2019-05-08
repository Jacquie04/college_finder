const router = require("express").Router();
const collegeRoutes = require("./colleges.js");
const usersRoutes = require("./users");

//college routes
router.use("/colleges", collegeRoutes);

// //user routes
// router.use("/users", usersRoutes);

module.exports = router;