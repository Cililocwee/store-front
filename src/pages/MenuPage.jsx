import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Pages.css";
import "../components/components.css";
import AddToOrderButton from "../components/AddToOrderButton";
import ItemInfoBox from "../components/ItemInfoBox";
import { useState } from "react";
import ItemBubble from "../components/ItemBubble";

export default function MenuPage() {
  const { addOneItem, globalMenu } = useContext(CartContext);

  const [itemOnDisplay, setItemOnDisplay] = useState("TEST");

  function showInfo(item) {
    const flyOver = document.getElementById("item-overlay");
    flyOver.classList.toggle("overlay-hidden");
    flyOver.classList.toggle("overlay-flex");

    setItemOnDisplay(item);
  }

  return (
    <div id="menu-page" className="page">
      <main id="menu-wrapper">
        <section id="coffee-menu" className="menu-section">
          <div className="menu-section-header">
            <h2>Coffee</h2>
          </div>

          <div className="menu-section-body">
            {globalMenu.map(
              (item) =>
                item.itemType === "coffee" && (
                  <ItemBubble item={item} showItem={() => showInfo(item)} />
                )
            )}
          </div>
        </section>

        <section id="tea-menu" className="menu-section">
          <div className="menu-section-header">
            <h2>Tea</h2>
          </div>
          <div className="menu-section-body">
            {globalMenu.map(
              (item) =>
                item.itemType === "tea" && (
                  <ItemBubble item={item} showItem={() => showInfo(item)} />
                )
            )}
          </div>
        </section>

        <section id="food-section" className="menu-section">
          <div className="menu-section-header">
            <h2>Food</h2>
          </div>
          <div className="menu-section-body">
            {globalMenu.map(
              (item) =>
                item.itemType === "food" && (
                  <ItemBubble item={item} showItem={() => showInfo(item)} />
                )
            )}
          </div>
        </section>
      </main>
      <ItemInfoBox item={itemOnDisplay.itemName} />
    </div>
  );
}
