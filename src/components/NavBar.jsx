import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import TeaLogo from "../assets/tea.svg";
import ShoppingCart from "../assets/shoppingcart.svg";
import DropDown from "./DropDown";

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
      <div className="nav-links">
        <Link to="/tea">
          <span className="nav-link">Tea</span>
        </Link>
        <Link to="/coffee">
          <span className="nav-link">Coffee</span>
        </Link>
        <Link to="/food">
          <span className="nav-link">Food</span>
        </Link>
        <Link to="/cart">
          <div id="shoppingcart">
            <img src={ShoppingCart} alt="shopping cart" />
          </div>
        </Link>
      </div>
    </div>
  );
}
