const mongoose = require("mongoose");
const CardsSchema = new mongoose.Schema(
    {
        image: { type: String },
        value: { type: String },
        suit: { type: String },
        code: { type: String }
    },
    { timestamps: false }
);
module.exports = mongoose.model("Cards", CardsSchema);
