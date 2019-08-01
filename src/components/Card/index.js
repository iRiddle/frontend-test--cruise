import React from "react";
import cx from "classnames";

import "./style.css";

const getLoadColor = load => {
  if (load >= 0 && load < 10) {
    return "not-loaded";
  }
  if (load >= 10 && load < 30) {
    return "bit-loaded";
  }
  if (load >= 30 && load < 60) {
    return "medium-loaded";
  }
  if (load >= 60 && load < 90) {
    return "heavy-loaded";
  }
  if (load >= 90) {
    return "very-loaded";
  }
};

const Card = ({ load, bookingTime }) => {
  const color = getLoadColor(load);
  return (
    <div className="tables__card">
      <div className="card__header">
        <div className="header__left-side">
          <span className={cx("left-side__load", color)}>{load}</span>
          <span className="left-side__percent">&#37;</span>
        </div>
        <div className="header__right-side">
          <span className="right-side__dot" />
          <span className="right-side__dot" />
          <span className="right-side__dot" />
        </div>
      </div>
      <hr className="card__divider" />
      <div className="card__body-time">
        {bookingTime.map(book => (
          <div
            className={cx("body-time__title", {
              isBooked: book.isBooked === true
            })}
          >
            <span>{book.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
