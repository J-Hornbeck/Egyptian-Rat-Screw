const Player = require("../models/player.model");

//find all
const findAllPlayers = (req, res) => {
    Player.find({})
        .then((allPlayers)=>{
            res.json(allPlayers);
            console.log(allPlayers);
        })
        .catch((err) => {
            res.json({ Message: "Something went wrong @ find all players", error: err});
        });
};

// find one player by player id
const getOnePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then((player) => res.json(player))
        .catch((err) => res.json(err));
};

// find players by game id
// Work out db relationship between players and games, then how to find all the players
// const getPlayersByGameId = (req, res) => {
//     Player.findOne({ _id: req.params.id })
//         .then((cards) => res.json(cards))
//         .catch((err) => res.json(err));
// };


// create new
const createPlayer = (req, res) => {
    Player.create(req.body)
        .then((newPlayer) => {
            res.json({newPlayer})
        })
        .cath((err) => res.json(err));
};

const deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then((playerToDelete) => res.json(playerToDelete))
        .catch((err) => console.log(err));
}


module.exports = {
    findAllPlayers,
    getOnePlayer,
    createPlayer,
    deletePlayer,
};