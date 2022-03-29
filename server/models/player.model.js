const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema(
    {
        nickname: { type: String },
        deck: { type: [] }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Player", PlayerSchema);