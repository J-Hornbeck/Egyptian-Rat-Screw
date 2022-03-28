const Cards = require("../models/cards.model");

// Create these cards/enter in the db
// The value, one of A (for an ace), 2, 3, 4, 5, 6, 7, 8, 9, 0 (for a ten), J (jack), Q (queen), or K (king);
// The suit, one of S (Spades), D (Diamonds), C (Clubs), or H (Hearts).
//find all
const findAll = (req, res) => {

  Cards.find({})
    .then((allCards) => {
      res.json(allCards);
      console.log(allCards);
    })
    .catch((err) => {
      res.json({
        Message: "Something went wrong",
        error: err
      });
    });
};

// fine one by id
const getCards = (req, res) => {

  Cards.findOne({
    _id: req.params.id
  })
    .then((cards) => res.json(cards))
    .catch((err) => res.json(err));
};

// create new
const createCards = (req, res) => {

  Cards.create(req.body)
    .then((newCards) => res.json(newCards))
    .cath((err) => res.json(err));
};

module.exports = {
  findAll,
  createCards,
  getCards,
};
