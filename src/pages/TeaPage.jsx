import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Pages.css";
import "../components/components.css";
import ItemBubble from "../components/ItemBubble";
import MenuNav from "../components/MenuNav";
import FloatingCart from "../components/FloatingCart";

export default function TeaPage() {
  const { globalMenu, setItemOnDisplay } = useContext(CartContext);

  function readyItem(item) {
    setItemOnDisplay(item);
  }

  return (
    <div id="menu-page" className="page">
      <MenuNav />
      <main id="tea-menu" className="menu-section">
        <div className="menu-section-header">
          <h2>Tea</h2>
        </div>

        <div className="menu-section-body">
          {globalMenu.map(
            (item) =>
              item.itemType === "tea" && (
                <ItemBubble item={item} showItem={() => readyItem(item)} />
              )
          )}
        </div>
      </main>
    </div>
  );
}
