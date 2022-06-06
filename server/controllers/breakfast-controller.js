const { Breakfast, User } = require("../models/index");

const breakfastController = {
  // get all breakfasts
  getBreakfasts(req, res) {
    Breakfast.find()
      .sort({ createdAt: -1 })
      .then((dbBreakfastData) => {
        res.json(dbBreakfastData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single breakfast by id
  getSingleBreakfast(req, res) {
    Breakfast.findOne({ _id: req.params.breakfastId })
      .then((dbBreakfastData) => {
        if (!dbBreakfastData) {
          return res
            .status(404)
            .json({ message: "No breakfast with this id!" });
        }
        res.json(dbBreakfastData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a breakfast
  createBreakfast(req, res) {
    console.log("createBreakfast on bk-ctrl");
    Breakfast.create(req.body)
      .then((dbBreakfastData) => {
        console.log(".then createBreakfast on bk-ctrl");
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { recipes: dbBreakfastData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        console.log(".then dbuserdata createbk bk-ctrl");
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "Breakfast created but no user with this id!" });
        }

        res.json({ message: "Breakfast successfully created!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update breakfast
  updateBreakfast(req, res) {
    Breakfast.findOneAndUpdate(
      { _id: req.params.breakfastId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbBreakfastData) => {
        if (!dbBreakfastData) {
          return res
            .status(404)
            .json({ message: "No breakfast with this id!" });
        }
        res.json(dbBreakfastData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete breakfast
  deleteBreakfast(req, res) {
    Breakfast.findOneAndRemove({ _id: req.params.breakfastId })
      .then((dbBreakfastData) => {
        if (!dbBreakfastData) {
          return res
            .status(404)
            .json({ message: "No breakfast with this id!" });
        }

        // remove breakfast id from user's `breakfasts` field
        return User.findOneAndUpdate(
          { recipes: req.params.breakfastId },
          { $pull: { recipes: req.params.breakfastId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "Breakfast created but no user with this id!" });
        }
        res.json({ message: "Breakfast successfully deleted!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add a reaction to a breakfast
  addReaction(req, res) {
    Breakfast.findOneAndUpdate(
      { _id: req.params.breakfastId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbBreakfastData) => {
        if (!dbBreakfastData) {
          return res
            .status(404)
            .json({ message: "No breakfast with this id!" });
        }
        res.json(dbBreakfastData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // remove reaction from a breakfast
  removeReaction(req, res) {
    Breakfast.findOneAndUpdate(
      { _id: req.params.breakfastId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((dbBreakfastData) => {
        if (!dbBreakfastData) {
          return res
            .status(404)
            .json({ message: "No breakfast with this id!" });
        }
        res.json(dbBreakfastData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = breakfastController;
