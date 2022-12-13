import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import TeaLogo from "../assets/tea.svg";
import DropDown from "./DropDown";

import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div id="logobox">
          <img alt="tea logo" src={TeaLogo} />
          <span id="storename">Tea Time</span>
        </div>
      </Link>
      <DropDown />
      <NavLinks />
    </div>
  );
}
