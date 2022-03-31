const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema(
    {
        nickname: { 
            type: String,
            required: [true, "Nickname is required"]
        },
        deck: { type: [] }, 
        gameCode: { 
            type: String,
            required: [true, "Game Code is required"], 
            minlength: [12, "Game Code must be 12 characters long"],
            maxlength: [12, "Game Code must be 12 characters long"]
        }
    },
    { timestamps: true }
);

// var err = doc.validateSync();
//     if ( err ){
//         handleError( err );
//     } else {
//         // validation passed
//     }
// PlayerSchema.path('nickname').validate(value, done) {
//     var self = this;
//     if(!self.isNew){
//         return done(true);
//     } else {
//         mongoose.models
//     }
// }
module.exports = mongoose.model("Player", PlayerSchema);
