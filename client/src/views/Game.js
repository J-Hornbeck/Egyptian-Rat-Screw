import React, { useState, useEffect } from "react";
import SlapRules from "../components/SlapRules";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar";
import axios from "axios";

const Game = () => {
  const [players, setPlayers] = useState([]);
  const [drawPile, setDrawPile] = useState([]);
  const [inGame, setInGame] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`).then((res) => {
      console.log(res.data);
      setPlayers(res.data);
    });
  }, []);

  document.body.onkeydown =
    ("keydown",
    (e) => {
      if (e.which === 32) {
        console.log("Slapped");
      }
    });

  return (
    <div className="">
      <Row className="bg-6">
        <Navbar />
        <Col className="col-11 board tabletop">
          {/* top row */}
          <Row className="mt-4 me-4">
            {/* if there are 5 players display */}
            {players.length >= 5 && players[4].deck.length > 0 ? (
              <Col className="col-2 text-center p-tl">
                <p className="player other">{players[4].nickname}</p>
                <div className="card-back"></div>
              </Col>
            ) : players.length >= 5 ? (
              <Col className="col-2 text-center p-tl">
                <p className="player other">{players[4].nickname}</p>
              </Col>
            ) : null}

            {/* if there are 2 players display */}
            {players.length >= 2 && players[1].deck.length > 0 ? (
              <Col className="flex col-2 text-center p-tc">
                <p className="player other">{players[1].nickname}</p>
                <div className="card-back"></div>
              </Col>
            ) : players.length >= 2 ? (
              <Col className="col-2 text-center p-tc">
                <p className="player other">{players[1].nickname}</p>
              </Col>
            ) : null}

            {/* if there are 6 players display */}
            {players.length >= 6 && players[5].deck.length > 0 ? (
              <Col className="flex col-2 text-center p-tr">
                <p className="player other">{players[5].nickname}</p>
                <div className="card-back"></div>
              </Col>
            ) : players.length >= 6 ? (
              <Col className="flex col-2 text-center p-tr">
                <p className="player other">{players[5].nickname}</p>
              </Col>
            ) : null}
          </Row>

          {/* middle row */}
          <Row className="me-4">
            {/* if there are 3 players display */}
            {players.length >= 3 && players[2].deck.length > 0 ? (
              <Col className="flex col-2 text-center p-ml">
                <p className="player other">{players[2].nickname}</p>
                <div className="card-back"></div>
              </Col>
            ) : players.length >= 3 ? (
              <Col className="flex col-2 text-center p-ml">
                <p className="player other">{players[2].nickname}</p>
              </Col>
            ) : null}

            {/* this is for the deck pile */}
            {/* if deck is empty display "Play deck" if not empty show card */}
            {drawPile.length === 0 && inGame === false ? (
              <Col className="flex col-2 p-mc card-back"></Col>
            ) : drawPile.length === 0 && inGame === true ? (
              <Col className="flex col-2 text-center p-mc">
                <p className="player">Play a card</p>
              </Col>
            ) : drawPile.length > 0 ? (
              <Col className="flex col-2 text-center p-mc">
                <p className="player">{drawPile[drawPile.length - 1]}</p>
              </Col>
            ) : null}

            {/* if there are 4 players display */}
            {players.length >= 4 && players[3].deck.length > 0 ? (
              <Col className="flex col-2 text-center p-mr">
                <p className="player other p-5">{players[3].nickname}</p>
                <div className="card-back"></div>
              </Col>
            ) : players.length >= 4 ? (
              <Col className="col-2 text-center p-mr">
                <p className="player other">{players[3].nickname}</p>
              </Col>
            ) : null}
          </Row>

          {/* bottom row */}
          <Row>
            {/* if there are 7 players display */}
            {players.length >= 7 && players[6].deck.length > 0 ? (
              <Col className="flex col-2 text-center p-bl">
                <div className="card-back"></div>
                <p className="player other">{players[6].nickname}</p>
              </Col>
            ) : players.length >= 7 ? (
              <Col className="flex col-2 text-center p-bl">
                <p className="player other">{players[6].nickname}</p>
              </Col>
            ) : null}
            {/* if player has any cards */}
            {players && players.length > 0 && players[0].deck.length > 0 ? (
              <Col className="col-4 text-center p-bc">
                <div className="card-back"></div>
                <p className="player">{players[0].nickname}</p>
              </Col>
            ) : players && players.length > 0 ? (
              <Col className="col-4 text-center p-bc">
                <p className="player">{players[0].nickname}</p>
              </Col>
            ) : null}
            {/* if there are 8 players display */}
            {players.length >= 8 && players[7].deck.length > 0 ? (
              <Col className="flex col-2 text-center p-br">
                <div className="card-back"></div>
                <p className="player other">{players[7].nickname}</p>
              </Col>
            ) : players.length >= 8 ? (
              <Col className="flex col-2 text-center p-br">
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
