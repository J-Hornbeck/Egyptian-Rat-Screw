import React from "react";
import GameScript from "../components/GameScript";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Navbar = () => {
  return (
    <Col className="col-sm navbar c-4 ms-2">
      <div>
        <p>Players at Table:</p>
        <p>Player 1: 13 cards</p>
        <p>Player 2: 8 cards</p>
        <p>Player 3: 15 cards</p>
        <p>Player 4: 11 cards</p>
        <p>Play Stack: 5 cards</p>
      </div>
      <div>
        <p>Game Rules:</p>
        <p>Rule 1</p>
        <p>Rule 2</p>
        <p>Rule 3</p>
        <p>Rule 4</p>
      </div>
      <div>
        <button className="btn">Exit Game</button>
        <button className="btn">Restart Game</button>
      </div>
      <p>Game ID:</p>
    </Col>
  );
};

export default Navbar;
