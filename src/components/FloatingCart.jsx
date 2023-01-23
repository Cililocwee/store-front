import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import "./components.css";

export default function FloatingCart() {
  const { globalMenu, addOneItem } = useContext(CartContext);

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

  return (
    <div id="floating-cart">
      <div id="minimized-cart-items" className="minified">
        <p>v</p>
        <h5>Current cart:</h5>
        {globalMenu.map(
          (item) =>
            item.itemTotal > 0 && (
              <div>
                <button onClick={() => addOneItem(item.itemName)}>+</button>
                {item.itemTotal}{" "}
                <button onClick={() => addOneItem(item.itemName)}>-</button>
                {item.itemName} = {item.itemTotal * item.itemPrice}
              </div>
            )
        )}
      </div>
    </div>
  );
}
