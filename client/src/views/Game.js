import React, { useState, useEffect } from "react";
import GameScript from "../components/GameScript";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Game = () => {
  const [players, setPlayers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`).then((res) => {
      console.log(res.data);
      setPlayers(res.data);
    });
  }, []);

  return (
    <div className="">
      <Row className="bg-1">
        <Navbar />
        <Col className="col-11 board tabletop">
          <Row className="mt-4 me-4 justify-content-between">
            {players.length >= 5 ? (
              <Col className="flex col-2 text-center">
                <p className="player other">{players[4].nickname}</p>
              </Col>
            ) : null}
            {players.length >= 2 ? (
              <Col className="flex col-2 text-center">
                <p className="player other">If 2 Players</p>
              </Col>
            ) : null}
            {players.length >= 6 ? (
              <Col className="flex col-2 text-center">
                <p className="player other">If 6 Players</p>
              </Col>
            ) : null}
          </Row>
          <Row className="me-4 justify-content-between">
            {players.length >= 3 ? (
              <Col className="flex col-2 text-center">
                <p className="player other">If 3 players</p>
              </Col>
            ) : null}
            <Col className="flex col-2 text-center">
              <p className="player">Play deck</p>
            </Col>
            {players.length >= 4 ? (
              <Col className="flex col-2 text-center">
                <p className="player other">If 4 Players</p>
              </Col>
            ) : null}
          </Row>
          <Row className="flex justify-content-center mb-4">
            <Col className="flex col-4 text-center">
              <p className="player">Player hand</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Game;
