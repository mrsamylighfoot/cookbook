const router = require("express").Router();

const {
  getDinners,
  createDinner,
  getSingleDinner,
  updateDinner,
  deleteDinner,
  addReaction,
  removeReaction,
} = require("../../controllers/dinner-controller");

router.route("/").get(getDinners).post(createDinner);

router
  .route("/:dinnerId")
  .get(getSingleDinner)
  .put(updateDinner)
  .delete(deleteDinner);

router
  .route("/:dinnerId/reactions/:reactionId")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
