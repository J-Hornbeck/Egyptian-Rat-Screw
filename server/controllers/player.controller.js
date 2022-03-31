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

// find players by game code
const getPlayersByGameCode = (req, res) => {
    Player.find({ gameCode: req.params.gameCode })
        .then((cards) => res.json(cards))
        .catch((err) => res.json(err));
};


// create new
const createPlayer = (req, res) => {
    Player.create(req.body)
        .then((newPlayer) => {
            res.json({player: newPlayer})
            console.log(newPlayer);
        })
        .catch((err) => res.status(400).json(err));
};

const deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then((playerToDelete) => res.json(playerToDelete))
        .catch((err) => console.log(err));
}

const updateOnePlayer = (req, res) => {
    Player.findByIdAndUpdate({_id:req.params.id}, req.body, {
        new:true,
        runValidators: true,
    })
    .then((updatedPlayer)=> res.json(updatedPlayer))
    .catch((err) => res.status(400).json(err))
    // .catch((err) => { res.status(400).json({ err }) });
}


module.exports = {
    findAllPlayers,
    getOnePlayer,
    getPlayersByGameCode,
    createPlayer,
    deletePlayer,
    updateOnePlayer,
};