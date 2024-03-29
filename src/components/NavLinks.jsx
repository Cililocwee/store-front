import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import ShoppingCart from "../assets/shoppingcart.svg";

export default function NavLinks() {
  const { cart } = useContext(CartContext);
  return (
    <div className="nav-links">
      <Link to="/" id="navbar-home-label">
        <span className="nav-link">Home</span>
      </Link>
      <Link to="/menu">
        <span className="nav-link">Menu</span>
      </Link>
      <Link to="/contact">
        <span className="nav-link">Contact</span>
      </Link>
      <Link to="/about">
        <span className="nav-link">About</span>
      </Link>
    </div>
  );
}
