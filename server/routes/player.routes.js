const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
    app.get("/api/players", PlayerController.findAllPlayers); 
    app.get("/api/players/:id", PlayerController.getOnePlayer);
    app.post("/api/players", PlayerController.createPlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}
