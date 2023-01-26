import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import AddButton from "./AddButton";
import CheckOutButton from "./CheckOutButton";
import "./components.css";
import DollarDisplay from "./DollarDisplay";
import RevealButton from "./RevealButton";
import SubtractButton from "./SubtractButton";

export default function FloatingCart() {
  const { globalMenu, addOneItem, subtractOneItem, globalTotalPrice } =
    useContext(CartContext);
  const [buttonLabel, setButtonLabel] = useState("show");
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    let grandNumber = 0;

    globalMenu.forEach((item) => {
      grandNumber += item.itemTotal;
    });

    setItemsInCart(grandNumber);
  }, [globalMenu]);

  function minify() {
    document.getElementById("minified-cart-items").classList.toggle("minified");
    document.getElementById("unminified-values").classList.toggle("minified");

    // Aesthetics (label)
    if (buttonLabel === "show") {
      setButtonLabel("hide");
    } else {
      setButtonLabel("show");
    }
  }

  return (
    <div id="floating-cart">
      <div id="cart-top">
        <section id="cart-values">
          <section id="minified-cart-items" className="minified">
            <div id="cart-total">
              Cart total: <DollarDisplay amount={globalTotalPrice} />
            </div>
            <section id="items-in-basket">
              {globalMenu.map(
                (item) =>
                  item.itemTotal > 0 && (
                    <div className="cart-item-line">
                      <AddButton addFnc={() => addOneItem(item.itemName)} />
                      <p>{item.itemTotal}</p>
                      <SubtractButton
                        subtractFnc={() => subtractOneItem(item.itemName)}
                      />
                      {item.itemName}
                    </div>
                  )
              )}
            </section>
          </section>
          <section id="unminified-values">
            <p>In cart: {itemsInCart}</p>
          </section>
        </section>
        <RevealButton revealFnc={minify} />
      </div>

      <CheckOutButton />
    </div>
  );
}
