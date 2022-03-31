import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PlayerJoinGame = (props) => {
    const[ nickname, setNickname ] = useState("");
    const [ gameCode, setGameCode ] = useState("");
    const [ deck, setDeck ] = useState();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
            nickname,
            deck,
            gameCode
        })

            .then((res) => {
                // console.log(res);
                console.log(res.data.player);
                
                setNickname("");
                setGameCode("");
                setDeck([]);
            })
            .catch((err) => {
                console.log(err)
            });
        
            navigate("/game");
    };



  return (
    <div>
      <h1>Join Game!</h1>
      <form onSubmit={submitHandler}>
        <div>
            <label>Enter Nickname:</label><br />
            <input type="text" name="nickname" value={ nickname } onChange={(e)=>setNickname(e.target.value)} />
        </div>
        <div>
            <label>Enter Game Code</label><br />
            <input type="text" name="gameCode" value={ gameCode } onChange={(e)=>setGameCode(e.target.value)} />
        </div>
        <button type="submit">Join Game</button>
    </form>
    </div>
  );
};

export default PlayerJoinGame;
