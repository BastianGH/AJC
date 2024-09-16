import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <span>Routemate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Acceuil
        </NavLink>
        <NavLink to="/products" className="link">
          Produits
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
