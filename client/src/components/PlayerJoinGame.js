import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PlayerJoinGame = (props) => {
  const [nickname, setNickname] = useState("");
  const [gameId, setGameID] = useState("");
  const [deck, setDeck] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/players", {
        nickname,
        deck,
      })

      .then((res) => {
        // console.log(res);
        console.log(res.data.player);

        setNickname("");
        setGameID("");
        setDeck([]);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/game");
  };

  // useNavigate(`/${ props.gameId}`)
  return (
    <div>
      <h1>Welcome!</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Enter Nickname:</label>
          <br />
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <label>Enter Game Id</label>
          <br />
          <input
            type="text"
            name="gameId"
            value={gameId}
            onChange={(e) => setGameID(e.target.value)}
          />
        </div>
        <button type="submit">Join Game</button>
      </form>
    </div>
  );
};

export default PlayerJoinGame;
