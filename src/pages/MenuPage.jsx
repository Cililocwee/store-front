import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Pages.css";
import "../components/components.css";

export default function MenuPage() {
  const { addOneItem, globalMenu, subtractOneItem } = useContext(CartContext);
  return (
    <div id="menu-page">
      <main id="menu-wrapper">
        <section id="coffee-menu" className="menu-section">
          <div className="menu-section-header">
            <h2>Coffee</h2>
          </div>

          <div className="menu-section-body">
            {globalMenu.map(
              (item) =>
                item.itemType === "coffee" && (
                  <section className="menu-item">
                    <img src={item.itemPic} alt="" />
                    <h3>{item.itemName}</h3>
                    {/* <h4>{item.itemDescription}</h4> */}
                    <h5>${item.itemPrice}</h5>
                    <div className="amount-input">
                      <button onClick={() => addOneItem(item.itemName)}>
                        +
                      </button>
                      <p>{item.itemTotal}</p>
                      <button onClick={() => subtractOneItem(item.itemName)}>
                        -
                      </button>
                    </div>
                  </section>
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
                  <section className="menu-item">
                    <img src={item.itemPic} alt="" />
                    <h3>{item.itemName}</h3>
                    {/* <h4>{item.itemDescription}</h4> */}
                    <h5>${item.itemPrice}</h5>
                    <div className="amount-input">
                      <button onClick={() => addOneItem(item.itemName)}>
                        +
                      </button>
                      <p>{item.itemTotal}</p>
                      <button onClick={() => subtractOneItem(item.itemName)}>
                        -
                      </button>
                    </div>
                  </section>
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
                  <section className="menu-item">
                    <img src={item.itemPic} alt="" />
                    <h3>{item.itemName}</h3>
                    {/* <h4>{item.itemDescription}</h4> */}
                    <h5>${item.itemPrice}</h5>
                    <div className="amount-input">
                      <button onClick={() => addOneItem(item.itemName)}>
                        +
                      </button>
                      <p>{item.itemTotal}</p>
                      <button onClick={() => subtractOneItem(item.itemName)}>
                        -
                      </button>
                    </div>
                  </section>
                )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
