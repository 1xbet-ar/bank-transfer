import React from "react";
import "./TetherCard.css";
import tetherLogo from "../assets/tether.png";

const TetherOnTronCard = ({ onClick }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <div className="card-top">
        <img src={tetherLogo} className="card-logo" alt="Tether" />
      </div>
      <div className="card-bottom">
        Tether (USDT-TRC20)
      </div>
    </div>
  );
};

export default TetherOnTronCard;
