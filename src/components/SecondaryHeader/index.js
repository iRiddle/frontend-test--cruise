import React from "react";
import "./style.css";
const SecondaryHeader = ({ dates }) => {
  return (
    <div className="secondary-header">
      {dates.map((date, index) => (
        <div className="secondary-header__container-title" key={date.id}>
          {index === 0 && <div className="container-title_current-day" />}
          <span className="container-title__date">{date.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SecondaryHeader;
