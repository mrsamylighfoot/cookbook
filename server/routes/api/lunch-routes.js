const router = require("express").Router();

const {
  getLunches,
  createLunch,
  getSingleLunch,
  updateLunch,
  deleteLunch,
  addReaction,
  removeReaction,
} = require("../../controllers/lunch-controller");

router.route("/").get(getLunches).post(createLunch);

router
  .route("/:lunchId")
  .get(getSingleLunch)
  .put(updateLunch)
  .delete(deleteLunch);

router
  .route("/:lunchId/reactions/:reactionId")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
