const mongoose = require("mongoose");

const dbName = "egyptianRatScrew"
mongoose
    .connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`established a connection to the database, {dbName}`))
    .catch((err)=>
        console.log("Something went wrong when connecting to the database", err)
    );
