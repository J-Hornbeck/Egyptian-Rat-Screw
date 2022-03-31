import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./views/Game";
import Card from "./components/Card";
import PlayerJoinGame from "./components/PlayerJoinGame";
import NewGameForm from "./components/NewGameForm";
import Login from "./views/Login";
import Account from "./views/Account";
import Register from "./views/Register";
import EndOfGame from "./components/EndOfGame";
import HandleSlapScript from "./components/HandleSlapScript";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({});

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/register"
            element={
              <Register
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
              />
            }
          />
          <Route
            path="/account"
            element={
              <Account
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
              />
            }
          />
          <Route
            path="/"
            element={
              <Login
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
              />
            }
          />
          <Route path="/games/:id" element={<Game />} />
          <Route path="/games/" element={<Game />} />
          <Route path="/card" element={<Card />} />
          <Route path="/join-game" element={<PlayerJoinGame />} />
          <Route path="/handle-slap" element={<HandleSlapScript />} />
          <Route
            path="/end-of-game"
            element={<EndOfGame userLoggedIn={userLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
