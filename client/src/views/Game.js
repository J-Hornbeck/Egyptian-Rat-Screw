import React, { useState, useEffect } from "react";
import SlapRules from "../components/SlapRules";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import chip_blue from "../static/img/chip_blue.png";
import Popup from "./Popup";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";

const Game = (props) => {
  const [players, setPlayers] = useState([]);
  const [game, setGame] = useState({});
  const [drawPile, setDrawPile] = useState([]);
  const [inGame, setInGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const { id } = useParams();

  console.log("______________________________________");
  console.log(inGame);

  const startGame = (e) => {
    return setInGame(true);
  };

  const endGame = (e) => {
    return setIsGameOver(true);
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`).then((res) => {
      console.log(res.data);
      console.log("we are in the get request for players");
      setPlayers(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/games/${id}`).then((res) => {
      console.log(res.data);
      console.log("we are in the get request for game");
      setGame(res.data);
    });
  }, []);

  // game && game !== {} ? :

  console.log(game);

  document.body.onkeydown =
    ("keydown",
    (e) => {
      if (e.which === 32) {
        console.log("Slapped");
        console.log(drawPile);
        console.log(inGame);
        console.log(players.length);
      }
    });

  // when play changes to a new player do a check to see if that player has 0 or 52 cards
  // if 0 cards skip player
  // if 52 cards setIsGameOver to true

  return (
    <div className="">
      <Row className="bg-6">
        <Navbar />
        <Col className="col-11 board tabletop">
          {isGameOver ? <Popup /> : null}
          {/* top row */}
          <Row id="top" className="mt-4 me-4">
            {/* if there are 5 players display */}
            {players.length >= 5 && inGame === true ? (
              <Col className="col-2 text-center p-tl">
                <p className="player other">{players[4].nickname}</p>
                <img className="chip" src={chip_blue} alt="chip" />
                <div className="card-back players-tb"></div>
              </Col>
            ) : players.length >= 5 ? (
              <Col className="col-2 text-center p-tl">
                <p className="player other">{players[4].nickname}</p>
                {/* <div className="chip"></div> */}
              </Col>
            ) : null}

            {/* if there are 2 players display */}
            {players.length >= 2 && inGame === true ? (
              <Col className=" col-2 text-center p-tc">
                <p className="player other">{players[1].nickname}</p>
                <img className="chip" src={chip_blue} alt="chip" />
                <div className="card-back players-tb"></div>
              </Col>
            ) : players.length >= 2 ? (
              <Col className="col-2 text-center p-tc">
                <p className="player other">{players[1].nickname}</p>
              </Col>
            ) : null}

            {/* if there are 6 players display */}
            {players.length >= 6 && inGame === true ? (
              <Col className=" col-2 text-center p-tr">
                <p className="player other">{players[5].nickname}</p>
                <img className="chip" src={chip_blue} alt="chip" />
                <div className="card-back players-tb"></div>
              </Col>
            ) : players.length >= 6 ? (
              <Col className="col-2 text-center p-tr">
                <p className="player other">{players[5].nickname}</p>
              </Col>
            ) : null}
          </Row>

          {/* middle row */}
          <Row className="me-4">
            {/* if there are 3 players display */}
            {players.length >= 3 && inGame === true ? (
              <Col>
                <div className="card-back player-3"></div>
                <Col className=" col-2 text-center p-ml">
                  <p className="player other">{players[2].nickname}</p>
                  <img className="chip" src={chip_blue} alt="chip" />
                </Col>
              </Col>
            ) : players.length >= 3 ? (
              <Col className=" col-2 text-center p-ml">
                <p className="player other">{players[2].nickname}</p>
              </Col>
            ) : null}

            {/* this is for the deck pile */}
            {/* if deck is empty display "Play deck" if not empty show card */}
            {drawPile.length === 0 && inGame === false ? (
              <Col onClick={startGame} className=" col-2 p-mc card-back"></Col>
            ) : drawPile.length === 0 && inGame === true ? (
              <Col className=" col-2 text-center p-mc">
                <p className="player">Play a card</p>
              </Col>
            ) : drawPile.length > 0 ? (
              <Col className=" col-2 text-center p-mc">
                {/* <p className="player">{drawPile[drawPile.length - 1]}</p> */}
              </Col>
            ) : null}

            {/* if there are 4 players display */}
            {players.length >= 4 && inGame === true ? (
              <Col>
                <div className="card-back player-4"></div>
                <Col className=" col-2 text-center p-mr">
                  <p className="player other">{players[3].nickname}</p>
                  <img className="chip" src={chip_blue} alt="chip" />
                </Col>
              </Col>
            ) : players.length >= 4 ? (
              <Col className="col-2 text-center p-mr">
                <p className="player other">{players[3].nickname}</p>
              </Col>
            ) : null}
          </Row>

          {/* bottom row */}
          <Row id="bottom">
            {/* if there are 7 players display */}
            {players.length >= 7 && inGame === true ? (
              <Col className=" col-2 text-center p-bl">
                <div className="card-back players-tb"></div>
                <p className="player other">{players[6].nickname}</p>
                <img className="chip" src={chip_blue} alt="chip" />
              </Col>
            ) : players.length >= 7 ? (
              <Col className=" col-2 text-center p-bl">
                <p className="player other">{players[6].nickname}</p>
              </Col>
            ) : null}
            {/* if player has any cards */}
            {players && players.length > 0 && inGame === true ? (
              <Col className="col-4 text-center p-bc">
                <div className="card-back players-tb"></div>
                <p onClick={endGame} className="player">
                  {players[0].nickname}
                </p>
              </Col>
            ) : players && players.length > 0 ? (
              <Col className="col-4 text-center p-bc">
                <p onClick={endGame} className="player">
                  {players[0].nickname}
                </p>
                <img className="chip" src={chip_blue} alt="chip" />
              </Col>
            ) : null}
            {/* if there are 8 players display */}
            {players.length >= 8 && inGame === true ? (
              <Col className=" col-2 text-center p-br">
                <div className="card-back players-tb"></div>
                <p className="player other">{players[7].nickname}</p>
                <img className="chip" src={chip_blue} alt="chip" />
              </Col>
            ) : players.length >= 8 ? (
              <Col className=" col-2 text-center p-br">
                <p className="player other">{players[7].nickname}</p>
              </Col>
            ) : null}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Game;
