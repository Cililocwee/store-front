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
    counter,
  } = useContext(CartContext);

  const arr = cart;
  const counts = {};
  for (const num of arr) {
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
                  decrement={() => console.log("hi")}
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
