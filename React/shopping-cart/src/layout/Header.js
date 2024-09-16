import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: X</span>
      </Link>
    </header>
  );
}

export default Header;
