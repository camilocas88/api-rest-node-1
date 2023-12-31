const req = require("express/lib/request");
const mongoose = require("mongoose");

const TrackScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true
        },
        message: "Cover is not valid",
      }
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      }
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      }
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    }
  },
  {
    timestamps: true,
    versionKey: false, 
  }
  );

module.exports = mongoose.model("tracks", TrackScheme);
