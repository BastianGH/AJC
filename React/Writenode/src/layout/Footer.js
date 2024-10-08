import { Link } from "react-router-dom";
import "./Layout.css";

const Footer = () => {
  return (
    <footer>
      <p>
        © 2030 <Link to="/">WriteNode</Link>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
