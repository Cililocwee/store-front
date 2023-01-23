import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import menu from "../menuitems/menu";
import "./Pages.css";
import "../components/components.css";

export default function MenuPage() {
  const { addOneItem, globalMenu } = useContext(CartContext);
  return (
    <div id="menu-page">
      <h2>I am a menu page</h2>
      <main id="menu-wrapper">
        {globalMenu.map((item) => (
          <section className="menu-item">
            <img src={item.itemPic} alt="" />
            <h3>{item.itemName}</h3>
            {/* <h4>{item.itemDescription}</h4> */}
            <h5>${item.itemPrice}</h5>
            <div className="amount-input">
              <button onClick={() => addOneItem(item.itemName)}>+</button>
              <p>{item.itemTotal}</p>
              <button>-</button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
