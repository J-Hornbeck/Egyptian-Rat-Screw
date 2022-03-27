import React from "react";
import useScript from "../components/useScript";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar";

const Game = () => {
  return (
    <div className="">
      <Row className="bg-1">
        <Navbar />
        <Col className="col-11 bg-6 board">
          <Row className="mt-4 me-4 justify-content-between">
            <Col className="flex col-2 text-center">
              <p className="player other">If 5 players</p>
            </Col>
            <Col className="flex col-2 text-center">
              <p className="player other">If 2 Players</p>
            </Col>
            <Col className="flex col-2 text-center">
              <p className="player other">If 6 Players</p>
            </Col>
          </Row>
          <Row className="me-4 justify-content-between">
            <Col className="flex col-2 text-center">
              <p className="player other">If 3 players</p>
            </Col>
            <Col className="flex col-2 text-center">
              <p className="player">Play deck</p>
            </Col>
            <Col className="flex col-2 text-center">
              <p className="player other">If 4 Players</p>
            </Col>
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
