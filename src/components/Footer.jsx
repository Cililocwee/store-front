import React from "react";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import { Link } from "react-router-dom";
import TeaLogo from "../assets/tea.svg";
import DropDown from "./DropDown";

import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <div className="footer">
      <div className="bot-nav">
        <div className="nav-label">
          <h3>Navigation</h3>
        </div>
        <div className="bot-nav-list">
          <NavLinks />
          {/* <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li> */}
        </div>
      </div>
      <div className="site-info">
        <p>Created by Corrie Stroup | 2022</p>
      </div>
      <div className="site-info-mobile">Corrie Stroup 2022</div>
      <div className="inquiries">
        <li>For inquiries:</li>
        <li>corrie.stroup@gmail.com</li>
        <div className="socials">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/corriestroup/"
            >
              <img src={LinkedIn} alt="" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Cililocwee/"
            >
              <img src={Github} alt="" />
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
