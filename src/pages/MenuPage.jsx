import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Pages.css";
import "../components/components.css";
import ItemInfoBox from "../components/ItemInfoBox";
import { Link } from "react-router-dom";
import FloatingCart from "../components/FloatingCart";

export default function MenuPage() {
  const { itemOnDisplay } = useContext(CartContext);

  return (
    <div id="menu-page" className="page">
      <main id="menu-wrapper">
        <section id="coffee-menu" className="menu-section">
          <div className="menu-section-header">
            <Link to="/menu/coffee">
              <h2>Coffees</h2>
            </Link>
          </div>
        </section>

        <section id="tea-menu" className="menu-section">
          <div className="menu-section-header">
            <Link to="/menu/tea">
              <h2>Teas</h2>
            </Link>
          </div>
        </section>

        <section id="food-section" className="menu-section">
          <div className="menu-section-header">
            <Link to="/menu/food">
              <h2>Food</h2>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
