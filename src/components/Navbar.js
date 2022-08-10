import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
      console.log(error);
    }
  }

  if (currentUser)
    return (
      <div className="navbar">
        <div className="logo">
          <img
            style={{
              width: "100px",
              position: "absolute",
              top: 0,
            }}
            src={Logo}
            alt="logo"
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              // style={{ paddingTop: "0.4rem" }}
              className="nav-link"
              to="/Home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              // style={{ paddingTop: "0.4rem" }}
              className="nav-link"
              to="/PriceOfferings"
            >
              Price offerings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              // style={{ paddingTop: "0.4rem" }}
              className="nav-link"
              to="/Archive"
            >
              Archive
            </Link>
          </li>
          <li className="nav-item">
            <Link
              // style={{ paddingTop: "0.4rem" }}
              className="nav-link"
              to="/Support"
            >
              Support
            </Link>
          </li>
          <Button
            class="btn btn-primary btn-sm"
            style={{
              backgroundColor: "#cc2c2c",
              borderColor: "#cc2c2c",
              color: "white",
              backgroundSize: "50%",
            }}
            onClick={handleLogout}
          >
            logout
          </Button>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} color="#535252" style={{ color: "#535252" }} />
          ) : (
            <FaBars size={30} color="#535252" style={{ color: "#535252" }} />
          )}
        </div>
      </div>
    );
  else {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          paddingTop: "1rem",
        }}
      >
        <h2 className="text-center mb-4">Log In Page</h2>
      </div>
    );
  }
};
export default Navbar;
