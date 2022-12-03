import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import ShoppingCart from "../assets/shoppingcart.svg";
import MenuIcon from "../assets/menuicon.svg";
export default function DropDown() {
  const [viewState, setViewState] = useState("folded");

  function handleClick() {
    if (viewState === "folded") {
      setViewState("unfolded");
    } else if (viewState === "unfolded") {
      setViewState("folded");
    }
  }

  return (
    <div className="dropdown-wrapper">
      <img
        onClick={handleClick}
        className="dropdown-btn"
        src={MenuIcon}
        alt="drop down"
      />
      <div className="dropdown" id={viewState}>
        <Link to="/tea">
          <span onClick={handleClick} className="nav-link">
            Tea
          </span>
        </Link>
        <Link to="/coffee">
          <span onClick={handleClick} className="nav-link">
            Coffee
          </span>
        </Link>
        <Link to="/food">
          <span onClick={handleClick} className="nav-link">
            Food
          </span>
        </Link>
        <Link to="/cart">
          <div id="shoppingcart">
            <img onClick={handleClick} src={ShoppingCart} alt="shopping cart" />
          </div>
        </Link>
      </div>
    </div>
  );
}