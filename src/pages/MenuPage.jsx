import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Pages.css";
import "../components/components.css";
import ItemInfoBox from "../components/ItemInfoBox";
import { Link } from "react-router-dom";

export default function MenuPage() {
  const { itemOnDisplay, setItemOnDisplay } = useContext(CartContext);

  return (
    <div id="menu-page" className="page">
      <main id="menu-wrapper">
        <section id="coffee-menu" className="menu-section">
          <div className="menu-section-header">
            <Link to="/menu/coffee">
              <h2>Coffee</h2>
            </Link>
          </div>
        </section>

        <section id="tea-menu" className="menu-section">
          <div className="menu-section-header">
            <Link to="/menu/tea">
              <h2>Tea</h2>
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
      <ItemInfoBox item={itemOnDisplay.itemName} />
    </div>
  );
}
