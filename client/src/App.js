import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./views/Game";
import Login from "./views/Login";
import Account from "./views/Account";
import Register from "./views/Register";

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState({})



  return (
    <div className="">
      <BrowserRouter>
        <Routes>
        <Route path="/register" element={<Register 
            userLoggedIn = {userLoggedIn}
            setUserLoggedIn = {setUserLoggedIn}
            />} />
          <Route path="/login" element={<Login 
            userLoggedIn = {userLoggedIn}
            setUserLoggedIn = {setUserLoggedIn}
            />} />
            <Route path="/account" element={<Account 
            userLoggedIn = {userLoggedIn}
            setUserLoggedIn = {setUserLoggedIn}
            />} />
          <Route path="/" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
