require("dotenv").config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

app.use(cors({
   credentials: true,
   origin: "http://localhost:3000",
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/cards.routes")(app);
require("./routes/users.routes")(app);

const server = app.listen(port, () => {
   console.log(`Listening on port: ${port}`) 
});