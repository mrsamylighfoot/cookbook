const {Schema} = require ('mongoose');

const dinnerSchema = new Schema({
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
  
  module.exports = dinnerSchema;
  