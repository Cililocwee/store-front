import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import ShoppingCart from "../assets/shoppingcart.svg";

export default function NavLinks() {
  const { cart } = useContext(CartContext);
  return (
    <div className="nav-links">
      <Link>
        <span className="nav-link">Home</span>
      </Link>
      <Link>
        <span className="nav-link">Menu</span>
      </Link>
      <Link>
        <span className="nav-link">Contact</span>
      </Link>
      {/* <Link to="/tea">
        <span className="nav-link">Tea</span>
      </Link>
      <Link to="/coffee">
        <span className="nav-link">Coffee</span>
      </Link>
      <Link to="/food">
        <span className="nav-link">Food</span>
      </Link> */}
      <Link to="/home">
        <span className="nav-link">About</span>
      </Link>
      <Link to="/cart">
        <div id="shoppingcart">
          <p id="numberincart">{cart.length}</p>
          <img src={ShoppingCart} alt="shopping cart" />
        </div>
      </Link>
    </div>
  );
}
