import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PlayerJoinGame = (props) => {
  const [nickname, setNickname] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [deck, setDeck] = useState();
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/players", {
        nickname,
        deck,
        gameCode,
      })

      .then((res) => {
        // console.log(res);
        console.log(res.data.player);
        setNickname("");
        setGameCode("");
        setDeck([]);
        navigate(`/games/${gameCode}`);
      })
      .catch((err) => {
        setErrorMessages(err.response.data.errors);
        console.log(err.response.data);
        console.log(errorMessages);
      });
  };

  return (
    <div className="ms-5">
      <h1>Join Game!</h1>

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
          {errorMessages !== "" && (
            <div>
              <p className="errorMessage">{errorMessages.nickname?.message}</p>
            </div>
          )}
        </div>
        <div>
          <label>Enter Game Code</label>
          <br />
          <input
            type="text"
            name="gameCode"
            value={gameCode}
            onChange={(e) => setGameCode(e.target.value)}
          />
          {/* // ? = accept undefined */}
          {errorMessages !== "" && (
            <div>
              <p className="errorMessage">{errorMessages.gameCode?.message}</p>
            </div>
          )}
        </div>
        <button className="btn mt-4" type="submit">
          Join Game
        </button>
      </form>
    </div>
  );
};

export default PlayerJoinGame;
