import React from "react";
import "./style.css";
const LeftBar = ({ seats }) => {
  return (
    <div className="left-bar">
      {seats.map((seat, index) => (
        <div className="left-bar__container">
          <div className = 'bar-container__digit'>{index + 1}</div>
          <div className="bar-container__title">{seat.title}</div>
        </div>
      ))}
    </div>
  );
};

export default LeftBar;
