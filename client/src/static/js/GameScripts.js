import React, { useState, useEffect } from "react";
import axios from "axios";

const GameScripts = () => {

   const [players, setPlayers] = useState([]);

   useEffect(() => {
      axios.get(`http://localhost:8000/api/players`).then((res) => {
         console.log(res.data);
         setPlayers(res.data);
      });
   }, []);


   
}

export default GameScripts;