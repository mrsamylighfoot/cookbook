const mongoose = require ('mongoose');

const dinnerSchema = new mongoose.Schema({
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

    dinnerId: {
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
  
const Dinner = mongoose.model("Dinner", dinnerSchema);

  module.exports = Dinner;
  