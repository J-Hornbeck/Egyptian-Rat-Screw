const mongoose = require("mongoose");
const GameSchema = new mongoose.Schema(
    {
        numOfPlayers: { type: Number },
        slapRule1: { type: Boolean },
        slapRule2: { type: Boolean },
        slapRule3: { type: Boolean },
        slapRule4: { type: Boolean },
        slapRule5: { type: Boolean },
        slapRule6: { type: Boolean },
        deck: { type: Object },
        code: { type: String }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Game", GameSchema);
