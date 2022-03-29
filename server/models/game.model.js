const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
    {
        numOfPlayers: { type: Number },
        slapRule1: { type: String },
        slapRule2: { type: String },
        slapRule3: { type: String },
        slapRule4: { type: String },
        slapRule5: { type: String },
        slapRule6: { type: String },
        deck: { type: Object },
        code: { type: String }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Game", GameSchema);
