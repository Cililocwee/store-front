import React from "react";
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
          <span id="storename">Starhill Place</span>
        </div>
      </Link>
      <DropDown />
      <NavLinks />
      <section className="nav-btns">
        <button id="sign-in-btn">Sign In</button>
        <button id="join-now-btn">Join Now</button>
      </section>
    </div>
  );
}
