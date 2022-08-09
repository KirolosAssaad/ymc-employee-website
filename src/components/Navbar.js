import react, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/PriceOfferings">Price offerings</Link>
        </li>
        <li className="nav-item">
          <Link to="/Archive">Archive</Link>
        </li>
        <li className="nav-item">
          <Link to="/Support">Support</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#535252" }} />
        ) : (
          <FaBars size={30} style={{ color: "#535252" }} />
        )}
      </div>
    </div>
  );
};
export default Navbar;
