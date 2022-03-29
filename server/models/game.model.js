const mongoose = require("mongoose");

let Player = require("/Player").schema;

const GameSchema = new mongoose.Schema(
  {
    host: {
      type: String,
      default: "Host",
    },
    players: [Player],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Game", GameSchema);
