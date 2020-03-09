import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__link">
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          Home
        </Link>
        <a className="blank"></a>
        <Link to="/about" style={{ color: "black", textDecoration: "none" }}>
          About
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
