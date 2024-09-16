import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <span className="logo">
        <img src={logo} alt="" />
        <span>Taskmate</span>
      </span>
      <span className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </span>
    </header>
  );
}

export default Header;
