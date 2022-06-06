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

  breakfast_id: {
    type: String,
    required: false,
  },
  image: {
    type: String,
  },

  title: {
    type: String,
    required: true,
  },
});

const Breakfast = mongoose.model("Breakfast", breakfastSchema);

module.exports = Breakfast;
