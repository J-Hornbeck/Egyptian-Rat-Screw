import React, { useState, useEffect } from "react";
import SlapRules from "../components/SlapRules";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const [players, setPlayers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`).then((res) => {
      console.log(res.data);
      setPlayers(res.data);
    });
  }, []);

  return (
    <Col className="col-sm navbar c-4 ms-2 bg-nv justify-content-center">
      {players
        ? players.map((player, index) => (
            <div className=" col-12">
              <div key={index} className="mb-0 text-center">
                {player.nickname} <hr className="m-0"></hr>
                {player.deck.length} cards
              </div>
              <hr className="m-0 bg-nv"></hr>
            </div>
          ))
        : null}
      <div className="col-12 text-center">
        <hr className="m-0" />
        <p>Game Rules:</p>
        <p>Rule 1</p>
        <p>Rule 2</p>
        <p>Rule 3</p>
        <p>Rule 4</p>
      </div>
      <p className="mb-0 text-center">Game ID:</p>
      <p className="mb-0 mt-0 text-center">{id}</p>
    </Col>
  );
};

export default Navbar;
