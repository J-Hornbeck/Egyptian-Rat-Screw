import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  // this should take in the card suite and value
  // on click, on up arrow, play card

  const [responseData, setResponseData] = useState();
  const [deckId, setDeckId] = useState();
  const [playDeck, setPlayDeck] = useState([]);

  useEffect(() => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data);
      });

    console.log("WORKING");
  }, []);

  let playDeckFunction = () => {
    axios
      .get(
        `https://deckofcardsapi.com/api/deck/${responseData.deck_id}/draw/?count=52`
      )
      .then((res) => {
        console.log(res.data);
        setPlayDeck(res.data.cards);
      });
    console.log("onClick Worked");
    console.log(playDeck);
  };

  document.body.onkeydown =
    ("keydown",
    (e) => {
      if (e.which === 32) {
        console.log("SpaceBar");
        console.log(responseData.deck_id, "responseData.deck_id");
        console.log(playDeck, "playDeck");
        console.log(playDeck.length, "playdeck length");
      }
    });

  return (
    <div id="Card" className="overflow-y">
      {/* <div className="card bg-5">{playDeck}</div> */}
      <div onClick={playDeckFunction} className="card-back"></div>
      <div className="overflow-y">
        {playDeck
          ? playDeck.map((card, index) => {
              return (
                <li key={index} className="card">
                  <img src={card.image} alt={card.code} />
                </li>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Card;
