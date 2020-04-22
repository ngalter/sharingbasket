const router = require("express").Router();
const userRoutes = require("./users");
const pantryRoutes = require("./pantries");

// Book routes
router.use("/users", userRoutes);
router.use("/pantries", pantryRoutes);

module.exports = router;