const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema(
    {
        nickname: { type: String },
        deck: { type: [] }, 
        gameCode: { type: String }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Player", PlayerSchema);