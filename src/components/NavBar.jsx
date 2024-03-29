import React from "react";
import { Link } from "react-router-dom";
import TeaLogo from "../assets/tea.svg";

import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div id="logobox">
          <img alt="tea logo" src={TeaLogo} />
          <h1 id="storename">Starhill Place</h1>
        </div>
      </Link>
      <NavLinks />
      <section id="nav-btns">
        <button id="sign-in-btn">Sign In</button>
        <button id="join-now-btn">Join Now</button>
      </section>
    </div>
  );
}
