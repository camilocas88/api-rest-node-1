const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    }
  },
  {
    timestamps: true,  //TODO: createAt, updateAt
    versionKey: false, 
  }
  );

module.exports = mongoose.model("users", UserScheme);
