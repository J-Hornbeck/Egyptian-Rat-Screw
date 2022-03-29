import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  // this should take in the card suite and value
  // on click, on up arrow, play card

  const [responseData, setResponseData] = useState();
  const [deckId, setDeckId] = useState("");

  useEffect(() => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data);
      });

    console.log("WORKING");
    console.log(responseData);
  }, []);

  console.log(responseData);
  // setDeckId(responseData.deck_id);
  console.log(deckId);

  return (
    <div>
      <div className="card bg-5">{/* { responseData } */}</div>
      <div className="card-back"></div>
    </div>
  );
};

export default Card;
