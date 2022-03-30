const Game = require("../models/game.model");

const createGame = (req, res) => {
    Game.create(req.body)
        .then((newGame) => {
            res.json({game: newGame})
            console.log(newGame);
        })
        .catch((err) => {
            res.json(err)
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

const updateOneGame = (req, res) => {
    Game.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then((updatedGame)=> res.json(updatedGame))
    .catch((err) => res.json(err))
}

module.exports = {
    createGame,
    deleteGame,
    getOneGameByCode,
    updateOneGame,
};