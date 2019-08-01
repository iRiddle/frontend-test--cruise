import React from "react";

import "./style.css";

const Header = ({ links }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <div className="logo-doughnut" />
        <span> restus </span>
      </div>
      <div className="header__links">
        <div className="links">
          {links.map(link => (
            <a className="link">{link.title}</a>
          ))}
        </div>
        <div className="icons">
          {[0, 1, 2, 3].map((item, index) => (
            <span key={index} className="icon" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
