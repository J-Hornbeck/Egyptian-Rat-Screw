import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Game from "./views/Game";
import Card from "./components/Card";
import PlayerJoinGame from "./components/PlayerJoinGame";
import NewGameForm from "./components/NewGameForm";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/card" element={<Card />} />
          <Route path="/join-game" element={<PlayerJoinGame />} />
          <Route path="/new-game" element={<NewGameForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
