import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import VariableInput from "../components/VariableInput";

export default function Cart() {
  const { total, clearCart, addItemToCart, removeItemFromCart, cart } =
    useContext(CartContext);

  // const arr = cart;
  const counts = {};
  for (const num of cart) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  return (
    <div className="content">
      <div className="cart-wrapper">
        Items in cart:
        <ul>
          {Object.keys(counts).map((key) => {
            console.log(counts);
            return (
              <li>
                {/* Still need to implement clicks */}
                <VariableInput
                  item={key.split(",")[1]}
                  number={counts[key.split(",")]}
                  decrement={() => removeItemFromCart(key.split(","))}
                  increment={() => addItemToCart(key.split(","))}
                />
              </li>
            );
          })}
        </ul>
        {/* TODO: Total should always be in the format of $x.xx */}
        <div className="total-box">Total: ${total}</div>
        <button
          id="check-out"
          onClick={() => {
            alert(`Thank you for shopping. Your total is $${total}`);
          }}
        >
          Check Out
        </button>
        <button id="cart-clear" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
