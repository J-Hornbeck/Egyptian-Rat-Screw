const CardsController = require("../controllers/cards.controller");

module.exports = (app) => {
    app.get("/api/cards", CardsController.findAll) //change function to a function from controllers
    app.get("/api/cards/:id", CardsController.getCards) //change function to a function from controllers
    app.post("/api/cards", CardsController.createCards) //change function to a function from controllers
}
