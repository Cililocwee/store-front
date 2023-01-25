import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Pages.css";
import "../components/components.css";
import { Link } from "react-router-dom";
import MenuSplash from "../components/MenuSplash";
import CoffeeSplash from "../assets/coffees.jpg";
import CakeSplash from "../assets/cakes.jpg";
import TeaSplash from "../assets/teas.jpg";

export default function MenuPage() {
  const { itemOnDisplay } = useContext(CartContext);

  return (
    <main id="menu-page" className="page">
      <Link to="/menu/coffee">
        <h2>Coffees</h2>
        <MenuSplash image={CoffeeSplash} />
      </Link>

      <Link to="/menu/tea">
        <h2>Teas</h2>
        <MenuSplash image={TeaSplash} />
      </Link>

      <Link to="/menu/food">
        <h2>Food</h2>
        <MenuSplash image={CakeSplash} />
      </Link>
    </main>
  );
}
