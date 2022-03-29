import React, { useState, useEffect } from "react";
import GameScript from "../components/GameScript";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

const Navbar = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`).then((res) => {
      console.log(res.data);
      setPlayers(res.data);
    });
  }, []);

  return (
    <Col className="col-sm navbar c-4 ms-2 bg-1 justify-content-center">
      {players
        ? players.map((player, index) => (
            <div className=" col-12">
              <p key={index} className="mb-0 text-center">
                {player.nickname}
              </p>

              <p className="mb-0 text-center">{player.deck.length} cards</p>
              <hr className="m-0"></hr>
            </div>
          ))
        : null}
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
