import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Game from "./views/Game";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
