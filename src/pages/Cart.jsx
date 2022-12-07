import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import VariableInput from "../components/VariableInput";

export default function Cart() {
  const {
    total,
    clearCart,
    addItemToCart,
    setCartItems,
    removeItemFromCart,
    cart,
  } = useContext(CartContext);

  const arr = cart;
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  // console.log(counts);
  return (
    <div className="content">
      <div className="cart-wrapper">
        Items in cart:
        <ul>
          {Object.keys(counts).map((key) => {
            return (
              <li>
                <VariableInput
                  item={key.split(",")[1]}
                  number={counts[key.split(",")]}
                />
              </li>
            );
          })}
        </ul>
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
