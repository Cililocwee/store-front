import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import TeaLogo from "../assets/tea.svg";
// import ShoppingCart from "../assets/shoppingcart.svg";
import DropDown from "./DropDown";
// import { CartContext } from "../CartContext";
import NavLinks from "./NavLinks";

export default function NavBar() {
  // const { cart } = useContext(CartContext);
  return (
    <div className="navbar">
      <Link to="/home">
        <div id="logobox">
          <img alt="tea logo" src={TeaLogo} />
          <span id="storename">Tea Time</span>
        </div>
      </Link>
      <DropDown />
      <NavLinks />
    </div>
  );
}
