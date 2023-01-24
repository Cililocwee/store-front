import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import "./components.css";

export default function FloatingCart() {
  const { globalMenu, addOneItem, subtractOneItem } = useContext(CartContext);
  const [buttonLabel, setButtonLabel] = useState("bigify");
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    let grandTotal = 0;
    let grandNumber = 0;

    globalMenu.forEach((item) => {
      grandTotal += item.itemTotal * item.itemPrice;
    });

    globalMenu.forEach((item) => {
      grandNumber += item.itemTotal;
    });

    setTotalPrice(grandTotal);
    setItemsInCart(grandNumber);
  }, [globalMenu]);

  function minify() {
    document.getElementById("minified-cart-items").classList.toggle("minified");
    if (buttonLabel === "bigify") {
      setButtonLabel("minify");
    } else {
      setButtonLabel("bigify");
    }
  }

  return (
    <div id="floating-cart">
      <div id="minified-cart-items" className="minified">
        <h5>Current cart:</h5>
        {globalMenu.map(
          (item) =>
            item.itemTotal > 0 && (
              <div>
                <button onClick={() => addOneItem(item.itemName)}>+</button>
                {item.itemTotal}{" "}
                <button onClick={() => subtractOneItem(item.itemName)}>
                  -
                </button>
                {item.itemName} = {item.itemTotal * item.itemPrice}
              </div>
            )
        )}
      </div>
      <section id="unminified-values">
        <p>In cart: {itemsInCart}</p>
        <p>Total: {totalPrice}</p>
      </section>

      <button id="reveal-button" onClick={minify}>
        {buttonLabel}
      </button>
    </div>
  );
}
