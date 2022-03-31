import React from "react";
import EndOfGame from "../components/EndOfGame";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <EndOfGame />
      </div>
    </div>
  );
};

export default Popup;
