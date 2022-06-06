const router = require("express").Router();

const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  saveBreakfast,
  deleteBreakfast,
  saveLunch,
  deleteLunch,
  saveDinner,
  deleteDinner,
  login,
} = require("../../controllers/user-controller");
const { authMiddleware } = require("../../utils/auth");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

router
  .route("/breakfast/:breakfastId")
  .put(authMiddleware, saveBreakfast)
  .delete(authMiddleware, deleteBreakfast);

router
  .route("/lunch/:lunchId")
  .put(authMiddleware, saveLunch)
  .delete(authMiddleware, deleteLunch);

router
  .route("/dinner/:dinnerId")
  .put(authMiddleware, saveDinner)
  .delete(authMiddleware, deleteDinner);

module.exports = router;
