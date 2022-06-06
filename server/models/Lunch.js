const mongoose = require ('mongoose');

const lunchSchema = new mongoose.Schema({
    ingredients: [
      {
        type: String,
        require:true,
      },
    ],
    directions: {
      type: String,
      required: true,
    },

    lunchId: {
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
  
const Lunch = mongoose.model("Lunch", lunchSchema);

  module.exports = Lunch;
  