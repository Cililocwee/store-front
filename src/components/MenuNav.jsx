import React from "react";
import { Link } from "react-router-dom";
export default function MenuNav() {
  return (
    <div id="menu-nav">
      <Link to="/menu">Menu |</Link>
      <Link to="/menu/coffee">Coffee</Link>
      <Link to="/menu/tea">Tea</Link>
      <Link to="/menu/food">Food</Link>
    </div>
  );
}
