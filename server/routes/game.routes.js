const GameController = require("../controllers/game.controller");

module.exports = (app) => {
    app.get("/api/games/:code", GameController.getOneGameByCode);
    app.post("/api/games", GameController.createGame);
    app.delete('/api/games/:id', GameController.deleteGame);
}