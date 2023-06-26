const mongoose = require("mongoose");

const StoreScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: Number,
    },
  },
  {
    timestamps: true,  //TODO: createAt, updateAt
    versionKey: false, 
  }
  );

module.exports = mongoose.model("storage", StoreScheme);
