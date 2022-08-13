import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useLang } from "../contexts/langContext";
import { useLoading } from "../contexts/loadingContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const { locale, selectLang } = useLang();
  const { loading } = useLoading();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
      console.log(error);
    }
  }

  function handleLangChange() {
    if (locale === "ar-EG") {
      selectLang("en-US");
    } else {
      selectLang("ar-EG");
    }
  }

  if (currentUser)
    return (
      <div
        className="navbar"
        style={
          loading
            ? {
                backdropFilter: "blur(5px)",
                backgroundColor: "#fdfcf4",
                opacity: "0.8",
              }
            : {}
        }
      >
        <div className="logo">
          <img
            style={{
              width: "100px",
              position: "absolute",
              top: 0,
            }}
            src={Logo}
            alt="logo"
            onClick={() => {
              history.push("/");
            }}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              // style={{ paddingTop: "0.4rem" }}
              className="nav-link"
              to="/"
            >
              <FormattedMessage id="home" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              // style={{ paddingTop: "0.4rem" }}
              className="nav-link"
              to="/PriceOfferings"
            >
              <FormattedMessage id="priceOfferings" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              // style={{ paddingTop: "0.4rem" }}
              className="nav-link"
              to="/Archive"
            >
              <FormattedMessage id="archive" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              // style={{ paddingTop: "0.4rem" }}
              className="nav-link"
              to="/Support"
            >
              <FormattedMessage id="support" />
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
            <FormattedMessage id="logout" />
          </Button>
          <Button
            class="btn btn-primary btn-sm"
            style={{
              backgroundColor: "#cc2c2c",
              borderColor: "#cc2c2c",
              color: "white",
              backgroundSize: "50%",
              marginLeft: "10px",
            }}
            onClick={handleLangChange}
          >
            <FormattedMessage id="lang" />
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
        style={
          loading
            ? {
                backdropFilter: "blur(5px)",
                backgroundColor: "#fdfcf4",
                opacity: "0.8",
                pointerEvents: "none",
                justifyContent: "center",
                display: "flex",
                paddingTop: "1rem",
              }
            : {
                justifyContent: "center",
                display: "flex",
                paddingTop: "1rem",
                pointerEvents: "all",
              }
        }
      >
        <h2 className="text-center mb-4">
          <FormattedMessage id="login" />
        </h2>
        <Button
          class="btn btn-primary btn-sm"
          style={{
            backgroundColor: "#cc2c2c",
            borderColor: "#cc2c2c",
            color: "white",
            backgroundSize: "50%",
            marginLeft: "10px",
          }}
          onClick={handleLangChange}
        >
          <FormattedMessage id="lang" />
        </Button>
      </div>
    );
  }
};
export default Navbar;
