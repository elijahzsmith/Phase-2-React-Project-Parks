import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "auto",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#C56C39",
  textDecoration: "none",
  color: "white",
  radius: "25px",
  borderRadius: "5px",
};

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        <img
          // src="https://www.kindpng.com/picc/m/731-7310086_white-buffalo-png-download-transparent-png.png"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg"
          // src="https://www.downloadclipart.net/large/mountain-transparent-background.png"
          alt="logo"
          className="logo"
        ></img>
      </NavLink>
      <ul className="nav-links">
        <NavLink exact to="/parkslist" style={linkStyles}>
          <li>Parks and Sites</li>
        </NavLink>
        <NavLink exact to="/savedparks" style={linkStyles}>
          <li>Saved Parks</li>
        </NavLink>
        <NavLink exact to="/travellog" style={linkStyles}>
          <li>Travel Log</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
