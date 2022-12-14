import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import BackDrop from "../components/BackDrop";
import VariableInput from "../components/VariableInput";
import CartBG from "../assets/cartbackground.jpg";

export default function Cart() {
  const { total, clearCart, addItemToCart, removeItemFromCart, cart } =
    useContext(CartContext);

  // Counts of each item in inventory
  const counts = {};
  for (const num of cart) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  if (total > 0) {
    return (
      <BackDrop background={CartBG}>
        <div className="content">
          <div className="cart-wrapper">
            Items in cart:
            <ul>
              {Object.keys(counts).map((key) => {
                return (
                  <li>
                    <div className="receipt-line">
                      <VariableInput
                        item={key.split(",")[1]}
                        number={counts[key.split(",")]}
                        decrement={() => removeItemFromCart(key.split(","))}
                        increment={() => addItemToCart(key.split(","))}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* TODO: total at 0 should be 0.00 */}
            <div className="total-box">
              Total: ${total.toString().split("").slice(0, -2)}.
              {total.toString().split("").slice(-2)}
            </div>
            <button
              id="check-out"
              onClick={() => {
                alert(`Thank you for shopping. Your total is 
            $${total.toString().split("").slice(0, -2).join("")}.${total
                  .toString()
                  .split("")
                  .slice(-2)
                  .join("")}`);
              }}
            >
              Check Out
            </button>
            <button id="cart-clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </BackDrop>
    );
  } else {
    return (
      <BackDrop background={CartBG}>
        <div className="content">
          <div className="cart-wrapper">
            Items in cart:
            <ul></ul>
            {/* TODO: total at 0 should be 0.00 */}
            <div className="total-box">Total: $0.00</div>
            <button id="check-out">Check Out</button>
            <button id="cart-clear">Clear Cart</button>
          </div>
        </div>
      </BackDrop>
    );
  }
}
