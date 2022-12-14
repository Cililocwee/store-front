import React, { useState, useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import ShoppingCart from "../assets/shoppingcart.svg";
import MenuIcon from "../assets/menuicon.svg";
import { CartContext } from "../CartContext";

export default function DropDown() {
  const [viewState, setViewState] = useState("folded");
  const { cart } = useContext(CartContext);

  function handleClick() {
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
        <Link to="/">
          <span onClick={handleClick} className="nav-link">
            Home
          </span>
        </Link>
        <Link to="/menu">
          <span onClick={handleClick} className="nav-link">
            Menu
          </span>
        </Link>
        <Link to="/contact">
          <span onClick={handleClick} className="nav-link">
            Contact
          </span>
        </Link>
        <Link to="/about">
          <span onClick={handleClick} className="nav-link">
            About
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
