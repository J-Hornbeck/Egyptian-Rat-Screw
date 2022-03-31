const GameController = require("../controllers/game.controller");

module.exports = (app) => {
  app.get("/api/games", GameController.findAllGames);
  app.get("/api/games/:id", GameController.getOneGameByCode);
  app.post("/api/games", GameController.createGame);
  app.put("api/games/:id", GameController.updateOneGame);
  app.delete("/api/games/:id", GameController.deleteGame);
};
