const { Dinner, User } = require("../models");

const dinnerController = {
  // get all dinners
  getDinners(req, res) {
    Dinner.find()
      .sort({ createdAt: -1 })
      .then((dbDinnerData) => {
        res.json(dbDinnerData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single dinner by id
  getSingleDinner(req, res) {
    Dinner.findOne({ _id: req.params.dinnerId })
      .then((dbDinnerData) => {
        if (!dbDinnerData) {
          return res.status(404).json({ message: "No dinner with this id!" });
        }
        res.json(dbDinnerData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a dinner
  createDinner(req, res) {
    Dinner.create(req.body)
      .then((dbDinnerData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { dinners: dbDinnerData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "Dinner created but no user with this id!" });
        }

        res.json({ message: "Dinner successfully created!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update dinner
  updateDinner(req, res) {
    Dinner.findOneAndUpdate(
      { _id: req.params.dinnerId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbDinnerData) => {
        if (!dbDinnerData) {
          return res.status(404).json({ message: "No dinner with this id!" });
        }
        res.json(dbDinnerData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete dinner
  deleteDinner(req, res) {
    Dinner.findOneAndRemove({ _id: req.params.dinnerId })
      .then((dbDinnerData) => {
        if (!dbDinnerData) {
          return res.status(404).json({ message: "No dinner with this id!" });
        }

        // remove dinner id from user's `dinners` field
        return User.findOneAndUpdate(
          { dinners: req.params.dinnerId },
          { $pull: { dinners: req.params.dinnerId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "Dinner created but no user with this id!" });
        }
        res.json({ message: "Dinner successfully deleted!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add a reaction to a dinner
  addReaction(req, res) {
    Dinner.findOneAndUpdate(
      { _id: req.params.dinnerId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbDinnerData) => {
        if (!dbDinnerData) {
          return res.status(404).json({ message: "No dinner with this id!" });
        }
        res.json(dbDinnerData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // remove reaction from a dinner
  removeReaction(req, res) {
    Dinner.findOneAndUpdate(
      { _id: req.params.dinnerId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((dbDinnerData) => {
        if (!dbDinnerData) {
          return res.status(404).json({ message: "No dinner with this id!" });
        }
        res.json(dbDinnerData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = dinnerController;
