const mongoose = require("mongoose");

const breakfastSchema = new mongoose.Schema({
  ingredients: [
    {
      type: String,
      require: true,
    },
  ],
  directions: {
    type: String,
    required: true,
  },

  breakfastId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },

  title: {
    type: String,
    required: true,
  },
});

module.exports = {breakfastSchema};
