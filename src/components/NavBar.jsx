import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import TeaLogo from "../assets/tea.svg";
import ShoppingCart from "../assets/shoppingcart.svg";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div id="logobox">
          <img alt="tea logo" src={TeaLogo} />
          <span id="storename">Tea Time</span>
        </div>
      </Link>
      <ul>
        <Link to="/bubble-tea">
          <li>Bubble Tea</li>
        </Link>
        <Link to="/pearl-tea">
          <li>Pearl Tea</li>
        </Link>
        <Link to="/classic-tea">
          <li>Classic Tea</li>
        </Link>
        <Link to="/non-tea">
          <li>Non-Tea</li>
        </Link>
        <Link to="/cart">
          <li id="shoppingcart">
            <img src={ShoppingCart} alt="shopping cart" />
          </li>
        </Link>
      </ul>
    </div>
  );
}
