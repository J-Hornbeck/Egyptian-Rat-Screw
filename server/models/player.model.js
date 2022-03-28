const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema(
    {
        nickname: { type: String },
        deck: { type: Array }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Player", PlayerSchema);