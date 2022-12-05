import React, { useState, useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import ShoppingCart from "../assets/shoppingcart.svg";
import MenuIcon from "../assets/menuicon.svg";
import { CartContext } from "../CartContext";

export default function DropDown() {
  const [viewState, setViewState] = useState("folded");
  const { cart } = useContext(CartContext);

  function handleClick(e) {
    if (viewState === "folded") {
      setViewState("unfolded");
    } else if (viewState === "unfolded") {
      setViewState("folded");
    }
    document
      .getElementById("dropdown-wrapper")
      .classList.toggle("dropdownactive");
  }

  return (
    <div className="dropdown-wrapper" id="dropdown-wrapper">
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
            <p id="numberincart">{cart.length}</p>
            <img onClick={handleClick} src={ShoppingCart} alt="shopping cart" />
          </div>
        </Link>
      </div>
    </div>
  );
}
