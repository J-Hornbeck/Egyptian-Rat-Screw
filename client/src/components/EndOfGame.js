import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import epic from "../static/img/epic.gif";

const EndOfGame = (props) => {
  const { userLoggedIn } = props;

  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);
  const [foundUser, setFoundUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/user/account").then((res) => {
      setFoundUser(res.data);
    });
  }, []);

  // gets array of all games in db
  useEffect(() => {
    axios.get("http://localhost:8000/api/games/").then((res) => {
      setGames(res.data);
    });
  }, []);

  // gets array of all players in db
  useEffect(() => {
    axios.get("http://localhost:8000/api/players/").then((res) => {
      setPlayers(res.data);
    });
  }, []);

  // deletes one player from db
  const deletePlayer = (onePlayerId) => {
    axios
      .delete(`http://localhost:8000/api/players/${onePlayerId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("error at deletePlayer");
      });
  };

  // deletes one game from db
  const deleteGame = (oneGameId) => {
    axios
      .delete(`http://localhost:8000/api/games/${oneGameId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("error at deleteGame");
      });
  };

  // deletes all games and players from db
  // goals-- eventually change this function to delete only this game, and the players associated with this game
  const clearAllGamesAndPlayers = (e) => {
    for (const player of players) {
      deletePlayer(player._id);
      console.log(`${player.nickname} deleted`);
    }

    for (const game of games) {
      deleteGame(game._id);
      console.log(`${game.code} deleted`);
    }

    navigate("/");

    // if (!userLoggedIn.email){
    //     navigate("/join-game");
    // } else {
    //     navigate("/account");
    // }
    // userLoggedIn.userId ? navigate("/account"): navigate("/join-game")
  };

  return (
    <div id="EndOfGame" className="page-bg">
      <img className="gif" src={epic} alt="epic" />
      <div className="box-shadow container-sm">
        <div className="eog">
          <h2>Thanks for Playing!</h2>
          <button
            className="btn"
            onClick={(e) => clearAllGamesAndPlayers(games, players)}
          >
            Start New Game
          </button>
          <h6>Group Project by Ashwin S., Jeremy H., and Neoma W.</h6>
        </div>
      </div>
    </div>
  );
};

export default EndOfGame;
