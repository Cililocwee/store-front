import React, { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Cart() {
  const {
    total,
    clearCart,
    addItemToCart,
    setCartItems,
    removeItemFromCart,
    cart,
  } = useContext(CartContext);

  return (
    <div className="content">
      <div className="cart-wrapper">
        Items in cart:
        <ul>
          {cart.map(({ cartItem }) => {
            return (
              // TODO See below // Implement actual item removal
              <div
                className="cart-item"
                id={cartItem.id}
                onClick={(e) => removeItemFromCart(e.target.id)}
              >
                {cartItem.type.type} - ${cartItem.price.price}
              </div>
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
