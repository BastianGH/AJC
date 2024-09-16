import "./Header.css";
import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <a href="/">Acceuil</a>
    </header>
  );
};

export default Header;
