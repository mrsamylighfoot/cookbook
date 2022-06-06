const router = require("express").Router();
const userRoutes = require("./user-routes");
const breakfastRoutes = require("./breakfast-routes");
const lunchRoutes = require("./lunch-routes");
const dinnerRoutes = require("./dinner-routes");

router.use("/users", userRoutes);
router.use("/breakfast", breakfastRoutes);
router.use("/lunch", lunchRoutes);
router.use("/dinner", dinnerRoutes);

module.exports = router;
