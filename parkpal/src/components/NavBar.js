import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg"
          alt="logo"
          className="logo"
        ></img>
      </NavLink>
      <ul className="nav-links">
        <NavLink exact to="/" style={linkStyles}>
          <li>Parks</li>
        </NavLink>
        <NavLink exact to="/favorites" style={linkStyles}>
          <li>Favorites</li>
        </NavLink>
        <NavLink exact to="/scavenger" style={linkStyles}>
          <li>Scavenger</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
