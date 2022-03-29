const Game = require("../models/game.model");

const createGame = (req, res) => {
    Game.create(req.body)
        .then((newGame) => {
            return res.json({game: newGame})
        })
        .cath((err) => {
            return res.json(err)
        });
};

const deleteGame = (req, res) => {
    Game.deleteOne({_id: req.params.id})
        .then((gameToDelete) => res.json(gameToDelete))
        .catch((err) => console.log(err));
}

const getOneGameByCode = (req, res) => {
    Game.findOne({ code: req.params.code })
        .then((game) => res.json(game))
        .catch((err) => res.json(err));
};



module.exports = {
    createGame,
    deleteGame,
    getOneGameByCode,
};