const { Lunch, User } = require("../models");

const lunchController = {
  // get all lunches
  getLunches(req, res) {
    Lunch.find()
      .sort({ createdAt: -1 })
      .then((dbLunchData) => {
        res.json(dbLunchData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single lunch by id
  getSingleLunch(req, res) {
    Lunch.findOne({ _id: req.params.lunchId })
      .then((dbLunchData) => {
        if (!dbLunchData) {
          return res.status(404).json({ message: "No lunch with this id!" });
        }
        res.json(dbLunchData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a lunch
  createLunch(req, res) {
    Lunch.create(req.body)
      .then((dbLunchData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { lunches: dbLunchData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "Lunch created but no user with this id!" });
        }

        res.json({ message: "Lunch successfully created!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update lunch
  updateLunch(req, res) {
    Lunch.findOneAndUpdate(
      { _id: req.params.lunchId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbLunchData) => {
        if (!dbLunchData) {
          return res.status(404).json({ message: "No lunch with this id!" });
        }
        res.json(dbLunchData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete lunch
  deleteLunch(req, res) {
    Lunch.findOneAndRemove({ _id: req.params.lunchId })
      .then((dbLunchData) => {
        if (!dbLunchData) {
          return res.status(404).json({ message: "No lunch with this id!" });
        }

        // remove lunch id from user's `lunches` field
        return User.findOneAndUpdate(
          { lunches: req.params.lunchId },
          { $pull: { lunches: req.params.lunchId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "Lunch created but no user with this id!" });
        }
        res.json({ message: "Lunch successfully deleted!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add a reaction to a lunch
  addReaction(req, res) {
    Lunch.findOneAndUpdate(
      { _id: req.params.lunchId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbLunchData) => {
        if (!dbLunchData) {
          return res.status(404).json({ message: "No lunch with this id!" });
        }
        res.json(dbLunchData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // remove reaction from a lunch
  removeReaction(req, res) {
    Lunch.findOneAndUpdate(
      { _id: req.params.lunchId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((dbLunchData) => {
        if (!dbLunchData) {
          return res.status(404).json({ message: "No lunch with this id!" });
        }
        res.json(dbLunchData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = lunchController;
