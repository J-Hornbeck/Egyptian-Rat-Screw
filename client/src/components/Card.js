import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  // this should take in the card suite and value
  // on click, on up arrow, play card

  const [responseData, setResponseData] = useState();
  const [deckId, setDeckId] = useState();
  const [playDeck, setPlayDeck] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data);
      });

    console.log("WORKING");
  }, []);

  // to add a playPile
  // add playerHands

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`).then((res) => {
      console.log(res.data);
      console.log("we are in the get request for players");
      setPlayers(res.data);
    });
  }, []);

  // i need to change this to have it set up to draw 1 card from the deck then add the card to a pile.
  let dealCardsToPlayers = () => {
    let dealt = Math.floor(52 / players.length);
    let count = 0;
    for (let i = 0; i <= 52 % players.length; i++) {
      axios
        .get(
          `https://deckofcardsapi.com/api/deck/${responseData.deck_id}/pile/playPile/add?${playDeck[0].code}`
        )
        .then((res) => {
          console.log(res.data);
        });
      count++;
    }
    for (let i = 0; i < dealt; i++) {
      console.log("i = ", i);
      if (count < 52) {
        for (let k = 1; k <= players.length; k++) {
          console.log("k = ", k);
          console.log("count = ", count);
          axios
            .get(
              `https//deckofcardsapi.com/api/deck/${responseData.deck_id}/pile/player${k}/add?${playDeck[count].code}`
            )
            .then((res) => {
              console.log(res.data);
              console.log(res.data);
            });
          count++;
        }
      } else {
        break;
      }
    }
  };
  // i need to set up a for loop to deal one card to each player

  // let getDeckFunction = () => {
  //   axios
  //     .get(
  //       `https://deckofcardsapi.com/api/deck/${responseData.deck_id}/draw/?count=52`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setPlayDeck(res.data.cards);
  //     });
  //   console.log("onClick Worked");
  //   console.log(playDeck);
  // };

  document.body.onkeydown =
    ("keydown",
    (e) => {
      if (e.which === 32) {
        console.log("SpaceBar");
        console.log(responseData.deck_id, "responseData.deck_id");
        console.log(playDeck, "playDeck");
        console.log(playDeck.length, "playdeck length");
        console.log(players.length, "players length");
        console.log(playDeck[0].code, "playDeck[0].code");
      }
    });

  return (
    <div id="Card" className="overflow-y">
      {/* <div className="card bg-5">{playDeck}</div> */}
      <div /*onClick={getDeckFunction}*/ className="card-back"></div>
      <div className="overflow-y">
        <h1 onClick={dealCardsToPlayers}>Click Here To Deal to Players</h1>

        {playDeck
          ? playDeck.map((card, index) => {
              return (
                <div>
                  <img
                    key={index}
                    className="card"
                    src={card.image}
                    alt={card.code}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Card;
