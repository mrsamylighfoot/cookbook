const {Schema} = require ('mongoose');

const lunchSchema = new Schema({
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
  
  module.exports = lunchSchema;
  