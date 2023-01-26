import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import AddButton from "./AddButton";
import CheckOutButton from "./CheckOutButton";
import "./components.css";
import DollarDisplay from "./DollarDisplay";
import InventoryInput from "./InventoryInput";
import RevealButton from "./RevealButton";

export default function FloatingCart() {
  const { globalMenu, globalTotalPrice } = useContext(CartContext);
  const [itemsInCart, setItemsInCart] = useState(0);
  const ref = useOutsideClick(minimizeFloater);

  function minimizeFloater() {
    document.getElementById("reveal-component").classList.remove("selected");
    document.getElementById("check-out-button").classList.add("minified");
    document.getElementById("minified-cart-items").classList.add("minified");
    document.getElementById("unminified-values").classList.remove("minified");
  }

  function useOutsideClick(callback) {
    const ref = useRef();

    useEffect(() => {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      }

      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref]);
    return ref;
  }

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
  }

  return (
    <div id="floating-cart" ref={ref}>
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
                      <InventoryInput item={item} />
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

      <CheckOutButton additionalFnc={minimizeFloater} />
    </div>
  );
}
