import React from "react";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Gmail from "../assets/gmail.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <section id="bot-nav">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </section>
      <section id="footer-site-information">
        <p>©2023 Corrie Stroup</p>
      </section>
      <section id="inquiries">
        <div className="socials">
          <li>
            <a href="mailto:corrie.stroup@gmail.com">
              <img src={Gmail} alt="" />
            </a>
          </li>
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
      </section>
    </div>
  );
}
