const mongoose = require("mongoose");
const CardsSchema = new mongoose.Schema(
    {
        suit: { type: String },
        value: { type: String },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Cards", CardsSchema);
