const mongoose = require("mongoose");
const CardsSchema = new mongoose.Schema(
    {
       //put in the item Key: Type,
    },
    { timestamps: true }
);
module.exports = mongoose.model("Cards", CardsSchema);
