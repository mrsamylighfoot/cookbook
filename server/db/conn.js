const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://amylightfoot:root1234@cookbook.y4l03.mongodb.net/?retryWrites=true&w=majority";

//const client = new MongoClient(uri, {
//useNewUrlParser: true,
//useUnifiedTopology: true,
//});

var _db;

module.exports = {
  connectToServer: function (callback) {
    mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (err) {
        console.log("Connected");
        return callback(err);
      }
    );
  },

  getDb: function () {
    return _db;
  },
};
