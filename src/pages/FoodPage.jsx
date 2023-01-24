import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Pages.css";
import "../components/components.css";
import ItemInfoBox from "../components/ItemInfoBox";
import ItemBubble from "../components/ItemBubble";

export default function FoodPage() {
  const { globalMenu, itemOnDisplay, setItemOnDisplay } =
    useContext(CartContext);

  // const [itemOnDisplay, setItemOnDisplay] = useState("TEST");

  function showInfo(item) {
    const flyOver = document.getElementById("item-overlay");
    flyOver.classList.toggle("overlay-hidden");
    flyOver.classList.toggle("overlay-flex");

    setItemOnDisplay(item);
  }

  return (
    <div id="menu-page" className="page">
      <main id="menu-wrapper">
        <section id="food-menu" className="menu-section">
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
